import { CombatStrategy, Task } from "grimoire-kolmafia";
import {
  adv1,
  elementalResistance,
  myAdventures,
  myMaxhp,
  print,
  restoreHp,
  retrieveItem,
  runTurn,
  toUrl,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $element,
  $familiar,
  $item,
  $location,
  $skill,
  ensureEffect,
  get,
  have,
  set,
  uneffect,
} from "libram";

import { Macro } from "../../../lib/combat";
import { drunk } from "../../../lib/drunk";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getDefaultEquipment } from "../../../lib/equipment";
import { noncombatFamiliar } from "../../../lib/familiar";
import { Gossip } from "../../../lib/gossip";
import { capNonCombat } from "../../../lib/preparenoncom";
import {
  DIVES,
  HEAP_ATTEMPTS,
  LAST_STENCH_CHECK,
  LIFETIME_DIVES,
  REFUSES_UNTIL_COMPOST,
} from "../../../prefs/properties";

const epilogue = (gossip: Gossip) => {
  set(HEAP_ATTEMPTS, get(HEAP_ATTEMPTS, 0) + 1);

  if (get("lastEncounter") === "I Refuse!") {
    gossip.resetStench();

    set(DIVES, get(DIVES, 0) + 1);
    set(LIFETIME_DIVES, get(LIFETIME_DIVES, 0) + 1);
    set(HEAP_ATTEMPTS, 0);
    set(LAST_STENCH_CHECK, 0);
    set(REFUSES_UNTIL_COMPOST, get(REFUSES_UNTIL_COMPOST, 0) - 1);
  } else if (get("lastEncounter") === "The Compostal Service" && gossip.willCompost()) {
    set(REFUSES_UNTIL_COMPOST, 5);
  }
};

const familiar = () => {
  if (!drunk() && have($familiar`Space Jellyfish`)) {
    return $familiar`Space Jellyfish`;
  }
  return noncombatFamiliar();
};

const ambientStenchRe = () =>
  /<p>The oppressive smell of the heaps of garbage around you makes you feel sort of sick.<center><table><tr><td><img[A-Za-z0-9=":/. ]+><\/td><td[A-Za-z0-9=" ]+>You lose ([0-9]+) hit points./g;

function mustCheckStench() {
  const nextStenchCheck = [30, 45, 59].find((attempts) => attempts > get(LAST_STENCH_CHECK, 0));
  return !drunk() && nextStenchCheck !== undefined && get(HEAP_ATTEMPTS, 0) >= nextStenchCheck;
}

export class Heap {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Dive",
        completed: () => myAdventures() < 1,
        do: () => {
          if (mustCheckStench()) {
            print(
              `Went ${get(
                HEAP_ATTEMPTS,
                0,
              )} attempts at diving without success - double-checking stench level.`,
              "blue",
            );

            retrieveItem($item`seal tooth`);
            if (have($skill`Song of Starch`)) ensureEffect($effect`Song of Starch`);
            if (have($skill`Get Big`)) ensureEffect($effect`Big`);
            restoreHp(myMaxhp());

            const page = visitUrl(toUrl($location`The Heap`));
            if (page.includes("You're fighting")) {
              const re = ambientStenchRe();
              let match;
              let totalHpLost = 0;
              let matchCount = 0;
              while ((match = re.exec(page)) !== null) {
                totalHpLost += parseInt(match[1]);
                matchCount++;
              }
              if (matchCount > 0) {
                const averageHpLost = totalHpLost / matchCount;
                const stenchDamage =
                  averageHpLost / (1 - elementalResistance($element`stench`) / 100);
                const stenchLevel = Math.round(stenchDamage / 5);
                print(
                  `Computed: average HP lost ${averageHpLost}, average stench damage dealt ${stenchDamage}, expected stench level ${stenchLevel}`,
                );
                this.gossip.setStench(stenchLevel);
                set(LAST_STENCH_CHECK, get(HEAP_ATTEMPTS, 0));
              }
            }
            runTurn();
            // We try not to get beaten up, but it might happen.
            if (have($effect`Beaten Up`)) {
              uneffect($effect`Beaten Up`);
            }
          } else {
            adv1($location`The Heap`, -1, "");
          }
        },
        effects: [...basicEffects(), ...noncombatEffects()],
        combat: new CombatStrategy().autoattack(() =>
          Macro.trySkill($skill`Extract Jelly`)
            .trySkill($skill`Extract`)
            .externalIf(
              mustCheckStench(),
              Macro.stasis()
                .tryItem($item`Rain-Doh indigo cup`)
                .tryItem($item`Rain-Doh blue balls`)
                .while_("!hpbelow 400 && !pastround 20", Macro.item($item`seal tooth`)),
            )
            .tryFreeRun(),
        ),
        prepare: () => {
          capNonCombat();
        },
        outfit: () => ({
          equip: getDefaultEquipment(),
          modifier: mustCheckStench() ? "-combat, -2 stench resistance" : "-combat",
          familiar: familiar(),
        }),
        choices: {
          203: 2,
          214: 2,
          216: () => (get(REFUSES_UNTIL_COMPOST, 0) <= 0 && this.gossip.willCompost() ? 1 : 2),
          218: 1,
          295: 2,
        },
        post: () => epilogue(this.gossip),
        limit: {
          guard: () => () => get(HEAP_ATTEMPTS, 0) < 60,
        },
      },
    ];
  }
}

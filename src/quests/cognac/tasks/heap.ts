import { CombatStrategy, Task } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";
import { $item, $location, $skill, Macro, get, set } from "libram";

import { getCombat } from "../../../lib/combat";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getEquipment } from "../../../lib/equipment";
import { noncombatFamiliar } from "../../../lib/familiar";
import { Gossip } from "../../../lib/gossip";
import { DIVES, REFUSES_UNTIL_COMPOST } from "../../../prefs/properties";

const runaway = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .runaway();

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
        do: () => $location`The Heap`,
        effects: [...basicEffects(), ...noncombatEffects()],
        combat: new CombatStrategy().autoattack(getCombat(runaway)),
        outfit: () => ({
          equip: getEquipment([
            $item`June cleaver`,
            $item`Greatest American Pants`,
            $item`mafia thumb ring`,
          ]),
          modifier: "-combat",
          bonuses: new Map([[$item`mafia thumb ring`, 200]]),
          familiar: noncombatFamiliar(),
        }),
        choices: {
          203: 2,
          214: 2,
          216: () => (get(REFUSES_UNTIL_COMPOST, 0) <= 0 && this.gossip.willCompost() ? 1 : 2),
          218: 1,
          295: 2,
        },
        post: () => {
          if (get("lastEncounter") === "I Refuse!") {
            this.gossip.resetStench();

            set(DIVES, get(DIVES, 0) + 1);

            set(REFUSES_UNTIL_COMPOST, get(REFUSES_UNTIL_COMPOST, 0) - 1);
          } else if (
            get("lastEncounter") === "The Compostal Service" &&
            this.gossip.willCompost()
          ) {
            set(REFUSES_UNTIL_COMPOST, 5);
          }
        },
      },
    ];
  }
}

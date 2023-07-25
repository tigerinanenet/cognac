import { CombatStrategy, Task } from "grimoire-kolmafia";
import { Familiar, inebrietyLimit, myAdventures, myInebriety } from "kolmafia";
import { $familiar, $location, $skill, get, have, set } from "libram";



import { Macro } from "../../../lib/combat";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getDefaultEquipment } from "../../../lib/equipment";
import {  runsOrNCFamiliar } from "../../../lib/familiar";
import { getModString } from "../../../lib/modifiers";
import { Gossip } from "../../../lib/gossip";
import { capNonCombat } from "../../../lib/preparenoncom";
import { DIVES, HEAP_ATTEMPTS, LIFETIME_DIVES, REFUSES_UNTIL_COMPOST } from "../../../prefs/properties";


const epilogue = (gossip: Gossip) => {
  set(HEAP_ATTEMPTS, get(HEAP_ATTEMPTS, 0) + 1);

  if (get("lastEncounter") === "I Refuse!") {
    gossip.resetStench();

    set(DIVES, get(DIVES, 0) + 1);
    set(LIFETIME_DIVES, get(LIFETIME_DIVES, 0) + 1);
    set(HEAP_ATTEMPTS, 0);
    set(REFUSES_UNTIL_COMPOST, get(REFUSES_UNTIL_COMPOST, 0) - 1);
  } else if (get("lastEncounter") === "The Compostal Service" && gossip.willCompost()) {
    set(REFUSES_UNTIL_COMPOST, 5);
  }
};

const drunk = (): boolean => {
  return myInebriety() > inebrietyLimit();
};


export function pickFamiliar(): Familiar {
  if (!drunk() && have($familiar`Space Jellyfish`)) {
    return $familiar`Space Jellyfish`;
  }
  return runsOrNCFamiliar();
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
        do: () => $location`The Heap`,
        effects: [...basicEffects(), ...noncombatEffects()],
        combat: new CombatStrategy().autoattack(Macro.trySkill($skill`Extract Jelly`).tryFreeRun()),
        prepare: () => {
          capNonCombat();
        },
        outfit: () => ({
          equip: getDefaultEquipment(),
          // Include familiar weight modifier if bander/boots is active, else just use -combat
          modifier: getModString(),
          familiar: pickFamiliar(),
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

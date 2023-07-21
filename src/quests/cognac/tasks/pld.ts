import { CombatStrategy, Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { $location, $skill, get } from "libram";

import { Macro } from "../../../lib/combat";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getDefaultEquipment } from "../../../lib/equipment";
import { noncombatFamiliar } from "../../../lib/familiar";
import { Gossip } from "../../../lib/gossip";
import { capNonCombat } from "../../../lib/preparenoncom";

export class PLD {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Delay until diving",
        completed: () => this.gossip.getWaitTime() === 0,
        do: () => {
          print("Waiting for next cognac round to begin");
          wait(this.gossip.getWaitTime());
        },
      },
      {
        name: "Increase stench",
        completed: () => this.gossip.readyToDive(),
        do: () => $location`The Purple Light District`,
        effects: [...basicEffects(), ...noncombatEffects()],
        combat: new CombatStrategy().autoattack(Macro.trySkill($skill`Extract`).tryFreeRun()),
        prepare: () => {
          capNonCombat();
        },
        outfit: () => ({
          equip: getDefaultEquipment(),
          modifier: "-combat",
          familiar: noncombatFamiliar(),
        }),
        choices: {
          205: 2,
          219: 2,
          223: 1,
          224: 1,
          294: 2,
        },
        post: () => {
          if (get("lastEncounter") === "The Furtivity of My City") {
            this.gossip.incrementStench();
            print(`Stench level increased to ${this.gossip.stench}.`);
          }
        },
      },
    ];
  }
}

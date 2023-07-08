import { CombatStrategy, Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { $item, $location, $skill, Macro, get } from "libram";

import { getCombat } from "../../../lib/combat";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getEquipment } from "../../../lib/equipment";
import { noncombatFamiliar } from "../../../lib/familiar";
import { Gossip } from "../../../lib/gossip";

const runaway = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .runaway();

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
          205: 2,
          219: 2,
          223: 1,
          224: 1,
          294: 2,
        },
        post: () => {
          if (get("lastEncounter") === "The Furtivity of My City") {
            this.gossip.incrementStench();
          }
        },
      },
    ];
  }
}

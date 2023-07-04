import { CombatStrategy, Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { $familiar, $item, $location, $skill, get, Macro } from "libram";
import { getEquipment } from "../../lib/equipment";
import { Gossip } from "../../lib/gossip";
import { getCombat } from "../../lib/combat";
import { basicEffects } from "../../lib/effects";

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
        effects: basicEffects(),
        combat: new CombatStrategy().macro(getCombat(runaway)),
        outfit: {
          equip: getEquipment([$item`June cleaver`, $item`Greatest American Pants`]),
          modifier: "-combat",
          familiar: $familiar`Disgeist`,
        },
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

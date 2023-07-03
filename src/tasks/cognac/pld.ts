import { CombatStrategy, Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, get, Macro } from "libram";
import { getEquipment } from "../../lib/equipment";
import { Gossip } from "../../lib/gossip";

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
        effects: [$effect`Sonata of sneakiness`, $effect`Smooth Movements`],
        combat: new CombatStrategy().macro(runaway),
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

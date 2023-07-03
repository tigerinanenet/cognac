import { CombatStrategy, Task } from "grimoire-kolmafia";
import { $effect, $familiar, $item, $location, $skill, get, have, Macro } from "libram";
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
        name: "Increase stench",
        completed: () => this.gossip.readyToDive(),
        do: () => $location`The Purple Light District`,
        effects: [$effect`The Sonata of Sneakiness`, $effect`Smooth Movements`],
        combat: new CombatStrategy().macro(runaway),
        outfit: {
          equip: [$item`June cleaver`, $item`Greatest American Pants`].filter(have) ?? [],
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

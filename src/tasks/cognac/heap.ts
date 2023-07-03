import { CombatStrategy, Task } from "grimoire-kolmafia";
import { myAdventures, wait } from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, get, have, Macro } from "libram";
import { Gossip } from "../../lib/gossip";

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
        effects: [$effect`The Sonata of Sneakiness`, $effect`Smooth Movements`],
        combat: new CombatStrategy().macro(runaway),
        outfit: {
          equip: [$item`June cleaver`, $item`Greatest American Pants`].filter(have) ?? [],
          modifier: "-combat",
          familiar: $familiar`Disgeist`,
        },
        choices: {
          203: 2,
          214: 2,
          216: 2,
          218: 1,
          295: 2,
        },
        post: () => {
          if (get("lastEncounter") === "I Refuse!") {
            this.gossip.resetStench();
            wait(60);
          }
        },
      },
    ];
  }
}

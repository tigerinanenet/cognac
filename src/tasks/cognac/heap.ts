import { CombatStrategy, Task } from "grimoire-kolmafia";
import { myAdventures, wait } from "kolmafia";
import { Macro, get, $familiar, $effect, $item, $location, $skill, set, have } from "libram";

import { getEquipment } from "../../lib/equipment";
import { DIVES } from "../../prefs/properties";
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
          equip: getEquipment([$item`June cleaver`, $item`Greatest American Pants`].filter(have)),
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
            const dives = parseInt(get(DIVES)) + 1;
            set(DIVES, dives);
            wait(60);
          }
        },
      },
    ];
  }
}

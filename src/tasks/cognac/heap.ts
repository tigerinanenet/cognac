import { CombatStrategy, Task } from "grimoire-kolmafia";
import { myAdventures, wait } from "kolmafia";
import { Macro, get, $familiar, $effect, $item, $location, $skill, set } from "libram";

import { getEquipment } from "../../lib/equipment";
import { DIVES } from "../../prefs/properties";

const runaway = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .runaway();

export class Heap {
  gossip: any = {};
  constructor(gossip: any) {
    this.gossip = gossip;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Dive",
        completed: () => myAdventures() < 1,
        do: () => $location`The Heap`,
        effects: [$effect`Sonata of sneakiness`, $effect`smooth movement`],
        combat: new CombatStrategy().macro(runaway),
        outfit: {
          equip: getEquipment([$item`june cleaver`, $item`Greatest American Pants`]),
          modifier: "-combat",
          familiar: $familiar`disgeist`,
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

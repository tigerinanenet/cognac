import { CombatStrategy, Task } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";
import { $familiar, $item, $location, $skill, get, have, Macro, set } from "libram";

import { getCombat } from "../../lib/combat";
import { getEquipment } from "../../lib/equipment";

import { Gossip } from "../../lib/gossip";
import { getCombat } from "../../lib/combat";
import { basicEffects } from "../../lib/effects";
import { DIVES, HEAPS_QUEUED } from "../../prefs/properties";

const runaway = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .runaway();

export class Heap {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  handleRefuse(): void {
    if (get("lastEncounter") !== "I Refuse!") {
      return;
    }
    this.gossip.resetStench();

    const divesPref = get(DIVES);
    const divesCount = divesPref === "" ? 0 : parseInt(divesPref);
    set(DIVES, divesCount + 1);

    const divesQueued = get(HEAPS_QUEUED);
    const diveQueuedCount = divesQueued === "" ? 0 : parseInt(divesQueued);
    set(HEAPS_QUEUED, diveQueuedCount + 1);
  }

  getTasks(): Task[] {
    return [
      {
        name: "Dive",
        completed: () => myAdventures() < 1,
        do: () => $location`The Heap`,
        effects: basicEffects(),
        combat: new CombatStrategy().macro(getCombat(runaway)),
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
          this.handleRefuse();
        },
      },
    ];
  }
}

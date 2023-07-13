import { Guards, Task } from "grimoire-kolmafia";
import { visitUrl } from "kolmafia";
import { $item, get, have } from "libram";

import { basicEffects } from "../../../lib/effects";

export function epilogueTask(): Task {
  return {
    name: "Give Lady Spookyraven Her Necklace",
    ready: () => have($item`Lady Spookyraven's necklace`),
    completed: () => get("questM20Necklace") === "finished",
    effects: basicEffects,
    do: () => {
      visitUrl("place.php?whichplace=manor1&action=manor1_ladys");
    },
    limit: { guard: Guards.changed("questM20Necklace") },
  };
}

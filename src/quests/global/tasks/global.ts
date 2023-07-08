import { Task } from "grimoire-kolmafia";
import { cliExecute, getFuel } from "kolmafia";
import { $effect, get } from "libram";

import { $item, $location, AsdonMartin, AutumnAton, have } from "libram";
import { spookyravenTasks } from "./spookyraven";
import { wandererTasks } from "./wanderer";

export function globalTasks(): Task[] {
  return [
    {
      name: "Drive Stealthily",
      completed: () => {
        return !AsdonMartin.installed() || have($effect`Driving Stealthily`);
      },
      do: () => {
        AsdonMartin.drive($effect`Driving Stealthily`);
      },
    },
    {
      name: "Fuel Asdon",
      completed: () => {
        return !AsdonMartin.installed() || have($item`Asdon Martin keyfob`) || getFuel() >= 50;
      },
      do: () => {
        AsdonMartin.fillTo(50);
      },
    },
    {
      name: "Deploy fall-e",
      completed: () => !AutumnAton.available(),
      do: () => {
        if (AutumnAton.sendTo($location`The Haunted Conservatory`)) {
          return;
        }
        AutumnAton.sendTo($location`The Haunted Pantry`);
      },
    },
    {
      name: "Refill Latte",
      ready: () => have($item`latte lovers member's mug`),
      completed: () => {
        // We're trying to get ink, so if we can't refill or have it, stop.
        if (get("latteIngredients").toLowerCase().includes("ink") || get("_latteRefillsUsed") >= 3)
          return true;

        if (get("latteUnlocks").split(",").includes("ink")) {
          // If unlocked, refill regardless.
          return false;
        } else {
          // If we haven't unlocked it, refill only if we have used the banish, and save one refill.
          return !get("_latteBanishUsed") || get("_latteRefillsUsed") >= 2;
        }
      },
      do: () => {
        const preferred = ["ink", "rawhide", "cajun", "carrot", "cinnamon", "pumpkin", "vanilla"];
        const unlocked = get("latteUnlocks").split(",");
        cliExecute(
          `latte refill ${preferred
            .filter((ingredient) => unlocked.includes(ingredient))
            .join(" ")}`
        );
      },
    },
    ...wandererTasks(),
    ...spookyravenTasks(),
  ];
}

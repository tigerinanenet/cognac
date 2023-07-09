import { Task } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $item, get, have } from "libram";

export const RefillLatte: Task = {
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
      `latte refill ${preferred.filter((ingredient) => unlocked.includes(ingredient)).join(" ")}`
    );
  },
};

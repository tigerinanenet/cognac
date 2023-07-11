import { Task } from "grimoire-kolmafia";
import { visitUrl } from "kolmafia";
import { $item, Latte, get, have } from "libram";

let latteRefreshed = false;
export const refreshLatte: Task = {
  name: "Refresh Latte",
  completed: () => latteRefreshed,
  do: () => {
    visitUrl("main.php?latte=1");
    latteRefreshed = true;
  },
};

export const refillLatte: Task = {
  name: "Refill Latte",
  ready: () => have($item`latte lovers member's mug`),
  completed: () => {
    // We're trying to get ink, so if we can't refill or have it, stop.
    if (Latte.currentIngredients().includes("ink") || Latte.refillsRemaining() === 0) return true;

    if (Latte.ingredientsUnlocked().includes("ink")) {
      // If unlocked, refill regardless.
      return false;
    } else {
      // If we haven't unlocked it, refill only if we have used the banish, and save one refill.
      return !get("_latteBanishUsed") || get("_latteRefillsUsed") >= 2;
    }
  },
  do: () => {
    const preferred: Latte.Ingredient[] = [
      "ink",
      "rawhide",
      "cajun",
      "carrot",
      "cinnamon",
      "pumpkin",
      "vanilla",
    ];
    const unlocked = Latte.ingredientsUnlocked();
    const plan = preferred.filter((ingredient) => unlocked.includes(ingredient));
    Latte.fill(plan[0], plan[1], plan[2]);
  },
};

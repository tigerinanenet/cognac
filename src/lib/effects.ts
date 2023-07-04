import { Effect } from "kolmafia";
import { $effect, $skill, have } from "libram";

export function basicEffects(): Effect[] {
  const effects = [];
  if (have($skill`The Sonata of Sneakiness`)) {
    effects.push($effect`The Sonata of Sneakiness`);
  }
  if (have($skill`Smooth Movement`)) {
    effects.push($effect`Smooth Movements`);
  }
  if (have($skill`Leash of Linguini`)) {
    effects.push($effect`Leash of Linguini`);
  }
  if (have($skill`Empathy of the Newt`)) {
    effects.push($effect`Empathy`);
  }
  if (have($skill`Blood Bond`)) {
    effects.push($effect`Blood Bond`);
  }
  return effects;
}

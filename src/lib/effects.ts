import { Effect } from "kolmafia";
import { $effect, have } from "libram";

export function basicEffects(): Effect[] {
  return (
    [
      $effect`The Sonata of Sneakiness`,
      $effect`Smooth Movements`,
      $effect`Leash of Linguini`,
      $effect`Empathy of the Newt`,
      $effect`Blood bond`,
    ].filter(have) ?? []
  );
}

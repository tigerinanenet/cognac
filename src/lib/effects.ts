import { Effect } from "kolmafia";
import { $effect, have } from "libram";

export function basicEffects(): Effect[] {
  return (
    [
      $effect`The Sonata of Sneakiness`,
      $effect`Smooth Movements`,
      $effect`Leash of Linguini`,
      $effect`Empathy`,
      $effect`Blood Bond`,
    ].filter(have) ?? []
  );
}

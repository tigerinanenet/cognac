import { Familiar } from "kolmafia";
import { $familiar, $item, have } from "libram";

export function noncombatFamiliar(): Familiar {
  if (
    have($familiar`Left-Hand Man`) &&
    (have($item`rusted-out shootin' iron`) || have($item`iFlail`)) &&
    have($item`unbreakable umbrella`)
  ) {
    return $familiar`Left-Hand Man`;
  } else if (
      have($familiar`Disembodied Hand`) &&
      (have($item`fish hatchet`) ||
          have($item`bass clarinet`) ||
          have($item`rusted-out shootin' iron`) ||
          have($item`iFlail`)
      )
  ) {
    return $familiar`Disembodied Hand`;
  } else if (have($familiar`Disgeist`)){
    return $familiar`Disgeist`;
  } else {
    return $familiar`none`;
  }
}

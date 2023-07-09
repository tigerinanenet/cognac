import { canAdventure, Location } from "kolmafia";
import { $item, $location, have } from "libram";

export function getLocation(): Location {
  if (
    !have($item`Spookyraven billiards room key`) &&
    canAdventure($location`The Haunted Kitchen`)
  ) {
    return $location`The Haunted Kitchen`;
  } else return $location`Noob Cave`;
}

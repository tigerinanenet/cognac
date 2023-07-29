import { Task } from "grimoire-kolmafia";
import { eat, retrieveItem } from "kolmafia";
import { $item, get } from "libram";

let lastPantsgivingFullness = get("_pantsgivingFullness");
export const pantsgiving: Task = {
  name: "Pantsgiving",
  completed: () => get("_pantsgivingFullness") <= lastPantsgivingFullness,
  do: () => {
    retrieveItem($item`Special Seasoning`);
    eat($item`meteoreo`);
    lastPantsgivingFullness = get("_pantsgivingFullness");
  },
};

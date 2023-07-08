import { Task } from "grimoire-kolmafia";
import { use } from "kolmafia";
import { $item, AsdonMartin, get, have } from "libram";
import { ASDON } from "../../../prefs/properties";

export const InstallAsdon: Task = {
  name: "Install Asdon",
  completed: () => AsdonInstalled(),
  do: () => {
    if (AsdonMartin.installed() || !have($item`Asdon Martin keyfob`)) {
      return;
    }
    if (!get(ASDON)) {
      return;
    }
    use($item`Asdon Martin keyfob`);
  },
};

export function AsdonInstalled(): boolean {
  if (!get(ASDON)) {
    return true;
  }
  if (AsdonMartin.installed()) {
    return true;
  }
  return !have($item`Asdon Martin keyfob`);
}

import { Quest, Task } from "grimoire-kolmafia";
import { use } from "kolmafia";
import { $item, AsdonMartin, get, have } from "libram";
import { ASDON } from "../../prefs/properties";

let asdonInstalled = false;

export const Prologue: Quest<Task> = {
  name: "Prologue",
  completed: () => asdonInstalled,
  tasks: [
    {
      name: "Install Asdon",
      completed: () => asdonInstalled,
      do: () => {
        asdonInstalled = true;
        if (AsdonMartin.installed() || !have($item`Asdon Martin keyfob`)) {
          return;
        }
        if (!get(ASDON)) {
          return;
        }
        use($item`Asdon Martin keyfob`);
      },
    },
  ],
};

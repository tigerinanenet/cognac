import { Quest, Task } from "grimoire-kolmafia";
import { use } from "kolmafia";
import { $item, AsdonMartin, get } from "libram";

import { ASDON } from "../../prefs/properties";

export const Prologue: Quest<Task> = {
  name: "Prologue",
  tasks: [
    {
      name: "Install Asdon",
      completed: () => !get(ASDON) || !AsdonMartin.have() || AsdonMartin.installed(),
      do: () => use($item`Asdon Martin keyfob`),
    },
  ],
};

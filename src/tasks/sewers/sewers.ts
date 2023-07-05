import { visitUrl } from "kolmafia";
import { Quest, Task } from "grimoire-kolmafia";

import { AcquireTasks } from "./acquire";
import { CageTasks } from "./cage";
import { ExploreTasks } from "./explore";
import { globalTasks } from "../global/global";

let complete = false;

export const Sewers: Quest<Task> = {
  name: "Sewers",
  completed: () => {
    if (!complete) {
      complete = !!visitUrl("clan_hobopolis.php?place=3&pwd", false).match(/Richard's Redoubt/);
    }
    return complete;
  },
  tasks: [...globalTasks(), ...CageTasks, ...AcquireTasks, ...ExploreTasks],
};

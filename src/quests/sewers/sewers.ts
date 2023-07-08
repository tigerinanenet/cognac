import { Quest, Task } from "grimoire-kolmafia";
import { visitUrl } from "kolmafia";

import { globalTasks } from "../shared/asdon";
import { AcquireTasks } from "./tasks/acquire";
import { CageTasks } from "./tasks/cage";
import { ExploreTasks } from "./tasks/explore";

let complete = false;

export function Sewers(nocage: boolean): Quest<Task> {
  return {
    name: "Sewers",
    completed: () => {
      if (!complete) {
        complete = !!visitUrl("clan_hobopolis.php?place=3&pwd", false).match(/Richard's Redoubt/);
      }
      return complete;
    },
    tasks: [...globalTasks(), ...(nocage ? [] : CageTasks), ...AcquireTasks, ...ExploreTasks],
  };
}

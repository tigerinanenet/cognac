import { Quest, Task } from "grimoire-kolmafia";
import { inebrietyLimit, myInebriety } from "kolmafia";

import { billiardsTask } from "./tasks/billards";
import { epilogueTask } from "./tasks/epilogue";
import { libraryTask } from "./tasks/library";

export const Spookyraven: Quest<Task> = {
  name: "Spookyraven",
  completed: () => {
    return myInebriety() > inebrietyLimit();
  },
  tasks: [billiardsTask(), libraryTask(), epilogueTask()],
};

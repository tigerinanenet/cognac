import { Quest, Task } from "grimoire-kolmafia";
import { inebrietyLimit, myInebriety } from "kolmafia";

import { BilliarTask } from "./tasks/billards";
import { EpilogueTask } from "./tasks/epilogue";
import { LibraryTask } from "./tasks/library";

export const Spookyraven: Quest<Task> = {
  name: "Spookyraven",
  completed: () => {
    return myInebriety() > inebrietyLimit();
  },
  tasks: [BilliarTask(), LibraryTask(), EpilogueTask()],
};

import { Quest, Task } from "grimoire-kolmafia";

import { fuelAsdon, installAsdon } from "./tasks/asdon";
import { deployFalle } from "./tasks/autumnaton";
import { refillLatte, refreshLatte } from "./tasks/latte";

export const Prologue: Quest<Task> = {
  name: "Prologue",
  tasks: [installAsdon, fuelAsdon, deployFalle, refreshLatte, refillLatte],
};

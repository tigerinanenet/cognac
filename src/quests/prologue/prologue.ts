import { Quest, Task } from "grimoire-kolmafia";

import { FuelAsdon, InstallAsdon } from "./tasks/asdon";
import { DeployFalle } from "./tasks/autumnaton";
import { RefillLatte } from "./tasks/latte";

export const Prologue: Quest<Task> = {
  name: "Prologue",
  tasks: [InstallAsdon, FuelAsdon, DeployFalle, RefillLatte],
};

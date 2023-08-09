import { Quest, Task } from "grimoire-kolmafia";

import { fuelAsdon, installAsdon } from "./tasks/asdon";
import { deployFalle } from "./tasks/autumnaton";
import { grabCMCPill, installCMC } from "./tasks/cmc";
import { refillLatte, refreshLatte } from "./tasks/latte";
import { pantsgiving } from "./tasks/pantsgiving";
import { setExtract } from "./tasks/sourceterminal";
import { installTrain, reconfigureTrain } from "./tasks/train";

export const Prologue: Quest<Task> = {
  name: "Prologue",
  tasks: [
    installAsdon,
    fuelAsdon,
    installCMC,
    grabCMCPill,
    installTrain,
    reconfigureTrain,
    deployFalle,
    refreshLatte,
    refillLatte,
    setExtract,
    pantsgiving,
  ],
};

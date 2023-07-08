import { Quest, Task } from "grimoire-kolmafia";
import { AsdonInstalled, InstallAsdon } from "./tasks/installasdon";

export const Prologue: Quest<Task> = {
  name: "Prologue",
  completed: () => AsdonInstalled(),
  tasks: [InstallAsdon],
};

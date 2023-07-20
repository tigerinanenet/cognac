import { Task } from "grimoire-kolmafia";
import { $skill, SourceTerminal } from "libram";

export const setExtract: Task = {
  name: "Set Extract",
  completed: () =>
    !SourceTerminal.have() || SourceTerminal.getSkills().some((s) => s === $skill`Extract`),
  do: () => {
    SourceTerminal.educate($skill`Extract`);
  },
};

import { Task } from "grimoire-kolmafia";
import { $location, AutumnAton } from "libram";

export const deployFalle: Task = {
  name: "Deploy fall-e",
  completed: () => !AutumnAton.available(),
  do: () => {
    if (AutumnAton.sendTo($location`The Haunted Conservatory`)) {
      return;
    }
    AutumnAton.sendTo($location`The Haunted Pantry`);
  },
};

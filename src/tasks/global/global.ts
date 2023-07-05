import { Task } from "grimoire-kolmafia";
import { getFuel } from "kolmafia";

import { $location, AsdonMartin, AutumnAton } from "libram";

export const globalTasks = (): Task[] => {
  return [
    {
      name: "Fuel Asdon",
      completed: () => {
        return !AsdonMartin.have() || getFuel() >= 37;
      },
      do: () => {
        AsdonMartin.fillTo(37);
      },
    },
    {
      name: "Deploy fall-e",
      completed: () => !AutumnAton.available(),
      do: () => {
        AutumnAton.sendTo($location`The Haunted Conservatory`);
      },
    },
  ];
};

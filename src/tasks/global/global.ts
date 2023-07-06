import { Task } from "grimoire-kolmafia";
import { getFuel } from "kolmafia";
import { $effect } from "libram";

import { $item, $location, AsdonMartin, AutumnAton, have } from "libram";

export const globalTasks = (): Task[] => {
  return [
    {
      name: "Fuel Asdon",
      completed: () => {
        return !AsdonMartin.installed() || have($item`Asdon Martin keyfob`) || getFuel() >= 50;
      },
      do: () => {
        AsdonMartin.fillTo(50);
      },
    },
    {
      name: "Drive Stealthily ",
      completed: () => {
        return !AsdonMartin.installed() || have($effect`Driving Stealthily`);
      },
      do: () => {
        AsdonMartin.drive($effect`Driving Stealthily`);
      },
    },
    {
      name: "Deploy fall-e",
      completed: () => !AutumnAton.available(),
      do: () => {
        if (AutumnAton.sendTo($location`The Haunted Conservatory`)) {
          return;
        }
        AutumnAton.sendTo($location`The Haunted Pantry`);
      },
    },
  ];
};

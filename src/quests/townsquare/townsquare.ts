import { Quest, Task } from "grimoire-kolmafia";
import { visitUrl } from "kolmafia";

import { DriveStealthily } from "../shared/asdon";
import { Explore } from "./tasks/explore";
import { Scobo } from "./tasks/scobo";
import { Snapper } from "./tasks/snapper";

const scoboParts = {
  hot: 0,
  cold: 0,
  stench: 0,
  spooky: 0,
  sleaze: 0,
  normal: 0,
};

const scobo = new Scobo(scoboParts);
const explore = new Explore(scoboParts);

let skipTownSquare = false;

export const TownSquare: Quest<Task> = {
  name: "Town Square",
  completed: () => {
    if (!skipTownSquare) {
      skipTownSquare = !!visitUrl("clan_hobopolis.php?place=8&pwd", false).match(
        /The Purple Light District/,
      );
    }
    return skipTownSquare;
  },
  tasks: [DriveStealthily, Snapper, ...scobo.getTasks(), ...explore.getTasks()],
};

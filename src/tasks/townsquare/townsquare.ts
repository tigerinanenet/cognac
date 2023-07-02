
import { visitUrl } from "kolmafia"
import { Quest, Task } from "grimoire-kolmafia"

import { Explore } from "./explore";
import { Scobo } from "./scobo";

const scoboParts = {
    "hot": 0,
    "cold": 0,
    "stench": 0,
    "spooky": 0,
    "sleaze": 0,
    "normal": 0
}

const scobo = new Scobo(scoboParts);
const explore = new Explore(scoboParts);

let skipTownSquare = false;

export const TownSquare: Quest<Task> = {
    name: "Town Square",
    completed: () => {
        if (!skipTownSquare) {
            skipTownSquare = !!visitUrl("clan_hobopolis.php?place=6&pwd", false).match(/The Heap/);
        }
        return skipTownSquare;
    },
    tasks: [
        ...scobo.getTasks(),
        ...explore.getTasks(),
    ]
}
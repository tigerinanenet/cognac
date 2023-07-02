
import { get } from "libram"
import { Quest, Task } from "grimoire-kolmafia"
import { Explore } from "./explore";
import { Scobo } from "./scobo";
import * as Properties from "../../properties"

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

export const TownSquare: Quest<Task> = {
    name: "Town Square",
    completed: () => get(Properties.TOWN_SQUARE) === "",
    tasks: [
        ...scobo.getTasks(),
        ...explore.getTasks(),
    ]
}
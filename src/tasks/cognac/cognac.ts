
import { $location } from "libram"
import { myAdventures } from "kolmafia";
import { Quest, Task } from "grimoire-kolmafia"

import { Gossip } from "./gossip"
import * as WhiteboardLib from "../../whiteboard";
import { Whiteboard } from "./whiteboard";
import { PLD } from "./pld";
import { Heap } from "./heap";


try{
    WhiteboardLib.read();
} catch{
    WhiteboardLib.write({});
}

const gossip = new Gossip();
const whiteboard = new Whiteboard(gossip);
const pld = new PLD(gossip);
const heap = new Heap(gossip);

export const Cognac: Quest<Task> = {
    name: "Cognac",
    completed: () => myAdventures() < 1,
    tasks: [
        ...whiteboard.getTasks(),
        ...pld.getTasks(),
        ...heap.getTasks()
    ]
}
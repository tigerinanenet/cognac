
import { myAdventures } from "kolmafia";
import { Quest, Task } from "grimoire-kolmafia"

import { Gossip } from "../../lib/gossip"
import * as WhiteboardLib from "../../lib/whiteboard";
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
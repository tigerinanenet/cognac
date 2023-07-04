import { Quest, Task } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";

import { Gossip } from "../../lib/gossip";
import * as WhiteboardLib from "../../lib/whiteboard";
import { Heap } from "./heap";
import { PLD } from "./pld";
import { Whiteboard } from "./whiteboard";

try {
  WhiteboardLib.read();
} catch {
  WhiteboardLib.write({});
}

const gossip = new Gossip();
const whiteboard = new Whiteboard(gossip);
const pld = new PLD(gossip);
const heap = new Heap(gossip);

let initializedGossip = false;

const gossipTask: Task = {
  name: "Init gossip",
  completed: (): boolean => initializedGossip,
  do: (): void => {
    gossip.init();
    initializedGossip = true;
  },
};

export const Cognac: Quest<Task> = {
  name: "Cognac",
  completed: () => myAdventures() < 1,
  tasks: [gossipTask, ...whiteboard.getTasks(), ...pld.getTasks(), ...heap.getTasks()],
};

import { myAdventures } from "kolmafia";
import { Quest, Task } from "grimoire-kolmafia";

import { Gossip } from "../../lib/gossip";
import * as WhiteboardLib from "../../lib/whiteboard";
import { Whiteboard } from "./whiteboard";
import { PLD } from "./pld";
import { Heap } from "./heap";
import { Round } from "./round";

try {
  WhiteboardLib.read();
} catch {
  WhiteboardLib.write({});
}

const gossip = new Gossip();
const whiteboard = new Whiteboard(gossip);
const pld = new PLD(gossip);
const heap = new Heap(gossip);
const round = new Round(gossip);

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
  tasks: [
    gossipTask,
    ...whiteboard.getTasks(),
    ...round.getTasks(),
    ...pld.getTasks(),
    ...heap.getTasks(),
  ],
};

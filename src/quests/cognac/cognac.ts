import { Quest, Task } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";

import { Gossip } from "../../lib/gossip";
import { globalTasks } from "../global/tasks/global";
import { Heap } from "./tasks/heap";
import { PLD } from "./tasks/pld";
import { Round } from "./tasks/round";
import { Whiteboard } from "./tasks/whiteboard";

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
    ...globalTasks(),
    gossipTask,
    ...whiteboard.getTasks(),
    ...round.getTasks(),
    ...pld.getTasks(),
    ...heap.getTasks(),
  ],
};

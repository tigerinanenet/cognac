import { Task } from "grimoire-kolmafia";
import { Gossip } from "../../../lib/gossip";

export class Whiteboard {
  gossip: Gossip;
  lastCheck = new Date().getTime();
  checkInterval: number = 5 * 1000;

  constructor(gossip: Gossip) {
    this.gossip = gossip;
    this.gossip.updateGossip();
  }

  getTasks(): Task[] {
    return [
      {
        name: "Gossip Update",
        completed: () => new Date().getTime() - this.lastCheck < this.checkInterval,
        do: () => {
          this.gossip.updateGossip();
          this.lastCheck = new Date().getTime();
        },
      },
    ];
  }
}

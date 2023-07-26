import { Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { get, set } from "libram";

import { Gossip } from "../../../lib/gossip";
import {
  CURRENT_PLAYERS,
  CURRENT_STENCH,
  HEAP_ATTEMPTS,
  REFUSES_UNTIL_COMPOST,
} from "../../../prefs/properties";

export class Round {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Initial wait",
        completed: () => get(CURRENT_STENCH) !== "" || get(CURRENT_PLAYERS) === "1",
        do: () => {
          print("Waiting for our first cognac round to begin");
          wait(5);
        },
      },
      {
        name: "Request compost",
        completed: (): boolean => {
          if (this.gossip.getWaitTime() === 0) {
            return true;
          }
          if (this.gossip.willCompost()) {
            return true;
          }
          return get(REFUSES_UNTIL_COMPOST, 0) > 0;
        },
        do: () => {
          this.gossip.requestCompost();
        },
      },
      {
        name: "Wait",
        completed: () => this.gossip.getWaitTime() === 0,
        do: () => {
          // New round, who dis?
          set(HEAP_ATTEMPTS, 0);
          print("Waiting for next cognac round to begin");
          wait(this.gossip.getWaitTime());
        },
      },
    ];
  }
}

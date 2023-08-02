import { Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { get, set } from "libram";

import { Gossip } from "../../../lib/gossip";
import {
  CURRENT_PLAYERS,
  CURRENT_STENCH,
  HEAP_ATTEMPTS,
  LAST_STENCH_CHECK,
  REFUSES_UNTIL_COMPOST,
} from "../../../prefs/properties";

export class Round {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  initRetries = 0;

  getTasks(): Task[] {
    return [
      {
        name: "Set initial stench if alone",
        ready: () => get(CURRENT_PLAYERS) === "1",
        completed: () => get(CURRENT_STENCH) !== "",
        do: () => {
          set(CURRENT_STENCH, 0);
        },
      },
      {
        name: "Initial wait",
        completed: () => get(CURRENT_STENCH) !== "",
        do: () => {
          print(
            `Waiting for start of next round (someone diving). Retry number ${this.initRetries} of 120`,
          );
          wait(5);
          this.initRetries++;
          if (this.initRetries === 120) {
            /* I refuse to wait longer than 10 minutes */
            set(CURRENT_STENCH, 0);
          }
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
          set(LAST_STENCH_CHECK, 0);
          print("Waiting for next cognac round to begin");
          wait(this.gossip.getWaitTime());
        },
      },
    ];
  }
}

import { Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { get } from "libram";
import { Gossip } from "../../lib/gossip";
import { REFUSES_UNTIL_COMPOST } from "../../prefs/properties";

export class Round {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Request compost",
        completed: (): boolean => {
          if (this.gossip.getWaitTime() === 0) {
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
          print("Waiting for next cognac round to begin");
          wait(this.gossip.getWaitTime());
        },
      },
    ];
  }
}

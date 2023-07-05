import { Task } from "grimoire-kolmafia";
import { print, wait } from "kolmafia";
import { get, set } from "libram";
import { Gossip } from "../../lib/gossip";
import { DO_COMPOST, HEAPS_QUEUED } from "../../prefs/properties";

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
          if (get(DO_COMPOST) !== "") {
            return true;
          }
          const heapDives = get(HEAPS_QUEUED) === "" ? 0 : parseInt(get(HEAPS_QUEUED));
          return heapDives < 5;
        },
        do: () => {
          this.gossip.requestCompost();
          set(DO_COMPOST, "true");
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

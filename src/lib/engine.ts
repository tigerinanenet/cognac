import { Engine as BaseEngine, Task } from "grimoire-kolmafia";
import { haveEffect, myLocation, print } from "kolmafia";
import { $effect, $location, get, uneffect } from "libram";
import { Gossip } from "./gossip";

const MAX_HEAP_ROUND_LENGTH = 27;
const MAX_HEAP_LIVELOCKS = 3;

export class Engine extends BaseEngine<never, Task> {
  heapAdventures: number = 0;
  brokeHeap: number = 0;

  constructor(tasks: Task[]) {
    super(tasks);
  }

  tryHeapBreak() {
    if (get("lastEncounter") === "I Refuse!") {
      this.heapAdventures = 0;
    }
    if (myLocation() !== $location`The Heap`) {
      return;
    }
    this.heapAdventures++;
    if (this.heapAdventures >= MAX_HEAP_ROUND_LENGTH) {
      print(`Exceed max round length in heap. Resetting. . .`, `yellow`);
      new Gossip().resetStench();
      this.brokeHeap++;
    }
  }

  execute(task: Task): void {
    super.execute(task);
    if (get("lastEncounter") !== "Poetic Justice" && haveEffect($effect`Beaten Up`)) {
      throw `Combat lost`;
    }
    uneffect($effect`Beaten Up`);
    this.tryHeapBreak();
    if (this.brokeHeap >= MAX_HEAP_LIVELOCKS) {
      throw `Bug detected in application; heap appears to have entered a loop ${this.heapAdventures} times`;
    }
  }

  static defaultSettings = {
    ...BaseEngine.defaultSettings,
    choiceAdventureScript: "scripts/cognac/choice.ash",
    hpAutoRecovery: "0.5",
    hpAutoRecoveryTarget: "1.0",
  };
}

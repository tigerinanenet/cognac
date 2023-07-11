import { Engine as BaseEngine, Task } from "grimoire-kolmafia";
import { haveEffect } from "kolmafia";
import { $effect, get, uneffect } from "libram";

// 2.5 combat/NC, 6 NCs/heap. 5 sigma.
// const MAX_HEAP_ROUND_LENGTH = 75;
// const MAX_HEAP_LIVELOCKS = 3;

export class Engine extends BaseEngine<never, Task> {
  constructor(tasks: Task[]) {
    super(tasks);
  }

  execute(task: Task): void {
    super.execute(task);
    if (get("lastEncounter") !== "Poetic Justice" && haveEffect($effect`Beaten Up`)) {
      throw `Combat lost`;
    }
    uneffect($effect`Beaten Up`);
  }

  static defaultSettings = {
    ...BaseEngine.defaultSettings,
    choiceAdventureScript: "scripts/cognac/choice.ash",
    hpAutoRecovery: "0.5",
    hpAutoRecoveryTarget: "1.0",
  };
}

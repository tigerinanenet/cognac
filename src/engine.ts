import { Engine as BaseEngine, Task  } from "grimoire-kolmafia";
import { haveEffect, myAdventures } from "kolmafia";
import { have, PropertiesManager, uneffect, $effect } from "libram";

export class Engine extends BaseEngine<never, Task> {
  constructor(tasks: Task[]) {
    super(tasks);
  }

  execute(task: Task): void {
    const beaten_turns = haveEffect($effect`Beaten Up`);
    const start_advs = myAdventures();
    super.execute(task);
    // Crash if we unexpectedly lost the fight
    if (have($effect`Beaten Up`) && haveEffect($effect`Beaten Up`) <= 3) {
      // Poetic Justice gives 5
      if (
        haveEffect($effect`Beaten Up`) > beaten_turns || // Turns of beaten-up increased, so we lost
        (haveEffect($effect`Beaten Up`) === beaten_turns && myAdventures() < start_advs) // Turns of beaten-up was constant but adventures went down, so we lost fight while already beaten up
      )
        throw `Fight was lost (debug info: ${beaten_turns} => ${haveEffect(
          $effect`Beaten Up`
        )}, (${start_advs} => ${myAdventures()}); stop.`;
    }
    uneffect($effect`Beaten Up`);
  }

  initPropertiesManager(manager: PropertiesManager): void {
    manager.set({ hpAutoRecovery: 0.5, hpAutoRecoveryTarget: 1.0 });
  }
}
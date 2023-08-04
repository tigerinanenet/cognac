import { CombatStrategy, Task } from "grimoire-kolmafia";
import { abort, print, wait } from "kolmafia";
import { $location, get } from "libram";
import { set } from "libram/dist/property";

import { Macro } from "../../../lib/combat";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getDefaultEquipment } from "../../../lib/equipment";
import { selectBestFamiliar } from "../../../lib/familiar";
import { Gossip } from "../../../lib/gossip";
import { getModString } from "../../../lib/modifiers";
import { capNonCombat } from "../../../lib/preparenoncom";
import { CURRENT_STENCH, STENCH_TIMER } from "../../../prefs/properties";

export class PLD {
  gossip: Gossip;
  constructor(gossip: Gossip) {
    this.gossip = gossip;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Delay until diving",
        completed: () => this.gossip.getWaitTime() === 0,
        do: () => {
          print("Waiting for next cognac round to begin");
          wait(this.gossip.getWaitTime());
        },
      },
      {
        name: "Increase stench",
        completed: () => this.gossip.readyToDive(),
        do: () => $location`The Purple Light District`,
        effects: () => [...basicEffects(), ...noncombatEffects()],
        combat: new CombatStrategy().autoattack(Macro.tryFreeRun()),
        prepare: () => {
          capNonCombat();
        },
        outfit: () => ({
          equip: getDefaultEquipment(),
          // Include familiar weight modifier if bander/boots is active, else just use -combat
          modifier: getModString(),
          familiar: selectBestFamiliar(),
        }),
        choices: {
          205: 2,
          219: 2,
          223: 1,
          224: 1,
          294: 2,
        },
        post: () => {
          if (get("lastEncounter") === "The Furtivity of My City") {
            print(`Stench level increased to approx ${get(CURRENT_STENCH)}.`);
            // update whiteboard when close to goal for backwards compatibility
            if (this.gossip.almostReadyToDive()) {
              this.gossip.setStench(parseInt(get(CURRENT_STENCH)));
            }
            // detect if chatbot is working
            // this essetnially acts as a delay as it takes time for kol to generate the message and more time for chatbot to parse it
            if (parseInt(get(CURRENT_STENCH)) === 0) {
              let stenchTimer = parseInt(get(STENCH_TIMER));
              if (stenchTimer > 0) {
                // decrement
                stenchTimer = stenchTimer - 1;
                set(STENCH_TIMER, stenchTimer);
              } else if (stenchTimer === 0) {
                // error if we get to 0
                abort(
                  `Failed to detect stench increase while adv in PLD. Likely something wrong with chatbot script.`,
                );
              } else if (stenchTimer === -1) {
                // first time getting NC this round, set timer
                set(STENCH_TIMER, 2);
              }
            }
            if (parseInt(get(CURRENT_STENCH)) > 0 && parseInt(get(STENCH_TIMER)) !== -1) {
              // reset timer
              set(STENCH_TIMER, -1);
            }
          }
        },
      },
    ];
  }
}

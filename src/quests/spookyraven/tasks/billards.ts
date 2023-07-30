import { CombatStrategy, Task } from "grimoire-kolmafia";
import { $effects, $item, $location, have } from "libram";

import { Macro } from "../../../lib/combat";
import { noncombatEffects } from "../../../lib/effects";
import { getDefaultEquipment } from "../../../lib/equipment";
import { selectBestFamiliar } from "../../../lib/familiar";

export function billiardsTask(): Task {
  return {
    name: "Haunted Billiards Room",
    ready: () => have($item`Spookyraven billiards room key`),
    completed: () => have($item`[7302]Spookyraven library key`),
    effects: () => [...noncombatEffects(), ...$effects`Chalky Hand, Influence of Sphere`],
    outfit: () => ({
      equip: getDefaultEquipment(),
      modifier: "-combat",
      familiar: selectBestFamiliar(),
    }),
    choices: {
      900: 2, // Lights Out
      875: 1, // Hustle the ghost
      1436: 2, // Maps: go straight to hustle
    },
    combat: new CombatStrategy().autoattack(Macro.runaway().repeat()),
    do: $location`The Haunted Billiards Room`,
  };
}

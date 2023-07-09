import { CombatStrategy, Task } from "grimoire-kolmafia";
import { $effects, $item, $location, Macro, have } from "libram";
import { getCombat } from "../../../lib/combat";
import { noncombatEffects } from "../../../lib/effects";
import { getEquipment } from "../../../lib/equipment";
import { noncombatFamiliar } from "../../../lib/familiar";

export function BilliarTask(): Task {
  return {
    name: "Haunted Billiards Room",
    ready: () => have($item`Spookyraven billiards room key`),
    completed: () => have($item`[7302]Spookyraven library key`),
    effects: () => [...noncombatEffects(), ...$effects`Chalky Hand, Influence of Sphere`],
    outfit: () => ({
      equip: getEquipment([
        $item`June cleaver`,
        $item`Greatest American Pants`,
        $item`mafia thumb ring`,
      ]),
      modifier: "-combat",
      familiar: noncombatFamiliar(),
    }),
    choices: {
      900: 2, // Lights Out
      875: 1, // Hustle the ghost
      1436: 2, // Maps: go straight to hustle
    },
    combat: new CombatStrategy().autoattack(getCombat(Macro.runaway())),
    do: $location`The Haunted Billiards Room`,
  };
}

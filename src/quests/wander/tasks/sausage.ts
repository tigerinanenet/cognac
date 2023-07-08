import { Task } from "grimoire-kolmafia";
import { inebrietyLimit, myInebriety } from "kolmafia";
import { $item, getKramcoWandererChance, have } from "libram";
import { defaultEquipment, kill } from "../shared/combat";
import { getEffects } from "../shared/effects";
import { getLocation } from "../shared/location";

export function SausageTask(): Task {
  return {
    name: "Sausage Goblin",
    ready: () => have($item`Kramco Sausage-o-Matic™`) && myInebriety() <= inebrietyLimit(),
    completed: () => getKramcoWandererChance() < 1.0,
    effects: getEffects,
    outfit: () => ({
      equip: Object.values({
        ...defaultEquipment(),
        "off-hand": $item`Kramco Sausage-o-Matic™`,
      }),
      modifier: "-combat",
    }),
    combat: kill(),
    do: getLocation,
  };
}

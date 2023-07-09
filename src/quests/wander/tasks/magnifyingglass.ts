import { Task } from "grimoire-kolmafia";
import { $item, get, have } from "libram";
import { getEquipment } from "../../../lib/equipment";
import { defaultEquipment, kill } from "../shared/combat";
import { getEffects } from "../shared/effects";
import { getLocation } from "../shared/location";

export function MagnifyingGlass(): Task {
  return {
    name: "Magnifying Glass",
    ready: () => have($item`cursed magnifying glass`) && get("cursedMagnifyingGlassCount") === 13,
    completed: () => get("_voidFreeFights") >= 5,
    effects: getEffects,
    outfit: () => ({
      equip: getEquipment(
        Object.values({
          ...defaultEquipment(),
          "off-hand": $item`cursed magnifying glass`,
        })
      ),
      modifier: "-combat",
    }),
    combat: kill(),
    do: getLocation,
  };
}

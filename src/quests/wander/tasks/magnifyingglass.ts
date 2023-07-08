import { Task } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";
import { $item, SourceTerminal, get, have } from "libram";
import { defaultEquipment, kill } from "../shared/combat";
import { getEffects } from "../shared/effects";
import { getLocation } from "../shared/location";

function shouldRedigitize(): boolean {
  const digitizesLeft = SourceTerminal.getDigitizeUsesRemaining();
  const monsterCount = SourceTerminal.getDigitizeMonsterCount() + 1;
  // triangular number * 10 - 3
  const digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3;
  // Redigitize if fewer adventures than this digitize usage (account for thumb ring).
  return (
    SourceTerminal.have() &&
    SourceTerminal.canDigitize() &&
    myAdventures() / 0.96 < digitizesLeft * digitizeAdventuresUsed
  );
}

export function MagnifyingGlass(): Task {
  return {
    name: "Magnifying Glass",
    ready: () => have($item`cursed magnifying glass`) && get("cursedMagnifyingGlassCount") === 13,
    completed: () => get("_voidFreeFights") >= 5,
    effects: getEffects,
    outfit: () => ({
      equip: Object.values({
        ...defaultEquipment(),
        "off-hand": $item`cursed magnifying glass`,
      }),
      modifier: "-combat",
    }),
    combat: kill(),
    do: getLocation,
  };
}

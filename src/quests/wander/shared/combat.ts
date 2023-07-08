import { CombatStrategy } from "grimoire-kolmafia";
import { Item, SlotType } from "kolmafia";
import { $item, $skill, $skills, Macro, get, have } from "libram";

export function killMacro(): Macro {
  return Macro.trySkill($skill`Micrometeorite`)
    .trySkill($skill`Curse of Weaksauce`)
    .attack()
    .repeat();
}

export function kill(): CombatStrategy {
  return new CombatStrategy().autoattack(
    Macro.trySkill(...$skills`Micrometeorite, Curse of Weaksauce`)
      .attack()
      .repeat()
  );
}

export function defaultEquipment(): Partial<{ [_ in SlotType]: Item }> {
  const sweatNeeded = Math.max(0, 25 * 3 - get("_sweatOutSomeBoozeUsed") - get("sweat"));
  return {
    weapon: $item`June cleaver`,
    "off-hand": $item`cursed magnifying glass`,
    pants:
      sweatNeeded > 0 && have($item`designer sweatpants`)
        ? $item`designer sweatpants`
        : $item`Pantsgiving`,
    acc1: $item`lucky gold ring`,
    acc2: $item`Mr. Cheeng's spectacles`,
    acc3: $item`Mr. Screege's spectacles`,
  };
}

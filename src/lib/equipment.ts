import { Item, inebrietyLimit, myInebriety } from "kolmafia";
import { $item, have } from "libram";

function appendWineglass(equips: Item[]): void {
  if (!have($item`Drunkula's wineglass`)) {
    throw `You are overdrunk, but don't have a wineglass!`;
  }
  equips.push($item`Drunkula's wineglass`);
}

export function getEquipment(equips: Item[]): Item[] {
  const equipment = equips.filter(have);
  if (myInebriety() > inebrietyLimit()) {
    appendWineglass(equipment);
  }
  return equipment;
}

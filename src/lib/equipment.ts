import { inebrietyLimit, Item, myInebriety } from "kolmafia";
import { $item, get, have } from "libram";

import { FREE_RUN } from "../prefs/properties";

const defaultEquipment = [
  $item`June cleaver`,
  $item`tiny stillsuit`,
  ...(get(FREE_RUN, false) ? [] : [$item`mafia thumb ring`]),
];

if (have($item`Greatest American Pants`)) {
  defaultEquipment.push($item`Greatest American Pants`);
} else if (have($item`navel ring of navel gazing`)) {
  defaultEquipment.push($item`navel ring of navel gazing`);
}

function appendWineglass(equips: Item[]): void {
  if (!have($item`Drunkula's wineglass`)) {
    throw `You are overdrunk, but don't have a wineglass!`;
  }
  equips.push($item`Drunkula's wineglass`);
}

export function getEquipment(equips: Item[]): Item[] {
  const equipment = equips.filter((it) => have(it));
  if (myInebriety() > inebrietyLimit()) {
    appendWineglass(equipment);
  }
  return equipment;
}

export function getDefaultEquipment() {
  return getEquipment(defaultEquipment);
}

import { inebrietyLimit, Item, myInebriety } from "kolmafia";
import { $item, have } from "libram";

import { freeRunItemAvailable, shouldUseFreeRunItem } from "./freeRun";

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
  const defaultEquipment = [$item`June cleaver`, $item`tiny stillsuit`];

  if (!(freeRunItemAvailable() && shouldUseFreeRunItem())) {
    defaultEquipment.push($item`mafia thumb ring`);
    if (have($item`Greatest American Pants`)) {
      defaultEquipment.push($item`Greatest American Pants`);
    } else if (have($item`navel ring of navel gazing`)) {
      defaultEquipment.push($item`navel ring of navel gazing`);
    }
  }

  return getEquipment(defaultEquipment);
}

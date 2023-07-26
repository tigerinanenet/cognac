import { Task } from "grimoire-kolmafia";
import { getFuel, use } from "kolmafia";
import { $item, AsdonMartin, get, have } from "libram";

import { ASDON } from "../../../prefs/properties";
import { CMCInstalled } from "./cmc";

export const installAsdon: Task = {
  name: "Install Asdon",
  completed: () =>
    get("_workshedItemUsed") ||
    AsdonInstalled() ||
    (CMCInstalled() && get(`_coldMedicineConsults`) < 5),
  do: () => {
    if (AsdonMartin.installed() || !have($item`Asdon Martin keyfob`)) {
      return;
    }
    if (!get(ASDON)) {
      return;
    }
    use($item`Asdon Martin keyfob`);
  },
};

export const fuelAsdon: Task = {
  name: "Fuel Asdon",
  ready: () => getFuel() < 50,
  completed: () => {
    return !AsdonMartin.installed() || have($item`Asdon Martin keyfob`);
  },
  do: () => {
    AsdonMartin.fillTo(50);
  },
};

export function AsdonInstalled(): boolean {
  if (!get(ASDON)) {
    return true;
  }
  if (AsdonMartin.installed()) {
    return true;
  }
  return !have($item`Asdon Martin keyfob`);
}

import { Task } from "grimoire-kolmafia";
import { getFuel, use } from "kolmafia";
import { $item, AsdonMartin, get, have } from "libram";

import { WORKSHED } from "../../../prefs/properties";
import { cmcInProgress } from "./cmc";

function shouldInstallAsdon(): boolean {
  if (get("_workshedItemUsed")) return false;

  const desiredWorksheds = get(WORKSHED).split(`,`);

  if (!desiredWorksheds.includes(`asdon`)) return false;
  if (!have($item`Asdon Martin keyfob`)) return false;
  return !cmcInProgress();
}

export const installAsdon: Task = {
  name: "Install Asdon",
  ready: () => shouldInstallAsdon(),
  completed: () => AsdonMartin.installed(),
  do: () => use($item`Asdon Martin keyfob`),
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

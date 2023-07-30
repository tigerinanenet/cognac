import { Task } from "grimoire-kolmafia";
import { getFuel, use } from "kolmafia";
import { $item, AsdonMartin, get, have } from "libram";

import { WORKSHED } from "../../../prefs/properties";
import { CMCInProgress } from "./cmc";

function shouldInstallAsdon(): boolean {
  if (get("_workshedItemUsed")) return false;

  const desiredWorksheds = get(WORKSHED).split(`,`);
  //Check if user wants to install asdon at all
  if (desiredWorksheds.includes(`asdon`)) {
    //Need the workshed to install the workshed
    if (have($item`Asdon Martin keyfob`)) {
      if (desiredWorksheds.includes(`cmc`)) {
        //If the user wants to use CMC, don't replace CMC until grabbing 5 pills
        if (CMCInProgress()) {
          return false;
        } else return true;
      }
    }
  }
  return false;
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

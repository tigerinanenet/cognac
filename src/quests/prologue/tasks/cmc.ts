import { Task } from "grimoire-kolmafia";
import { getWorkshed, myAdventures, runChoice, totalTurnsPlayed, use, visitUrl } from "kolmafia";
import { $item, get, have } from "libram";

import { WORKSHED } from "../../../prefs/properties";

function shouldInstallCMC(): boolean {
  if (get("_workshedItemUsed")) return false;

  //Check if user wants to use CMC
  if (get(WORKSHED).split(`,`).includes(`cmc`)) {
    //We need to have it to be able to install it
    if (have($item`cold medicine cabinet`)) {
      //Install during the last 80 advs to grab all 5 pills
      if (myAdventures() <= 80) return true;
    }
  }
  return false;
}
function CMCInstalled(): boolean {
  return getWorkshed() === $item`cold medicine cabinet`;
}

export function CMCInProgress(): boolean {
  return CMCInstalled() && get(`_coldMedicineConsults`) < 5;
}

function CMCPillReady(): boolean {
  const workshedStatus = visitUrl(`campground.php?action=workshed`);
  return [`Breathitin`, `Extrovermectin`].some((pill) => workshedStatus.includes(pill));
}

export const installCMC: Task = {
  name: `Install CMC`,
  ready: () => shouldInstallCMC(),
  completed: () => CMCInstalled(),
  do: () => use(1, $item`cold medicine cabinet`),
};

export const grabCMCPill: Task = {
  name: `Grab CMC Pill`,
  ready: () => CMCPillReady() && CMCInstalled(),
  completed: () =>
    get(`_coldMedicineConsults`) >= 5 || totalTurnsPlayed() < get(`_nextColdMedicineConsult`),
  do: (): void => {
    visitUrl("campground.php?action=workshed");
    runChoice(5);
  },
};

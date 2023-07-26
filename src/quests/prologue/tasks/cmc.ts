import { Task } from "grimoire-kolmafia";
import { getWorkshed, myAdventures, runChoice, totalTurnsPlayed, use, visitUrl } from "kolmafia";
import { $item, get, have } from "libram";

import { CMC } from "../../../prefs/properties";

export function CMCInstalled(): boolean {
  if (!get(CMC)) {
    return true;
  }
  if (getWorkshed() === $item`cold medicine cabinet`) {
    return true;
  }
  return !have($item`cold medicine cabinet`);
}

export const installCMC: Task = {
  name: `Install CMC`,
  completed: () => get(`_workshedItemUsed`) || myAdventures() > 81 || CMCInstalled(),
  do: () => use(1, $item`cold medicine cabinet`),
};

function CMCPillReady(): boolean {
  const workshedStatus = visitUrl(`campground.php?action=workshed`);
  return [`Breathitin`, `Extrovermectin`].some((pill) => workshedStatus.includes(pill));
}

export const grabCMCPill: Task = {
  name: `Grab CMC Pill`,
  completed: () =>
    get(`_coldMedicineConsults`) >= 5 ||
    totalTurnsPlayed() < get(`_nextColdMedicineConsult`) ||
    !CMCInstalled() ||
    !CMCPillReady(),
  do: (): void => {
    visitUrl("campground.php?action=workshed");
    runChoice(5);
  },
};

import { Task } from "grimoire-kolmafia";
import { getWorkshed, myAdventures, runChoice, totalTurnsPlayed, use, visitUrl } from "kolmafia";
import { $item, get, have } from "libram";

import { WORKSHED } from "../../../prefs/properties";

function shouldInstallCMC(): boolean {
  if (get("_workshedItemUsed")) return false;
  if (!get(WORKSHED).split(`,`).includes(`cmc`)) return false;
  if (!have($item`cold medicine cabinet`)) return false;
  return myAdventures() <= 80;
}

function cmcInstalled(): boolean {
  return getWorkshed() === $item`cold medicine cabinet`;
}

export function cmcInProgress(): boolean {
  return cmcInstalled() && get(`_coldMedicineConsults`) < 5;
}

function cmcPillReady(): boolean {
  const workshedStatus = visitUrl(`campground.php?action=workshed`);
  return [`Breathitin`, `Extrovermectin`].some((pill) => workshedStatus.includes(pill));
}

export const installCMC: Task = {
  name: `Install CMC`,
  ready: () => shouldInstallCMC(),
  completed: () => cmcInstalled(),
  do: () => use(1, $item`cold medicine cabinet`),
};

export const grabCMCPill: Task = {
  name: `Grab CMC Pill`,
  ready: () => cmcPillReady() && cmcInstalled(),
  completed: () =>
    get(`_coldMedicineConsults`) >= 5 || totalTurnsPlayed() < get(`_nextColdMedicineConsult`),
  do: (): void => {
    visitUrl("campground.php?action=workshed");
    runChoice(5);
  },
};

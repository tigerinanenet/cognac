import { Task } from "grimoire-kolmafia";
import { use } from "kolmafia";
import { $item, TrainSet, get, have } from "libram";

import { TRAIN } from "../../../prefs/properties";
import { CMCInstalled } from "./cmc";

function trainInstalled(): boolean {
  if (!get(TRAIN)) {
    return true;
  }
  if (TrainSet.installed()) {
    return true;
  }
  return !have($item`model train set`);
}

const defaultPieces = [
  TrainSet.Station.COAL_HOPPER,
  TrainSet.Station.CANDY_FACTORY,
  TrainSet.Station.ORE_HOPPER,
  TrainSet.Station.TRACKSIDE_DINER,
  TrainSet.Station.GRAIN_SILO,
  TrainSet.Station.TOWER_FIZZY,
  TrainSet.Station.GAIN_MEAT,
  TrainSet.Station.VIEWING_PLATFORM,
];

export const installTrain: Task = {
  name: `Install Train`,
  completed: () =>
    get(`_workshedItemUsed`) ||
    trainInstalled() ||
    (CMCInstalled() && get(`_coldMedicineConsults`) < 5),
  do: (): void => {
    use(1, $item`model train set`);
    if (get(`trainsetConfiguration`) === ``) {
      TrainSet.setConfiguration(defaultPieces as TrainSet.Cycle);
    }
  },
};

function getRotatedCycle(): TrainSet.Cycle {
  const offset = get(`trainsetPosition`) % 8;
  const newPieces: TrainSet.Station[] = [];

  for (let i = 0; i < 8; i++) {
    const newPos = (i + offset) % 8;
    newPieces[newPos] = defaultPieces[i];
  }

  return newPieces as TrainSet.Cycle;
}

export const reconfigureTrain: Task = {
  name: `Reconfigure Trainset`,
  ready: () =>
    [
      TrainSet.Station.GRAIN_SILO,
      TrainSet.Station.TOWER_FIZZY,
      TrainSet.Station.GAIN_MEAT,
      TrainSet.Station.VIEWING_PLATFORM,
    ].includes(TrainSet.next()),
  completed: () =>
    !(get(`lastTrainsetConfiguration`) + 48 - get(`trainsetPosition`) <= 0) || !trainInstalled(),
  do: (): void => {
    TrainSet.setConfiguration(getRotatedCycle());
  },
};

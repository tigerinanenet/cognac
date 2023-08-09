import { Task } from "grimoire-kolmafia";
import { use } from "kolmafia";
import { $item, TrainSet, get, have } from "libram";

import { WORKSHED } from "../../../prefs/properties";
import { cmcInProgress } from "./cmc";

/*
If we're running from combats, Candy has >100 meat value since some
candies are worth marginally more than 100 and Polka Pop is worth much
more. Next, booze station can give 2 basic boozes and some are slightly
below mallmin in value. After that Ore/Diner both produce mallmin garbage
and the others don't produce anything.
*/
const idealTrainsetStations = [
  TrainSet.Station.COAL_HOPPER,
  TrainSet.Station.CANDY_FACTORY,
  TrainSet.Station.GRAIN_SILO,
  TrainSet.Station.ORE_HOPPER,
  TrainSet.Station.TRACKSIDE_DINER,
  TrainSet.Station.TOWER_FIZZY,
  TrainSet.Station.VIEWING_PLATFORM,
  TrainSet.Station.PRAWN_SILO,
];

function shouldInstallTrain(): boolean {
  if (get("_workshedItemUsed")) return false;

  const desiredWorksheds = get(WORKSHED).split(`,`);

  if (!desiredWorksheds.includes(`train`)) return false;
  if (!have($item`model train set`)) return false;
  return !cmcInProgress();
}

function rotateToIdealStation(): TrainSet.Cycle {
  const offset = get(`trainsetPosition`) % 8;
  const newPieces: TrainSet.Station[] = [];

  for (let i = 0; i < 8; i++) {
    const newPos = (i + offset) % 8;
    newPieces[newPos] = idealTrainsetStations[i];
  }

  return newPieces as TrainSet.Cycle;
}

/*
This is extremely dumb and I hate doing this. Librams TrainSet has a method, TrainSet.canConfigure(),
that would ideally be used here. Unfortunately it has some issue that results in it returning true
1-7 stations earlier than the actual point at which the trainset can be reconfigured, or at the very
least that was true during my testing and I was getting trapped in an infinite loop.
Instead, I simply redefine this feature :(
*/
function canReconfigureTrain(): boolean {
  return get(`lastTrainsetConfiguration`) + 48 - get(`trainsetPosition`) <= 0;
}

export const installTrain: Task = {
  name: `Install Train`,
  ready: () => shouldInstallTrain(),
  completed: () => TrainSet.installed(),
  do: (): void => {
    use(1, $item`model train set`);
    //If our trainset isn't yet configured, configure it
    if (get(`trainsetConfiguration`) === ``) {
      TrainSet.setConfiguration(idealTrainsetStations as TrainSet.Cycle);
    }
  },
};

export const reconfigureTrain: Task = {
  name: `Reconfigure Trainset`,
  //Reconfigure when one of the stations with no marginal value is next for slight bonus
  ready: () =>
    [
      TrainSet.Station.TOWER_FIZZY,
      TrainSet.Station.VIEWING_PLATFORM,
      TrainSet.Station.PRAWN_SILO,
    ].includes(TrainSet.next()) && canReconfigureTrain(),
  completed: () => !canReconfigureTrain(),
  do: () => TrainSet.setConfiguration(rotateToIdealStation()),
};

import { Effect } from "kolmafia";
import { $location } from "libram";
import { basicEffects, resistanceEffects } from "../../../lib/effects";
import { getLocation } from "./location";

export function getEffects(): Effect[] {
  return [
    ...basicEffects(),
    ...(getLocation() === $location`The Haunted Kitchen` ? resistanceEffects() : []),
  ];
}

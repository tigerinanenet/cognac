import { itemAmount } from "kolmafia";
import { $item, get } from "libram";

import { FREE_RUN } from "../prefs/properties";
import { drunk } from "./drunk";

export function freeRunItemAvailable(): boolean {
  return (
    itemAmount($item`Louder Than Bomb`) +
      itemAmount($item`divine champagne popper`) +
      itemAmount($item`tennis ball`) >
      0 ||
    itemAmount($item`green smoke bomb`) > 3 ||
    itemAmount($item`tattered scrap of paper`) > 10 ||
    itemAmount($item`GOTO`) > 20
  );
}

export function shouldUseFreeRunItem(): boolean {
  return !drunk() && get(FREE_RUN, false);
}

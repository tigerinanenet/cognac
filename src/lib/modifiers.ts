import {Familiar} from "kolmafia";
import { $familiar } from "libram";

import { selectBestFamiliar } from "./familiar";

export function getModString(): string {
  const fam: Familiar = selectBestFamiliar();
  function getModWeight(fam: Familiar) : string {
      let w = "0.02"
    switch(fam) {
        case $familiar`Frumious Bandersnatch`:
          w = "0.25";
          break;
        case $familiar`Pair of Stomping Boots`:
          w = "0.25";
          break;
        case $familiar`Left-Hand Man`:
          w = "0.00";
          break;
        case $familiar`Disembodied Hand`:
          w = "0.00";
          break;
        }
    return w;
  }

  return `-combat, ${getModWeight(fam)} familiar weight, 0.0001 init, 0.2 bonus "fuzzy slippers of hatred"`;
}

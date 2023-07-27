import { Familiar } from "kolmafia";
import { $familiar } from "libram";

import { selectBestFamiliar } from "./familiar";

export function getModString(): string {
  const fam: Familiar = selectBestFamiliar();
  const banderBoots: boolean =
    fam === $familiar`Frumious Bandersnatch` || fam === $familiar`Pair of Stomping Boots`;
  let fwWeight = "0.02";
  if (banderBoots) {
    fwWeight = "0.25";
  } else if(fam === $familiar`Left-Hand Man` || fam === $familiar`Disembodied Hand`) {
      fwWeight = "0.00";
  }
  return `-combat, ${fwWeight} familiar weight`;
}

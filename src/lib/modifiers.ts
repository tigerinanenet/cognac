import { Familiar } from "kolmafia";
import { $familiar } from "libram";

import { runsOrNCFamiliar } from "./familiar";

export function getModString(): string {
  const fam: Familiar = runsOrNCFamiliar();
  const banderBoots: boolean =
    fam === $familiar`Frumious Bandersnatch` || fam === $familiar`Pair of Stomping Boots`;
  let fwWeight = "0.02";
  if (banderBoots) {
    fwWeight = "0.25";
  }
  return `-combat, ${fwWeight} familiar weight`;
}

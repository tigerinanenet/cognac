import { Familiar, familiarWeight, numericModifier } from "kolmafia";
import { $familiar, $item, have, get } from "libram";


export function runsOrNCFamiliar(): Familiar {
  if(freeRunsFamiliar() !== $familiar`none`) {
    return freeRunsFamiliar()
  }
  return noncombatFamiliar();
}

export function noncombatFamiliar(): Familiar {
  if (
    have($familiar`Left-Hand Man`) &&
    (have($item`rusted-out shootin' iron`) || have($item`iFlail`)) &&
    have($item`unbreakable umbrella`)
  ) {
    return $familiar`Left-Hand Man`;
  } else if (
    have($familiar`Disembodied Hand`) &&
    (have($item`fish hatchet`) || have($item`bass clarinet`))
  ) {
    return $familiar`Disembodied Hand`;
  } else {
    return $familiar`Disgeist`;
  }
}

export function freeRunsFamiliar(): Familiar {
  const pickFamiliar = () => {
    if(have($familiar`Pair of Stomping Boots`)) {
      return $familiar`Pair of Stomping Boots`;
    } else if(have($familiar`Frumious Bandersnatch`)) {
      return $familiar`Frumious Bandersnatch`;
    } else {
      return $familiar`none`;
    }
  }

  const chosenFam: Familiar = pickFamiliar();
  if(chosenFam === $familiar`none`) {
    return $familiar`none`;
  }

  // Calculate total runs based on base weight + familiar weight modifiers
  const base_weight: number = familiarWeight(chosenFam);
  const bonus_weight: number = numericModifier("Familiar Weight");
  const familiar_total_runs: number = Math.floor((base_weight + bonus_weight) / 5);
  const available_runs = Math.max(familiar_total_runs - get(`_banderRunaways`, 0), 0);
  if(available_runs === 0) {
    return $familiar`none`;
  } else {
    return chosenFam;
  }

}

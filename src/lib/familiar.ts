import {
  Familiar,
  familiarWeight,
  inebrietyLimit,
  myFamiliar,
  myInebriety,
  numericModifier,
} from "kolmafia";
import { $familiar, $item, have, get } from "libram";

export function selectBestFamiliar(): Familiar {
  if (
    (myFamiliar() === $familiar`Stooper` && myInebriety() === inebrietyLimit()) ||
    myInebriety() === inebrietyLimit() + 1
  ) {
    return $familiar`Stooper`;
  }
  const availableBanderboots: Familiar = freeRunsFamiliar();
  if (availableBanderboots !== $familiar`none`) {
    return availableBanderboots;
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
  const pickRunsFamiliar = () => {
    if (have($familiar`Pair of Stomping Boots`)) {
      return $familiar`Pair of Stomping Boots`;
    } else if (have($familiar`Frumious Bandersnatch`)) {
      return $familiar`Frumious Bandersnatch`;
    } else {
      return $familiar`none`;
    }
  };

  const chosenFam: Familiar = pickRunsFamiliar();
  if (chosenFam === $familiar`none`) {
    return $familiar`none`;
  }

  // Calculate total runs based on base weight + familiar weight modifiers
  const baseWeight: number = familiarWeight(chosenFam);
  const bonus_weight: number = numericModifier("Familiar Weight");
  const familiar_total_runs: number = Math.floor((baseWeight + bonus_weight) / 5);
  const available_runs = Math.max(familiar_total_runs - get(`_banderRunaways`, 0), 0);
  if (available_runs === 0) {
    return $familiar`none`;
  } else {
    return chosenFam;
  }
}

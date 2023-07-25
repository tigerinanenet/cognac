import { Effect, toSkill } from "kolmafia";
import {$effects, have, $familiar} from "libram";
import {runsOrNCFamiliar} from "./familiar";

function filterHave(effects: Effect[]) {
  return effects.filter((effect) => have(toSkill(effect)));
}

export function basicEffects(): Effect[] {
  if(runsOrNCFamiliar() === $familiar`Frumious Bandersnatch`) {
    return filterHave(
      $effects`Leash of Linguini, Empathy, Blood Bond, Springy Fusilli, Cletus's Canticle of Celerity, Ode to Booze`,
      );
  } else {
    return filterHave(
      $effects`Leash of Linguini, Empathy, Blood Bond, Springy Fusilli, Cletus's Canticle of Celerity, `
    );
  }
}

export function noncombatEffects(): Effect[] {
  return filterHave($effects`The Sonata of Sneakiness, Smooth Movements`);
}

export function resistanceEffects(): Effect[] {
  return filterHave($effects`Elemental Saucesphere, Astral Shell`);
}

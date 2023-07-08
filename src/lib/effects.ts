import { Effect, toSkill } from "kolmafia";
import { $effects, have } from "libram";

function filterHave(effects: Effect[]) {
  return effects.filter((effect) => have(toSkill(effect)));
}

export function basicEffects(): Effect[] {
  return filterHave($effects`Leash of Linguini, Empathy, Blood Bond`);
}

export function noncombatEffects(): Effect[] {
  return filterHave($effects`The Sonata of Sneakiness, Smooth Movements`);
}

export function resistanceEffects(): Effect[] {
  return filterHave($effects`Elemental Saucesphere, Astral Shell`);
}

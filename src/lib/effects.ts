import { Effect, toSkill } from "kolmafia";
import {$effects, have, $familiar, $effect} from "libram";
import {runsOrNCFamiliar} from "./familiar";

function filterHave(effects: Effect[]) {
  return effects.filter((effect) => have(toSkill(effect)));
}

export function basicEffects(): Effect[] {
  const buffs: Effect[] = [$effect`Leash of Linguini`, $effect`Empathy`, $effect`Blood Bond`, $effect`Springy Fusilli`, $effect`Cletus's Canticle of Celerity`];
  if(runsOrNCFamiliar() === $familiar`Frumious Bandersnatch`) {
    buffs.push($effect`Ode to Booze`);
  }
  return filterHave(buffs);
}

export function noncombatEffects(): Effect[] {
  return filterHave($effects`The Sonata of Sneakiness, Smooth Movements`);
}

export function resistanceEffects(): Effect[] {
  return filterHave($effects`Elemental Saucesphere, Astral Shell`);
}

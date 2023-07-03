import { inebrietyLimit, myInebriety } from "kolmafia";
import { Macro } from "libram";

const drunkRunaway = Macro.runaway();

const drunk = (): boolean => {
  return myInebriety() >= inebrietyLimit();
};

export function getCombat(macro: Macro): Macro {
  return drunk() ? drunkRunaway : macro;
}

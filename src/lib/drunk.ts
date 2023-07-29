import { inebrietyLimit, myInebriety } from "kolmafia";

export function drunk(): boolean {
  return myInebriety() > inebrietyLimit();
}

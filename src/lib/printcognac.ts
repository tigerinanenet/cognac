import { print } from "kolmafia"
import { get } from "libram"

import { COGNACS } from "../prefs/properties";

export function printCognac() {
    print("Cognac summary:");
    print("");
    const cognacs = parseInt(get(COGNACS));
    cognacs > 0 ? 
        print(`You found ${cognacs} bottles of cognac!`, `green`) :
        print(`Didn't find any bottles of cognac this time. :(`, `red`);
  }
  
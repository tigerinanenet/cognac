
import { abort, print, userConfirm } from "kolmafia";

import { get } from "libram";
import * as Properties  from "./properties";

function showPreferences(): void {
    print("Preferences for cognac", "blue");
    print("")
    Object.values(Properties)
    .map(prettyPrint);
}

function prettyPrint(prop: string): void {
    const propVal = get(prop);
    let color = "black";
    if(!propVal) {
        color = "gray";
    }
    print(`${prop}: ${propVal}`, color);
}

function checkGarbo() {
    if (get(Properties.SKIP_GARBO)) {
        return;
    }
    // Certified 100% "not a hack"
    if (parseInt(get("garboEmbezzlerCount")) > 0) {
        return;
    }
    if(userConfirm("You have not yet run garbo. Are you sure you wish to proceed?")) {
        return;
    }
    abort("Go bonk those embezzlers real good.");
}

export {
    checkGarbo,
    showPreferences,
}
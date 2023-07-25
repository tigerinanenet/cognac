import { $familiar } from "libram";

import { runsOrNCFamiliar } from "./familiar";

export function getModString(): string {
    if(runsOrNCFamiliar() === $familiar`Frumious Bandersnatch` || runsOrNCFamiliar() === $familiar`Pair of Stomping Boots` )
    {
        return "-combat, 0.25 familiar weight"; // This way 1 free run counts for slightly more than a softcapped combat-rate modifier
    } else {
        return "-combat, 0.02 familiar weight"; // Small "tiebreaker" level of familiar weight score, so otherwise-unused slots can help us get Disgeist above 37.5 or 75
    }
}


import { visitUrl, print } from "kolmafia";

let talkToRichard = true;

export class Scobo {
    parts: any = {};

    constructor(parts: any) {
        this.parts = parts;
    }

    private processScoboParts(parts: any, html: string){
        const extractMatch = (re: RegExp) => {
            const matches = html.match(re);
            return matches ? parseInt(matches[1]) : 0;
        }
    
        const matchRegistry = {
            "hot": /Richard has[^\d]+(\d+)[<b>\\\/\s]+pairs of charred/,
            "cold": /Richard has[^\d]+(\d+)[<b>\\\/\s]+pairs of frozen/,
            "stench": /Richard has[^\d]+(\d+)[<b>\\\/\s]+pile/,
            "spooky": /Richard has[^\d]+(\d+)[<b>\\\/\s]+creepy/,
            "sleaze": /Richard has[^\d]+(\d+)[<b>\\\/\s]+hobo crotch/,
            "normal": /Richard has[^\d]+(\d+)[<b>\\\/\s]+hobo skin/
        }
        Object.entries(matchRegistry).map( entry => parts[entry[0]] = extractMatch(entry[1]));
    }

    getTasks() {
        return [
            {
                name: "Scobos",
                completed: () => Object.values(this.parts).some((count: any) => count < 1),
                do: () => {
                    const html = visitUrl("clan_hobopolis.php?preaction=simulacrum&place=3&qty=1");
                    this.processScoboParts(this.parts, html);
                }
    
            },
            {
                name: "Talk to Richard",
                completed: () => !talkToRichard,
                do: () => {
                    const html = visitUrl("clan_hobopolis.php?place=3&action=talkrichard&whichtalk=3&pwd", false);
                    this.processScoboParts(this.parts, html);
                    talkToRichard = false;
                }
            },
        ]
    }
}





import { $effect, $location } from "libram"
import { CombatStrategy, Task } from "grimoire-kolmafia"
import { mortar, attack } from "./combat"
import { print } from "kolmafia"

const elementMap: any = {
    "hot": $effect`Spirit of Cayenne`,
    "cold": $effect`Spirit of Peppermint`,
    "stench": $effect`Spirit of Garlic`,
    "spooky": $effect`Spirit of Wormwood`,
    "sleaze": $effect`Spirit of Grease`,
}


export class Explore {
    parts: any = {};
    targetElement: any = "normal";
    constructor(parts: any) {
        this.parts = parts;
    }

    getTasks(): Task[] {
        return [{
            name: "Fight hobo",
            completed: () => false,
            prepare: () => {
                this.targetElement = Object.keys(this.parts).find((elem: any) => this.parts[elem] < 1);
                print(this.parts[this.targetElement]);
                print(this.targetElement);
            },
            do: () => $location`Hobopolis Town Square`,
            effects: () => this.targetElement === "normal" ? [] : [elementMap[this.targetElement]],
            post: () => this.parts[this.targetElement]++,
            combat: new CombatStrategy().macro(this.targetElement === "normal" ? attack : mortar),
            choices: {
                200: 0,
                225: 3,
                230: 2,
                272: 2
            }
        }]
    }
}
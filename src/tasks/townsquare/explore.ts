
import { CombatStrategy, Task } from "grimoire-kolmafia"
import { $effect, $item, $location } from "libram"

import { attack, mortar } from "./combat"

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
    nextFightPrepped: any = false;
    baseTask = {
        do: () => $location`Hobopolis Town Square`,
        post: () => this.parts[this.targetElement]++,
        choices: {
            200: 0,
            225: 3,
            230: 2,
            272: 2
        }
    }

    constructor(parts: any) {
        this.parts = parts;
    }

    getTasks(): Task[] {
        return [
            {
                name: "Prep hobo fight",
                completed: this.nextFightPrepped,
                do: () => {
                    this.targetElement = Object.keys(this.parts).find((elem: any) => this.parts[elem] < 1);
                    this.nextFightPrepped = false;
                }
            },
            {
                ...this.baseTask,
                name: "Hobo combat physical",
                completed: () => this.targetElement === "normal",
                combat: new CombatStrategy().macro(attack),
                effects: [$effect`Carol of the Bulls`],
                outfit: {
                    equip: [$item`Fourth of May Cosplay Saber`]
                }

            },
            {
                ...this.baseTask,
                name: "Hobo combat elemental",
                completed: () => this.targetElement !== "normal",
                effects: [elementMap[this.targetElement]],
                combat: new CombatStrategy().macro(mortar)
            }
        ]
    }
}
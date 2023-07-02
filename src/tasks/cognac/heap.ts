
import { Macro, get, $familiar, $skill, $location, $item } from "libram"
import { myAdventures } from "kolmafia";
import { CombatStrategy, Task } from "grimoire-kolmafia"
//import { getEffects } from "./noncombat";

const runaway = Macro
    .trySkill($skill`Bowl a Curveball`)
    .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
    .runaway();

export class Heap {
    gossip: any = {}
    constructor(gossip: any) {
        this.gossip = gossip;
    }

    getTasks(): Task[] {
        return [
            {
                name: "Dive",
                completed: () => myAdventures() < 1,
                do: () => $location`The Heap`,
                //effects: getEffects(),
                combat: new CombatStrategy().macro(runaway),
                outfit: {
                    equip: [
                        $item`june cleaver`,
                        $item`Greatest American Pants`
                    ],
                    modifier: "-combat",
                    familiar: $familiar`disgeist`,
                },
                choices: {
                    203: 2,
                    214: 2,
                    216: 2,
                    218: 1,
                    295: 2
                },
                post: () => {
                    if(get("lastEncounter") === "I Refuse!") {
                        this.gossip.resetStench();
                    }
                }
            }
        ]
    }
}
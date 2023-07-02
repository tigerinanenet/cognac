
import { Macro, $familiar, $skill, $location, $item, get } from "libram"
import { canAdventure } from "kolmafia";
import { CombatStrategy, Task } from "grimoire-kolmafia"
//import { getEffects } from "./noncombat";

const runaway = Macro
    .trySkill($skill`Bowl a Curveball`)
    .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
    .runaway();

export class PLD {
    gossip: any = {}
    constructor(gossip: any) {
        this.gossip = gossip;
    }

    getTasks(): Task[] {
        return [
            {
                name: "Increase stench",
                completed: () => this.gossip.readyToDive(),
                do: () => $location`The Purple Light District`,
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
                    205: 2,
                    219: 2,
                    223: 1,
                    224: 1,
                    294: 2
                },
                post: () => {
                    if(get("lastEncounter") === "The Furtivity of My City") {
                        this.gossip.incrementStench();
                    }
                }
                
            }
        ]
    }
}
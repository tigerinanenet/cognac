import { CombatStrategy, Task } from "grimoire-kolmafia"
import { Macro, get, have, $effect, $familiar, $item, $location, $skill } from "libram"


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
                effects: [
                    $effect`Sonata of sneakiness`,
                    $effect`smooth movement`,
                ],
                combat: new CombatStrategy().macro(runaway),
                outfit: {
                    equip: [
                        $item`june cleaver`,
                        $item`Greatest American Pants`
                    ].filter(have) ?? [],
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
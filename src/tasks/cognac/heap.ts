
import { CombatStrategy, Task } from "grimoire-kolmafia"
import { myAdventures } from "kolmafia";
import { Macro, get, have, $familiar, $effect, $item, $location, $skill} from "libram"

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
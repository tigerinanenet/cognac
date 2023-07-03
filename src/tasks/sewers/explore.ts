import { have, Macro, $effect, $familiar, $skill, $location, $item } from "libram";
import { CombatStrategy, Task } from "grimoire-kolmafia";

const tryFreeRunThenAttack = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .attack();

let complete = false;

export const ExploreTasks: Task[] = [
  {
    name: "Explore sewer",
    completed: () => false,
    do: () => $location`A Maze of Sewer Tunnels`,
    effects: [$effect`Sonata of Sneakiness`, $effect`smooth movement`],
    combat: new CombatStrategy().macro(tryFreeRunThenAttack),
    outfit: {
      equip: [$item`gatorskin umbrella`, $item`hobo code binder`],
      modifier: "-combat",
      familiar: $familiar`disgeist`,
    },
    choices: {
      197: 1,
      198: 1,
      199: 1,
    },
  },
];

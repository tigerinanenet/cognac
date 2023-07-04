import { CombatStrategy, Task } from "grimoire-kolmafia";
import { $familiar, $item, $location, $skill, Macro } from "libram";
import { basicEffects } from "../../lib/effects";

const tryFreeRunThenAttack = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .attack();

export const ExploreTasks: Task[] = [
  {
    name: "Explore sewer",
    completed: () => false,
    do: () => $location`A Maze of Sewer Tunnels`,
    effects: basicEffects(),
    combat: new CombatStrategy().macro(tryFreeRunThenAttack),
    outfit: {
      equip: [$item`gatorskin umbrella`, $item`hobo code binder`],
      modifier: "-combat",
      familiar: $familiar`Disgeist`,
    },
    choices: {
      197: 1,
      198: 1,
      199: 1,
    },
  },
];

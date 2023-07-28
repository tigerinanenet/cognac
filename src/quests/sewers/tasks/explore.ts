import { CombatStrategy, Task } from "grimoire-kolmafia";
import { $item, $location, $skill, get } from "libram";

import { Macro } from "../../../lib/combat";
import { basicEffects, noncombatEffects } from "../../../lib/effects";
import { getEquipment } from "../../../lib/equipment";
import { noncombatFamiliar } from "../../../lib/familiar";
import { capNonCombat } from "../../../lib/preparenoncom";
import { FREE_RUN } from "../../../prefs/properties";

const tryFreeRunThenAttack = Macro.trySkill($skill`Bowl a Curveball`)
  .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
  .externalIf(get(FREE_RUN, false), Macro.freeRunItems())
  .attack()
  .repeat();

export const ExploreTasks: Task[] = [
  {
    name: "Explore sewer",
    completed: () => false,
    prepare: () => {
      capNonCombat();
    },
    do: () => $location`A Maze of Sewer Tunnels`,
    effects: [...basicEffects(), ...noncombatEffects()],
    combat: new CombatStrategy().autoattack(tryFreeRunThenAttack),
    outfit: () => ({
      equip: getEquipment([
        $item`gatorskin umbrella`,
        $item`hobo code binder`,
        ...(get(FREE_RUN, false) ? [] : [$item`mafia thumb ring`]),
      ]),
      modifier: "-combat",
      bonuses: new Map([[$item`mafia thumb ring`, 200]]),
      familiar: noncombatFamiliar(),
    }),
    choices: {
      197: 1,
      198: 1,
      199: 1,
      211: 1,
      212: 1,
    },
  },
];

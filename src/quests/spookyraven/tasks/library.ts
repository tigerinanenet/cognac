import { CombatStrategy, Task } from "grimoire-kolmafia";
import { adv1, cliExecute, visitUrl } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  Cartography,
  get,
  have,
  questStep,
} from "libram";

import { Macro } from "../../../lib/combat";
import { basicEffects } from "../../../lib/effects";
import { getEquipment } from "../../../lib/equipment";
import { defaultEquipment } from "../../wander/shared/combat";

export function libraryTask(): Task {
  return {
    name: "Spit Acid in Library",
    ready: () =>
      have($item`Jurassic Parka`) &&
      have($item`[7302]Spookyraven library key`) &&
      questStep("questM20Necklace") < 4 &&
      get("writingDesksDefeated") < 5,
    completed: () => have($effect`Everything Looks Yellow`),
    effects: basicEffects,
    outfit: () => ({
      equip: getEquipment(
        Object.values({
          ...defaultEquipment(),
          shirt: $item`Jurassic Parka`,
          "off-hand": $item`latte lovers member's mug`,
          pants: $item`Greatest American Pants`,
        }),
      ),
      familiar: $familiar`none`,
    }),
    choices: {
      894: 1, // Lights Out
      888: 4, // Take a Look (Rise)
      889: 5, // Take a Look (Fall)
      163: 4, // Melvil Dewey
    },
    prepare: () => cliExecute("parka acid"),
    combat: new CombatStrategy().autoattack(() =>
      Macro.if_(
        "monstername writing desk",
        Macro.externalIf(
          have($skill`Transcendent Olfaction`) &&
            get("olfactedMonster") !== $monster`writing desk` &&
            get("_olfactionsUsed") < 3,
          Macro.skill($skill`Transcendent Olfaction`),
        )
          .externalIf(
            have($skill`Gallapagosian Mating Call`) &&
              get("_gallapagosMonster") !== $monster`writing desk`,
            Macro.skill($skill`Gallapagosian Mating Call`),
          )
          .skill($skill`Spit jurassic acid`),
      )
        .trySkill($skill`Throw Latte on Opponent`)
        .tryFreeRun(),
    ),
    do: () => {
      if (Cartography.have() && get("_monstersMapped") < 3) {
        Cartography.mapMonster($location`The Haunted Library`, $monster`writing desk`);
      } else {
        adv1($location`The Haunted Library`, -1, "");
      }
      // Refresh latte ingredients.
      visitUrl("main.php?latte=1");
    },
    limit: { soft: 15 },
  };
}

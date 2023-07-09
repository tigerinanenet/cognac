import { CombatStrategy, Task } from "grimoire-kolmafia";
import { adv1, cliExecute } from "kolmafia";
import {
  $effect,
  $item,
  $location,
  $monster,
  $skill,
  Cartography,
  Macro,
  get,
  have,
  questStep,
} from "libram";
import { basicEffects } from "../../../lib/effects";
import { defaultEquipment } from "../../wander/shared/combat";

const outfit = () => {
  {
    let equip = Object.values({
      ...defaultEquipment(),
      shirt: $item`Jurassic Parka`,
      offhand: $item`latte lovers member's mug`,
      pants: $item`Greatest American Pants`,
    });
    equip = equip.filter(it => have(it));
    return {
      equip,
    };
  }
};

export function LibraryTask(): Task {
  const combatStrat = new CombatStrategy().autoattack(
    Macro.if_(
      "monstername writing desk",
      Macro.trySkill($skill`Transcendent Olfaction`, $skill`Gallapagosian Mating Call`).skill(
        $skill`Spit jurassic acid`
      )
    )
      .trySkill($skill`Throw Latte on Opponent`)
      .runaway()
  );

  return {
    name: "Spit Acid in Library",
    ready: () =>
      have($item`Jurassic Parka`) &&
      have($item`[7302]Spookyraven library key`) &&
      questStep("questM20Necklace") < 4 &&
      get("writingDesksDefeated") < 5,
    completed: () => have($effect`Everything Looks Yellow`),
    effects: basicEffects,
    outfit,
    choices: {
      894: 1, // Lights Out
      888: 4, // Take a Look (Rise)
      889: 5, // Take a Look (Fall)
      163: 4, // Melvil Dewey
    },
    prepare: () => cliExecute("parka acid"),
    combat: combatStrat,
    do: () => {
      if (Cartography.have() && get("_monstersMapped") < 3) {
        Cartography.mapMonster($location`The Haunted Library`, $monster`writing desk`);
      } else {
        adv1($location`The Haunted Library`, -1, "");
      }
    },
    limit: { soft: 8 },
  };
}
import { CombatStrategy, Guards, Task } from "grimoire-kolmafia";
import { adv1, cliExecute, visitUrl } from "kolmafia";
import {
  $effect,
  $effects,
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
import { getCombat } from "../../lib/combat";
import { basicEffects, noncombatEffects } from "../../lib/effects";
import { getEquipment } from "../../lib/equipment";
import { noncombatFamiliar } from "../../lib/familiar";
import { wandererEquipment } from "./wanderer";

export function spookyravenTasks(): Task[] {
  return [
    {
      name: "Haunted Billiards Room",
      ready: () => have($item`Spookyraven billiards room key`),
      completed: () => have($item`[7302]Spookyraven library key`),
      effects: () => [...noncombatEffects(), ...$effects`Chalky Hand, Influence of Sphere`],
      outfit: () => ({
        equip: getEquipment([
          $item`June cleaver`,
          $item`Greatest American Pants`,
          $item`mafia thumb ring`,
        ]),
        modifier: "-combat",
        familiar: noncombatFamiliar(),
      }),
      choices: {
        900: 2, // Lights Out
        875: 1, // Hustle the ghost
        1436: 2, // Maps: go straight to hustle
      },
      combat: new CombatStrategy().autoattack(getCombat(Macro.runaway())),
      do: $location`The Haunted Billiards Room`,
    },
    // Use Jurassic Parka to finish Spookyraven Library, slowly but surely
    {
      name: "Spit Acid in Library",
      ready: () =>
        have($item`Jurassic Parka`) &&
        have($item`[7302]Spookyraven library key`) &&
        questStep("questM20Necklace") < 4 &&
        get("writingDesksDefeated") < 5,
      completed: () => have($effect`Everything Looks Yellow`),
      effects: basicEffects,
      outfit: () => ({
        equip: Object.values({
          ...wandererEquipment(),
          shirt: $item`Jurassic Parka`,
          "off-hand": $item`latte lovers member's mug`,
          pants: $item`Greatest American Pants`,
        }),
      }),
      choices: {
        894: 1, // Lights Out
        888: 4, // Take a Look (Rise)
        889: 5, // Take a Look (Fall)
        163: 4, // Melvil Dewey
      },
      prepare: () => cliExecute("parka acid"),
      combat: new CombatStrategy().autoattack(
        Macro.if_(
          "monstername writing desk",
          Macro.trySkill($skill`Transcendent Olfaction`, $skill`Gallapagosian Mating Call`).skill(
            $skill`Spit jurassic acid`
          )
        )
          .trySkill($skill`Throw Latte on Opponent`)
          .runaway()
      ),
      do: () => {
        if (Cartography.have() && get("_monstersMapped") < 3) {
          Cartography.mapMonster($location`The Haunted Library`, $monster`writing desk`);
        } else {
          adv1($location`The Haunted Library`, -1, "");
        }
      },
      limit: { soft: 8 },
    },
    {
      name: "Give Lady Spookyraven Her Necklace",
      ready: () => have($item`Lady Spookyraven's necklace`),
      completed: () => get("questM20Necklace") === "finished",
      effects: basicEffects,
      do: () => {
        visitUrl("place.php?whichplace=manor1&action=manor1_ladys");
      },
      limit: { guard: Guards.changed("questM20Necklace") },
    },
  ];
}

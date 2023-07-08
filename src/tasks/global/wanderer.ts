import { CombatStrategy, Task } from "grimoire-kolmafia";
import {
  Effect,
  Item,
  Location,
  SlotType,
  canAdventure,
  inebrietyLimit,
  myInebriety,
  totalTurnsPlayed,
} from "kolmafia";
import {
  $effects,
  $item,
  $location,
  $monster,
  $skill,
  Counter,
  Macro,
  SourceTerminal,
  get,
  getKramcoWandererChance,
  have,
} from "libram";
import { basicEffects, resistanceEffects } from "../../lib/effects";

export function wandererKill(): CombatStrategy {
  return new CombatStrategy().autoattack(
    Macro.trySkill($skill`Micrometeorite`)
      .trySkill($skill`Curse of Weaksauce`)
      .attack()
      .repeat()
  );
}

function wandererLocation(): Location {
  if (
    !have($item`Spookyraven billiards room key`) &&
    canAdventure($location`The Haunted Kitchen`)
  ) {
    return $location`The Haunted Kitchen`;
  } else return $location`Noob Cave`;
}

function wandererEffects(): Effect[] {
  return [
    ...basicEffects(),
    ...(wandererLocation() === $location`The Haunted Kitchen` ? resistanceEffects() : []),
  ];
}

export function wandererEquipment(): Partial<{ [_ in SlotType]: Item }> {
  const sweatNeeded = Math.max(0, 25 * 3 - get("_sweatOutSomeBoozeUsed") - get("sweat"));
  return {
    weapon: $item`June cleaver`,
    "off-hand": $item`cursed magnifying glass`,
    pants:
      sweatNeeded > 0 && have($item`designer sweatpants`)
        ? $item`designer sweatpants`
        : $item`Pantsgiving`,
    acc1: $item`lucky gold ring`,
    acc2: $item`Mr. Cheeng's spectacles`,
    acc3: $item`Mr. Screege's spectacles`,
  };
}

export function wandererTasks(): Task[] {
  return [
    {
      name: "Voter",
      ready: () => have($item`"I Voted!" sticker`),
      completed: () =>
        get("_voteFreeFights") >= 3 ||
        totalTurnsPlayed() % 11 !== 1 ||
        get("lastVoteMonsterTurn") >= totalTurnsPlayed(),
      effects: wandererEffects,
      outfit: {
        equip: Object.values({ ...wandererEquipment(), acc3: $item`"I Voted!" sticker` }),
        modifier: "-combat",
      },
      combat: wandererKill(),
      do: wandererLocation,
    },
    {
      name: "Digitze",
      ready: () => SourceTerminal.have() && SourceTerminal.getDigitizeMonster() !== null,
      completed: () => Counter.get("Digitize Wanderer") > 0,
      effects: () => {
        const monster = SourceTerminal.getDigitizeMonster();
        const result = wandererEffects();
        if (monster === $monster`Knob Goblin Embezzler`) {
          result.push(...$effects`Polka of Plenty, Disco Leer`);
        }
        return result;
      },
      outfit: {
        equip: Object.values(wandererEquipment()),
      },
      combat: wandererKill(),
      do: wandererLocation,
    },
    {
      name: "Sausage Goblin",
      ready: () => have($item`Kramco Sausage-o-Matic™`) && myInebriety() <= inebrietyLimit(),
      completed: () => getKramcoWandererChance() < 1.0,
      effects: wandererEffects,
      outfit: {
        equip: Object.values({
          ...wandererEquipment(),
          "off-hand": $item`Kramco Sausage-o-Matic™`,
        }),
        modifier: "-combat",
      },
      combat: wandererKill(),
      do: wandererLocation,
    },
    {
      name: "Magnifying Glass",
      ready: () => have($item`cursed magnifying glass`) && get("cursedMagnifyingGlassCount") === 13,
      completed: () => get("_voidFreeFights") >= 5,
      effects: wandererEffects,
      outfit: {
        equip: Object.values({
          ...wandererEquipment(),
          "off-hand": $item`cursed magnifying glass`,
        }),
        modifier: "-combat",
      },
      combat: wandererKill(),
      do: wandererLocation,
    },
  ];
}

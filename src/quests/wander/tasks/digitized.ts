import { CombatStrategy, Task } from "grimoire-kolmafia";
import { Effect, myAdventures } from "kolmafia";
import { $effects, $monster, $skill, Counter, Macro, SourceTerminal } from "libram";

import { getEquipment } from "../../../lib/equipment";
import { defaultEquipment, killMacro } from "../shared/combat";
import { getEffects } from "../shared/effects";
import { getLocation } from "../shared/location";

function shouldRedigitize(): boolean {
  const digitizesLeft = SourceTerminal.getDigitizeUsesRemaining();
  const monsterCount = SourceTerminal.getDigitizeMonsterCount() + 1;
  // triangular number * 10 - 3
  const digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3;
  // Redigitize if fewer adventures than this digitize usage (account for thumb ring).
  return (
    SourceTerminal.have() &&
    SourceTerminal.canDigitize() &&
    myAdventures() / 0.96 < digitizesLeft * digitizeAdventuresUsed
  );
}

function meatBuffEffects(): Effect[] {
  const monster = SourceTerminal.getDigitizeMonster();
  const result = getEffects();
  if (monster === $monster`Knob Goblin Embezzler`) {
    result.push(...$effects`Polka of Plenty, Disco Leer`);
  }
  return result;
}

export function DigitizedTask(): Task {
  return {
    name: "Digitze",
    ready: () => SourceTerminal.have() && SourceTerminal.getDigitizeMonster() !== null,
    completed: () => Counter.get("Digitize Monster") > 0,
    effects: meatBuffEffects,
    outfit: () =>
      SourceTerminal.getDigitizeMonster() === $monster`Knob Goblin Embezzler`
        ? {
            objective: "Meat Drop",
          }
        : {
            equip: getEquipment(Object.values(defaultEquipment())),
          },
    combat: new CombatStrategy().autoattack(() =>
      Macro.externalIf(shouldRedigitize(), Macro.skill($skill`Digitize`)).step(killMacro()),
    ),
    prepare: () => {
      if (shouldRedigitize()) SourceTerminal.educate($skill`Digitize`);
    },
    do: getLocation,
  };
}

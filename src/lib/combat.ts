import { Item, inebrietyLimit, myInebriety } from "kolmafia";
import { $item, $skill, Macro as LibramMacro, have } from "libram";

const drunk = (): boolean => {
  return myInebriety() > inebrietyLimit();
};

export class Macro extends LibramMacro {
  pickpocket(): Macro {
    return this.step("pickpocket");
  }

  static pickpocket(): Macro {
    return new Macro().pickpocket();
  }

  tryItemsTogether(itemOrItems: Item | [Item, Item]) {
    if (have($skill`Ambidextrous Funkslinging`)) {
      return this.tryItem(itemOrItems);
    } else if (Array.isArray(itemOrItems)) {
      return this.tryItem(itemOrItems[0]).tryItem(itemOrItems[1]);
    } else {
      return this.tryItem(itemOrItems);
    }
  }

  static tryItemsTogether(itemOrItems: Item | [Item, Item]) {
    return new Macro().tryItemsTogether(itemOrItems);
  }

  stasis(): Macro {
    return this.trySkill($skill`Curse of Weaksauce`)
      .trySkill($skill`Micrometeorite`)
      .tryItemsTogether([$item`Time-Spinner`, $item`HOA citation pad`]);
  }

  static stasis(): Macro {
    return new Macro().stasis();
  }

  attackKill(): Macro {
    return this.stasis().attack().repeat();
  }

  static attackKill(): Macro {
    return new Macro().attackKill();
  }

  mortarShell(): Macro {
    return this.stasis()
      .trySkill($skill`Stuffed Mortar Shell`)
      .tryItem($item`seal tooth`);
  }

  static mortarShell(): Macro {
    return new Macro().mortarShell();
  }
}

export function runawayIfDrunk(macro: Macro): Macro {
  return drunk() ? Macro.runaway() : macro;
}

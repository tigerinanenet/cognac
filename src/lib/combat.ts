import { Item, inebrietyLimit, monsterAttack, myBuffedstat, myInebriety } from "kolmafia";
import { $item, $monster, $skill, $stat, Macro as LibramMacro, SongBoom, have } from "libram";

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

  tryDelevelStun(): Macro {
    return (
      this.trySkill($skill`Curse of Weaksauce`)
        .trySkill($skill`Micrometeorite`)
        .tryItemsTogether([$item`Time-Spinner`, $item`HOA citation pad`])
        .tryItemsTogether([$item`Rain-Doh blue balls`, $item`Rain-Doh indigo cup`])
        .tryItemsTogether([$item`train whistle`, $item`little red book`])
        // requires arms or will abort
        .if_($monster`Normal hobo`, Macro.tryItem($item`El Vibrato restraints`))
        .if_($monster`Stench hobo`, Macro.tryItem($item`El Vibrato restraints`))
        .if_($monster`Sleaze hobo`, Macro.tryItem($item`El Vibrato restraints`))
    );
  }

  static tryDelevelStun(): Macro {
    return new Macro().tryDelevelStun();
  }

  tryFreeRun(): Macro {
    return this.externalIf(
      !drunk(),
      // Only delevel if we have a chance of dying, to speed up combat
      Macro.externalIf(
        myBuffedstat($stat`Moxie`) + 10 < monsterAttack($monster`Stench hobo`),
        Macro.tryDelevelStun(),
      )
        .trySkill($skill`Extract`)
        .tryItem($item`porquoise-handled sixgun`)
        .trySkill($skill`Bowl a Curveball`)
        .trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`),
    )
      .runaway()
      .repeat();
  }

  static tryFreeRun(): Macro {
    return new Macro().tryFreeRun();
  }

  trySingAlong(): Macro {
    if (!SongBoom.have() || SongBoom.song() !== "Total Eclipse of Your Meat") return this;
    return this.trySkill($skill`Sing Along`);
  }

  static trySingAlong(): Macro {
    return new Macro().trySingAlong();
  }

  stasis(): Macro {
    return this.tryDelevelStun()
      .tryItem($item`porquoise-handled sixgun`)
      .trySkill($skill`Extract`)
      .trySingAlong();
  }

  static stasis(): Macro {
    return new Macro().stasis();
  }

  attackKill(): Macro {
    return this.stasis()
      .tryItem($item`porquoise-handled sixgun`)
      .trySkill($skill`Extract`)
      .trySingAlong()
      .attack()
      .repeat();
  }

  static attackKill(): Macro {
    return new Macro().attackKill();
  }

  mortarShell(): Macro {
    return this.stasis()
      .trySkill($skill`Stuffed Mortar Shell`)
      .tryItem($item`seal tooth`)
      .attack() // Mortar shell should finish the fight but just in-case
      .repeat();
  }

  static mortarShell(): Macro {
    return new Macro().mortarShell();
  }
}

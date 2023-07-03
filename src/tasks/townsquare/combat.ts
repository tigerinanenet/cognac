import { Macro, $skill, $item } from "libram";

export const mortar = Macro.trySkill($skill`Curse of weaksauce`)
  .trySkill($skill`Micrometeorite`)
  .tryItem($item`Rain-Doh indigo cup`)
  .trySkill($skill`Summon Love Mosquito`)
  .tryItem($item`Time-Spinner`)
  .tryItem($item`HOA citation pad`)
  .trySkill($skill`Stuffed Mortar Shell`)
  .tryItem($item`seal tooth`);

export const attack = Macro.trySkill($skill`Curse of weaksauce`)
  .trySkill($skill`Micrometeorite`)
  .tryItem($item`Rain-Doh indigo cup`)
  .trySkill($skill`Summon Love Mosquito`)
  .tryItem($item`Time-Spinner`)
  .tryItem($item`HOA citation pad`)
  .attack();

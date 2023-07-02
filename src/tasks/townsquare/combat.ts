
import { Macro, $skill, $item } from "libram"

const delevel = Macro.trySkill($skill`Curse of weaksauce`)
.trySkill($skill`Micrometeorite`)
.tryItem($item`Rain-Doh indigo cup`)
.trySkill($skill`Summon Love Mosquito`)
.tryItem($item`Time-Spinner`)
.tryItem($item`HOA citation pad`);

export const mortar = delevel
.skill($skill`Stuffed Mortar Shell`)
.item($item`seal tooth`);

export const attack = delevel
.attack();

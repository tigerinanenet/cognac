import { CombatStrategy, Task } from "grimoire-kolmafia";
import { $effect, $effects, $item, $location } from "libram";

import { attack, mortar } from "./combat";
import { ScoboPartType, ScoboParts } from "./parts";

const elementMap = {
  hot: $effects`Spirit of Cayenne`,
  cold: $effects`Spirit of Peppermint`,
  stench: $effects`Spirit of Garlic`,
  spooky: $effects`Spirit of Wormwood`,
  sleaze: $effects`Spirit of Bacon Grease`,
  normal: [],
};

export class Explore {
  parts: ScoboParts;
  targetElement: ScoboPartType = "normal";
  nextFightPrepped = false;
  baseTask = {
    do: () => {
      this.nextFightPrepped = false;
      return $location`Hobopolis Town Square`;
    },
    post: () => this.parts[this.targetElement]++,
    choices: {
      200: 0,
      225: 3,
      230: 2,
      272: 2,
    },
  };

  constructor(parts: ScoboParts) {
    this.parts = parts;
  }

  getTasks(): Task[] {
    return [
      {
        name: "Prep hobo fight",
        completed: () => this.nextFightPrepped,
        do: () => {
          this.targetElement = Object.keys(this.parts).find(
            (elem) => this.parts[elem as ScoboPartType] < 1,
          ) as ScoboPartType;
          this.nextFightPrepped = true;
        },
      },
      {
        ...this.baseTask,
        name: "Hobo combat physical",
        completed: () => this.targetElement !== "normal",
        combat: new CombatStrategy().autoattack(attack),
        effects: [$effect`Carol of the Bulls`],
        outfit: () => ({
          equip: [$item`Fourth of May Cosplay Saber`],
        }),
      },
      {
        ...this.baseTask,
        name: "Hobo combat elemental",
        completed: () => this.targetElement === "normal",
        effects: () => elementMap[this.targetElement],
        combat: new CombatStrategy().autoattack(mortar),
      },
    ];
  }
}

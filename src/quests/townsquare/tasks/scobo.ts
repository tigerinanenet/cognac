import { visitUrl } from "kolmafia";

import { ScoboPartType, ScoboParts } from "./parts";

let talkToRichard = true;

export class Scobo {
  parts: ScoboParts;

  constructor(parts: ScoboParts) {
    this.parts = parts;
  }

  private processScoboParts(parts: ScoboParts, html: string) {
    const extractMatch = (re: RegExp) => {
      const matches = html.match(re);
      return matches ? parseInt(matches[1]) : 0;
    };

    const matchRegistry = {
      hot: /Richard has[^\d]+(\d+)[<b>\\/\s]+pairs? of charred/,
      cold: /Richard has[^\d]+(\d+)[<b>\\/\s]+pairs? of frozen/,
      stench: /Richard has[^\d]+(\d+)[<b>\\/\s]+pile/,
      spooky: /Richard has[^\d]+(\d+)[<b>\\/\s]+creepy/,
      sleaze: /Richard has[^\d]+(\d+)[<b>\\/\s]+hobo crotch/,
      normal: /Richard has[^\d]+(\d+)[<b>\\/\s]+hobo skin/,
    };
    Object.entries(matchRegistry).map(
      ([key, value]) => (parts[key as ScoboPartType] = extractMatch(value))
    );
  }

  getTasks() {
    return [
      {
        name: "Scobos",
        completed: () => Object.values(this.parts).some((count) => (count as number) < 1),
        do: () => {
          const html = visitUrl("clan_hobopolis.php?preaction=simulacrum&place=3&qty=1");
          this.processScoboParts(this.parts, html);
        },
      },
      {
        name: "Talk to Richard",
        completed: () => !talkToRichard,
        do: () => {
          const html = visitUrl(
            "clan_hobopolis.php?place=3&action=talkrichard&whichtalk=3&pwd",
            false
          );
          this.processScoboParts(this.parts, html);
          talkToRichard = false;
        },
      },
    ];
  }
}

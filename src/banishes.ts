import { myTurncount } from "kolmafia"
import { $item, $skill, AsdonMartin, get, have } from "libram";

export const freeRuns = [
    {
      name: "Asdon Martin",
      available: (): boolean => {
        // From libram
        if (!AsdonMartin.installed()) return false;
        const banishes = get("banishedMonsters").split(":");
        const bumperIndex = banishes
          .map((string) => string.toLowerCase())
          .indexOf("spring-loaded front bumper");
        if (bumperIndex === -1) return true;
        return myTurncount() - parseInt(banishes[bumperIndex + 1]) > 30;
      },
      prepare: () => AsdonMartin.fillTo(50),
      do: $skill`Asdon Martin: Spring-Loaded Front Bumper`,
    },
    {
      name: "Cosmic Bowling Ball",
      available: () => have($item`cosmic bowling ball`),
      do: $skill`Bowl a Curveball`,
    },
  ];
  
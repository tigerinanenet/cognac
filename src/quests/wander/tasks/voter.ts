import { Task } from "grimoire-kolmafia";
import { totalTurnsPlayed } from "kolmafia";
import { $item, get, have } from "libram";
import { getEquipment } from "../../../lib/equipment";
import { defaultEquipment, kill } from "../shared/combat";
import { getEffects } from "../shared/effects";
import { getLocation } from "../shared/location";

export function VoterTask(): Task {
  return {
    name: "Voter",
    ready: () => have($item`"I Voted!" sticker`),
    completed: () =>
      get("_voteFreeFights") >= 3 ||
      totalTurnsPlayed() % 11 !== 1 ||
      get("lastVoteMonsterTurn") >= totalTurnsPlayed(),
    effects: getEffects(),
    outfit: () => ({
      equip: getEquipment(
        Object.values({ ...defaultEquipment(), acc3: $item`"I Voted!" sticker` })
      ),
      modifier: "-combat",
    }),
    combat: kill(),
    do: getLocation,
  };
}

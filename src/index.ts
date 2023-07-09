import { Args, getTasks } from "grimoire-kolmafia";
import { cliExecute, getClanId, myMeat } from "kolmafia";
import { Clan, get } from "libram";

import * as CognacSession from "./lib/cognac";
import { Engine } from "./lib/engine";
import { Gossip } from "./lib/gossip";
import { checkClan, checkGarbo, showPreferences } from "./prefs/prefs";
import * as Properties from "./prefs/properties";
import { Cognac } from "./quests/cognac/cognac";
import { Prologue } from "./quests/prologue/prologue";
import { Sewers } from "./quests/sewers/sewers";
import { Spookyraven } from "./quests/spookyraven/spookyraven";
import { TownSquare } from "./quests/townsquare/townsquare";
import { Wander } from "./quests/wander/wander";

const args = Args.create("Cognac", "Farming perscription strength alcohol since 2023.", {
  config: Args.flag({
    help: "Show script configuration, and exit.",
    default: false,
  }),
  nocage: Args.flag({
    help: "Do not fetch cagebait.",
    default: false,
  }),
});

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.config) {
    showPreferences();
    return;
  }

  checkGarbo();
  checkClan();

  const cognacTasks = getTasks([
    Prologue,
    Wander,
    Spookyraven,
    Sewers(args.nocage),
    TownSquare,
    Cognac,
  ]);
  const engine = new Engine(cognacTasks);

  const startingClan = getClanId();
  const meatToCloset = myMeat() > 1000000 ? myMeat() - 1000000 : 0;
  try {
    const clan = get(Properties.CLAN).replace(/'/g, "&apos;");
    Clan.join(clan);
    if (meatToCloset > 0) {
      cliExecute(`closet put ${meatToCloset} meat`);
    }
    engine.run();
  } finally {
    engine.destruct();
    new Gossip().destroy();
    Clan.join(startingClan);
    if (meatToCloset > 0) {
      cliExecute(`closet take ${meatToCloset} meat`);
    }
    CognacSession.save();
    CognacSession.print();
  }
}

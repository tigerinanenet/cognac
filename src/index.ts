import { Args, getTasks } from "grimoire-kolmafia";
import { getClanId } from "kolmafia";
import { Clan, get } from "libram";

import * as CognacSession from "./lib/cognac";
import { Engine } from "./lib/engine";
import { Gossip } from "./lib/gossip";
import { checkGarbo, showPreferences } from "./prefs/prefs";
import * as Properties from "./prefs/properties";
import { Cognac } from "./tasks/cognac/cognac";
import { Prologue } from "./tasks/prologue/prologue";
import { Sewers } from "./tasks/sewers/sewers";
import { TownSquare } from "./tasks/townsquare/townsquare";

const args = Args.create("Cognac", "Farming perscription strength alcohol since 2023.", {
  config: Args.flag({
    help: "Show script configuration, and exit.",
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

  const cognacTasks = getTasks([Prologue, Sewers, TownSquare, Cognac]);
  const engine = new Engine(cognacTasks);
  engine;

  const startingClan = getClanId();
  try {
    const clan = get(Properties.CLAN).replace(/'/g, "&apos;");
    Clan.join(clan);
    engine.run();
  } finally {
    engine.destruct();
    new Gossip().destroy();
    Clan.join(startingClan);
    CognacSession.save();
    CognacSession.print();
  }
}

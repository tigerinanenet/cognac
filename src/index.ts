import { Args, getTasks } from "grimoire-kolmafia";
import { getClanId, myAdventures } from "kolmafia";
import { Clan, get, set } from "libram";

import { Engine } from "./engine";
import { Gossip } from "./lib/gossip"
import { printCognac } from "./lib/printcognac";
import { checkGarbo, showPreferences } from "./prefs";
import * as Properties from "./properties";
import { Cognac } from "./tasks/cognac/cognac";
import { Sewers } from "./tasks/sewers/sewers";
import { TownSquare } from "./tasks/townsquare/townsquare";
  
const args = Args.create("Cognac", "Farming perscription strength alcohol since 2023.", {
  config: Args.flag({
      help: "Show script configuration, and exit.",
      default: false
  })
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
  if(myAdventures() > 0) {
      set(Properties.COGNACS, 0);
  }

  const cognacTasks = getTasks([
    Sewers,
    TownSquare,
    Cognac
  ])
  const engine = new Engine(cognacTasks);
  
  const startingClan = getClanId();
  try {
    Clan.join(get(Properties.CLAN));
    engine.run();
  } finally {
    engine.destruct();
    new Gossip().destroy();
    Clan.join(startingClan);
    printCognac();
  }
}
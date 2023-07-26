const kolmafia = require("kolmafia");

module.exports.main = function main(sender, message, channel) {
  let stench = kolmafia.getProperty("_cognac_heapStench");
  if (channel == "/hobopolis" && sender == "Dungeon") {
    if (message.endsWith("moved some trash out of the Purple Light District.") && stench != "") {
      stench = parseInt(stench) + 1;
      kolmafia.setProperty("_cognac_heapStench", stench);
      const targetStench = 8 + kolmafia.getProperty("_cognac_currentPlayers");
      if (stench % Math.ceil(targetStench / 4) == 0 || stench >= targetStench) {
        kolmafia.chatClan(`Stench level changed to ${stench}`, "hobopolis");
      }
    } else if (message.endsWith("moved some compost out of the Heap.") && stench != "") {
      stench = Math.max(0, parseInt(stench) - 1);
      kolmafia.setProperty("_cognac_heapStench", stench);
      const targetStench = 8 + kolmafia.getProperty("_cognac_currentPlayers");
      if (stench % Math.ceil(targetStench / 4) == 0 || stench >= targetStench) {
        kolmafia.chatClan(`Stench level changed to ${stench}`, "hobopolis");
      }
    } else if (message.endsWith("went treasure-hunting in The Heap.")) {
      kolmafia.setProperty("_cognac_heapStench", 0);
      kolmafia.chatClan(`Stench level changed to 0`, "hobopolis");
      kolmafia.setProperty("_lastDiver", message.split(" ")[0]);
    }
  }
};

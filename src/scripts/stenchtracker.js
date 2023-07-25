const kolmafia = require("kolmafia");

module.exports.main = function main(sender, message, channel) {
  if (channel == "/hobopolis" && sender == "Dungeon") {
    if (message.endsWith("moved some trash out of the Purple Light District.")) {
      const stench = kolmafia.getProperty("_cognac_heapStench");
      // keep stench undefined until updateGossip sets initial value to whiteboard
      kolmafia.setProperty("_cognac_heapStench", stench == "" ? "" : parseInt(stench) + 1);
    } else if (message.endsWith("moved some compost out of The Heap.")) {
      // keep stench undefined until updateGossip sets initial value to whiteboard
      kolmafa.setProperty(
        "_cognac_heapStench",
        stench == "" ? "" : Math.max(0, parseInt(stench) - 1),
      );
    } else if (message.endsWith("went treasure-hunting in The Heap.")) {
      kolmafia.setProperty("_cognac_heapStench", 0);
      kolmafia.setProperty("_lastDiver", message.split(" ")[0]);
    }
  }
};

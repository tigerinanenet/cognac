const kolmafia = require("kolmafia");

module.exports.main = function main(sender, message, channel) {
  if (channel == "/hobopolis" && sender == "Dungeon") {
    let stench = kolmafia.getProperty("_cognac_heapStench");
    if (message.endsWith("moved some trash out of the Purple Light District.") && stench != "") {
      stench = parseInt(stench) + 1;
      kolmafia.setProperty("_cognac_heapStench", stench);
      kolmafia.chatClan(`Stench level changed to ${stench}`, "Hobopolis");
    } else if (message.endsWith("moved some compost out of The Heap.") && stench != "") {
      stench = Math.max(0, parseInt(stench) - 1);
      kolmafa.setProperty("_cognac_heapStench", stench);
      kolmafia.chatClan(`Stench level changed to ${stench}`, "Hobopolis");
    } else if (message.endsWith("went treasure-hunting in The Heap.")) {
      kolmafia.setProperty("_cognac_heapStench", 0);
      kolmafia.chatClan(`Stench level changed to 0`, "Hobopolis");
      kolmafia.setProperty("_lastDiver", message.split(" ")[0]);
    }
  } else if (channel == "/hobopolis" && sender != "Dungeon") {
    const stench = kolmafia.getProperty("_cognac_heapStench");
    if (stench == "" && message.startsWith("Stench level changed to ")) {
      const myRe = /Stench level changed to (\d+)/i;
      const myArray = myRe.exec(message);
      kolmafia.setProperty("_cognac_heapStench", myArray[1]);
    }
  }
};

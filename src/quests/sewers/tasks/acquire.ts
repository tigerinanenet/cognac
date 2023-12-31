import { Task } from "grimoire-kolmafia";
import { buy } from "kolmafia";
import { $item, have } from "libram";

let skipDumplings = false;
let skipOozo = false;
let skipOiliness = false;
let skipGatorskin = false;

export const AcquireTasks: Task[] = [
  {
    name: "Mmm, dumpling",
    completed: () => have($item`unfortunate dumplings`) || skipDumplings,
    do: () => {
      buy($item`unfortunate dumplings`, 1, 20000);
      skipDumplings = !have($item`unfortunate dumplings`);
    },
  },
  {
    name: "Mmm, oozo",
    completed: () => have($item`bottle of Ooze-O`) || skipOozo,
    do: () => {
      buy($item`bottle of Ooze-O`, 1, 20000);
      skipOozo = !have($item`bottle of Ooze-O`);
    },
  },
  {
    name: "Get oil of oiliness",
    completed: () => have($item`oil of oiliness`) || skipOiliness,
    do: () => {
      buy($item`oil of oiliness`, 1, 10000);
      skipOiliness = !have($item`oil of oiliness`);
    },
  },
  {
    name: "Get gatorkskin umbrella",
    completed: () => have($item`gatorskin umbrella`) || skipGatorskin,
    do: () => {
      buy($item`gatorskin umbrella`, 1, 10000);
      skipGatorskin = !have($item`gatorskin umbrella`);
    },
  },
];

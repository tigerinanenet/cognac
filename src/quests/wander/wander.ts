import { Quest, Task } from "grimoire-kolmafia";
import { inebrietyLimit, myInebriety } from "kolmafia";

import { DigitizedTask } from "./tasks/digitized";
import { MagnifyingGlass } from "./tasks/magnifyingglass";
import { SausageTask } from "./tasks/sausage";
import { VoterTask } from "./tasks/voter";

export const Wander: Quest<Task> = {
  name: "Wander",
  completed: () => {
    return myInebriety() > inebrietyLimit();
  },
  tasks: [VoterTask(), DigitizedTask(), SausageTask(), MagnifyingGlass()],
};

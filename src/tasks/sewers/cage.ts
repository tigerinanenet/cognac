import { chatPrivate, wait } from "kolmafia";
import { get } from "libram";
import { Task } from "grimoire-kolmafia"
import { CLAN } from "../../properties"

const cagebait = "ASSBot";

let caged = false;

const cage = () => {
    /*
    * Kolmafia does not support receiving generic chat messages.
    * Can circumvent needing to hope for a cagebot by implementing your own
    * chatbot script, which will asynchronously set properties you can verify here.
    * 
    * Anyways, :prayge:
    */
    chatPrivate(cagebait, `cage ${get(CLAN)}`)

    // Give cagebot 1 minute to get in position.
    wait(60);
}

export const CageTasks: Task[] = [
    {
        name: "Catch ASSBot",
        completed: () => caged,
        do: () => {
            // YOLO
            caged = true;
            cage()
        }
    },
]
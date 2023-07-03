import { print as kolPrint } from "kolmafia"
import { $item, Session, get, set } from "libram"

import { COGNACS, DIVES } from "../prefs/properties";

const session = Session.current()

export function save() {
    const sessionDiff = session.diff(Session.current())
    const cognacs = sessionDiff.items.get($item`Ralph IX cognac`) ?? 0
    set(COGNACS, parseInt(get(COGNACS)) + cognacs);

}

export function print() {
    kolPrint("Cognac summary:");
    kolPrint("");
    const cognacs = parseInt(get(COGNACS));
    cognacs > 0 ? 
        kolPrint(`You found ${cognacs} bottles of cognac today!`, `green`) :
        kolPrint(`Didn't find any bottles of cognac this time. :(`, `red`);
    kolPrint("");
    const dives = parseInt(get(DIVES));
    const s = dives === 1 ? "" : "s";
    kolPrint(`You dove for treasure ${dives} time${s} today!}`)


  }


  
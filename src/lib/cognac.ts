import { print, totalTurnsPlayed } from "kolmafia";
import { $item, Session, get, set } from "libram";

import {
  COGNACS,
  DIVES,
  LIFETIME_COGNACS,
  LIFETIME_DIVES,
  LIFETIME_TURNS_SPENT,
  TURNS_SPENT,
} from "../prefs/properties";

const initialSession = Session.current();
const initialTurns = totalTurnsPlayed();

export function save(): void {
  const sessionDiff = Session.current().diff(initialSession);
  const cognacs = sessionDiff.items.get($item`Ralph IX cognac`) ?? 0;
  set(COGNACS, get(COGNACS, 0) + cognacs);
  set(TURNS_SPENT, get(TURNS_SPENT, 0) + totalTurnsPlayed() - initialTurns);

  set(LIFETIME_COGNACS, get(LIFETIME_COGNACS, 0) + cognacs);
  set(LIFETIME_TURNS_SPENT, get(LIFETIME_TURNS_SPENT, 0) + totalTurnsPlayed() - initialTurns);
}

export function printSession(): void {
  print("Cognac summary:");
  print("");

  const cognacs = get(COGNACS, 0);
  cognacs > 0
    ? print(`You found ${cognacs} bottle${cognacs !== 1 ? "s" : ""} of cognac today!`, `green`)
    : print(`Haven't found any bottles of cognac yet today. :(`, `red`);

  const dives = get(DIVES, 0);
  const s = dives === 1 ? "" : "s";
  print(`You dove for treasure ${dives} time${s} today!`);

  print(`You've spent ${get(TURNS_SPENT)} turns diving today!`);
}

export function printLifetime(): void {
  print("");
  print("Cognac lifetime summary:");
  print("");

  const cognacs = get(LIFETIME_COGNACS, 0);
  print(`You found ${cognacs} bottle${cognacs !== 1 ? "s" : ""} of cognac!`, `green`);

  const dives = get(LIFETIME_DIVES, 0);
  const s = dives === 1 ? "" : "s";
  print(`You dove for treasure ${dives} time${s}!`, `green`);

  print(`You've spent ${get(LIFETIME_TURNS_SPENT, 0)} turns diving!`, `green`);
}

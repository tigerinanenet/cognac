import { gamedayToInt, gametimeToInt, myName } from "kolmafia";
import { get, set } from "libram";

import { CURRENT_PLAYERS, CURRENT_STENCH } from "../prefs/properties";
import * as Whiteboard from "./whiteboard";

type GossipObject = {
  players: string[];
  requestingCompost: string[];
  stench: number;
  mutex: string;
  diveStart: number;
  gameday: number;
};

const BASE_STENCH_REQUIRED = 8;
export class Gossip {
  players: string[] = [];
  requestingCompost: string[] = [];
  stench = 0;
  diveStart = 0;
  gameday = 0;
  mutex = "";

  init(): void {
    this.updateGossip();
    this.startDay();
  }

  startDay(): void {
    this.claimMutex(0);
    // It's a new day; next cognac round is now.
    if (this.gameday !== gamedayToInt()) {
      this.diveStart = gametimeToInt();
      this.gameday = gamedayToInt();
    }
    this.write();
  }

  // If callback evaluates to true, the reason we were fetching
  // the mutex has already been fulfilled.
  claimMutex(retries: number, callback?: () => boolean): boolean {
    sleep(100);
    this.updateGossip();

    if (callback && callback()) {
      return false;
    }

    if (retries > 50) {
      throw `Could not claim whiteboard mutex`;
    }
    if (this.mutex === myName()) {
      return true;
    }

    if (this.mutex === "") {
      this.mutex = myName();
      Whiteboard.write(this.asRawJSON());
      sleep(50);
      this.claimMutex(retries + 1);
    }

    return this.claimMutex(retries + 1);
  }

  asRawJSON(): GossipObject {
    return {
      players: this.players,
      stench: this.stench,
      diveStart: this.diveStart,
      mutex: this.mutex,
      gameday: this.gameday,
      requestingCompost: this.requestingCompost,
    };
  }

  updateGossip(): void {
    const gossip = Whiteboard.read() as GossipObject;
    this.players = gossip.players || [];
    this.requestingCompost = gossip.requestingCompost || [];
    // Rely on stench tracking via /hobopolis clan chat
    this.stench = parseInt(get(CURRENT_STENCH)) || 0;
    this.mutex = gossip.mutex || "";
    this.diveStart = gossip.diveStart || 0;
    this.gameday = gossip.gameday || 0;

    // Need this one in a pref for the ASH choice script.
    set(CURRENT_PLAYERS, this.players.length);
  }

  write(): void {
    this.mutex = "";
    Whiteboard.write(this.asRawJSON());
  }

  registered(): boolean {
    return this.players.some((player: string) => player === `${myName()}`);
  }

  register(): void {
    this.claimMutex(0);
    this.players.push(`${myName()}`);
    // It's a new day; next cognac round is now.
    if (this.gameday !== gamedayToInt()) {
      this.diveStart = gametimeToInt();
      this.gameday = gamedayToInt();
    }
    this.write();
    this.updateGossip();
  }

  incrementStench(): void {
    this.claimMutex(0);
    this.stench++;
    this.write();
    this.updateGossip();
  }

  resetStench(): void {
    const applyUpdate = this.claimMutex(0, () => gametimeToInt() < this.diveStart);
    if (!applyUpdate) {
      return;
    }
    this.stench = 0;
    this.diveStart = gametimeToInt() + 1000 * (60 + 5 * this.players.length);
    this.requestingCompost = [];
    this.players = [];
    this.write();
    this.updateGossip();
  }

  requestCompost(): void {
    this.claimMutex(0);
    if (!this.willCompost()) {
      this.requestingCompost.push(myName());
    }
    this.write();
    this.updateGossip();
  }

  willCompost(): boolean {
    return this.requestingCompost.some((player: string) => player === `${myName()}`);
  }

  getWaitTime(): number {
    const msDelta = this.diveStart - gametimeToInt();
    if (msDelta < 0) {
      return 0;
    }
    // Overcompensate on delay.
    return msDelta / 1000 + 1;
  }

  readyToDive(): boolean {
    return (
      parseInt(get(CURRENT_STENCH)) >=
      BASE_STENCH_REQUIRED + Math.ceil(this.players.length * 1.1) + this.requestingCompost.length
    );
  }

  destroy(): void {
    this.claimMutex(0);
    this.mutex = "";
    this.players = this.players.filter((player: string) => player !== myName());
    Whiteboard.write(this.asRawJSON());
  }
}

// My poor javascript, look at what they've done to you.
function sleep(ms: number) {
  const start = new Date().getTime(),
    end = start + ms;
  while (new Date().getTime() < end);
  return;
}

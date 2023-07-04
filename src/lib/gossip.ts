import { gamedayToInt, gametimeToInt, myName } from "kolmafia";

import * as Whiteboard from "./whiteboard";

type GossipObject = {
  players: string[];
  requestingFlower: string[];
  stench: number;
  mutex: string;
  diveStart: number;
  gameday: number;
};

const BASE_STENCH_REQUIRED = 7;
const MS_BETWEEN_ROUNDS = 75 * 1000;
export class Gossip {
  players: string[] = [];
  requestingFlower: string[] = [];
  stench = 0;
  diveStart = 0;
  gameday = 0;
  mutex = "";

  init(): void {
    this.updateGossip();
    if (this.registered()) {
      return;
    }
    this.register();
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

  updateGossip(): void {
    const gossip = Whiteboard.read() as GossipObject;
    this.players = gossip.players || [];
    this.stench = gossip.stench || 0;
    this.mutex = gossip.mutex || "";
    this.diveStart = gossip.diveStart || 0;
    this.gameday = gossip.gameday || 0;
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
    this.diveStart = gametimeToInt() + MS_BETWEEN_ROUNDS;
    this.requestingFlower = [];
    this.write();
    this.updateGossip();
  }

  write(): void {
    this.mutex = "";
    Whiteboard.write(this.asRawJSON());
  }

  requestFlower(): void {
    this.claimMutex(0);
    if (!this.requestingFlower.some((player: string) => player === `${myName()}`)) {
      this.requestingFlower.push(myName());
    }
    this.write();
    this.updateGossip();
  }

  getWaitTime(): number {
    const msDelta = this.diveStart - gametimeToInt();
    if (msDelta < 0) {
      return 0;
    }
    // Overcompensate on delay.
    return msDelta / 1000 + 1;
  }

  asRawJSON(): GossipObject {
    return {
      players: this.players,
      stench: this.stench,
      diveStart: this.diveStart,
      mutex: this.mutex,
      gameday: this.gameday,
      requestingFlower: this.requestingFlower,
    };
  }

  readyToDive(): boolean {
    return this.stench >= BASE_STENCH_REQUIRED + this.players.length + this.requestingFlower.length;
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

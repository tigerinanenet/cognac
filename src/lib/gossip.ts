import { myName } from "kolmafia";

import * as Whiteboard from "./whiteboard";

type GossipObject = { players: string[]; stench: number; mutex: string };

const BASE_STENCH_REQUIRED = 7;
export class Gossip {
  players: string[] = [];
  stench = 0;
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
    this.mutex = "";
    Whiteboard.write(this.asRawJSON());
    this.updateGossip();
  }

  updateGossip(): void {
    const gossip = Whiteboard.read() as GossipObject;
    this.players = gossip.players || [];
    this.stench = gossip.stench || 0;
    this.mutex = gossip.mutex || "";
  }

  claimMutex(retries: number, callback?: () => boolean): void {
    sleep(100);
    this.updateGossip();

    if (callback && callback()) {
      return;
    }

    if (retries > 50) {
      throw `Could not claim whiteboard mutex`;
    }
    if (this.mutex === myName()) {
      return;
    }

    if (this.mutex === "") {
      const toWhiteboard = this.asRawJSON();
      toWhiteboard.mutex = myName();
      Whiteboard.write(toWhiteboard);
      sleep(50);
      this.claimMutex(retries + 1);
    }

    return this.claimMutex(retries + 1);
  }

  incrementStench(): void {
    this.claimMutex(0);
    this.stench++;
    this.mutex = "";
    Whiteboard.write(this.asRawJSON());
    this.updateGossip();
  }

  resetStench(): void {
    this.claimMutex(0, () => {
      return this.stench === 0;
    });
    this.stench = 0;
    this.mutex = "";
    Whiteboard.write(this.asRawJSON());
    this.updateGossip();
  }

  asRawJSON(): GossipObject {
    return {
      players: this.players,
      stench: this.stench,
      mutex: this.mutex,
    };
  }

  readyToDive(): boolean {
    return this.stench >= BASE_STENCH_REQUIRED + this.players.length;
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

import { myName, gametimeToInt } from "kolmafia";

import * as Whiteboard from "./whiteboard";

const BASE_STENCH_REQUIRED = 7;
const msBetweenRounds = 60 * 1000;
export class Gossip {
    players: string[] = []
    stench: number = 0;
    diveStart: number = 0;
    mutex: string = "";


    constructor() {}

    init() {
        this.updateGossip();
        if (this.registered()) {
            return;
        }
        this.register();
    }

    registered() {
        return this.players.some((player: string) => player === `${myName()}`)
    }

    register() {
        this.claimMutex(0);
        this.players.push(`${myName()}`)
        this.mutex = "";
        Whiteboard.write(this.asRawJSON());
        this.updateGossip();
    }

    updateGossip() {
        const gossip = Whiteboard.read();
        this.players = gossip.players || [];
        this.stench = gossip.stench || 0;
        this.mutex = gossip.mutex || "";
    }

    // If callback evaluates to true, the reason we were fetching
    // the mutex has already been fulfilled.
    claimMutex(retries: number, callback?: any): boolean {
        sleep(100);
        this.updateGossip();

        if (callback && callback()) {
            return false;
        }

        if (retries > 50) {
            throw `Could not claim whiteboard mutex`
        }
        if (this.mutex === myName()) {
            return true;
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

    incrementStench() {
        this.claimMutex(0);
        this.stench++;
        this.mutex = "";
        Whiteboard.write(this.asRawJSON());
        this.updateGossip();
    }

    resetStench() {
        const applyUpdate = this.claimMutex(0, () => gametimeToInt() < this.diveStart);
        if (!applyUpdate) {
            return;
        }
        this.stench = 0;
        this.mutex = "";
        this.diveStart = gametimeToInt() + msBetweenRounds
        Whiteboard.write(this.asRawJSON());
        this.updateGossip();
    }

    getWaitTime() {
        const msDelta = this.diveStart - gametimeToInt();
        if (msDelta < 0) {
            return 0;
        }
        // Overcompensate on delay.
        return msDelta / 1000 + 1
    }

    asRawJSON() {
        return {
            players: this.players,
            stench: this.stench,
            diveStart: this.diveStart,
            mutex: this.mutex
        }
    }
    
    readyToDive() {
        return this.stench >= BASE_STENCH_REQUIRED + this.players.length
    }

    destroy() {
        this.claimMutex(0);
        this.mutex = "";
        this.players = this.players.filter((player: string) => player !== myName());
        Whiteboard.write(this.asRawJSON());
    }
}

// My poor javascript, look at what they've done to you.
function sleep(ms: number) {
    const start =  new Date().getTime(), end = start + ms; 
    while (new Date().getTime() < end) {}
    return;
}
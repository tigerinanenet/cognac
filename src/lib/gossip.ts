import { myName } from "kolmafia";

import * as Whiteboard from "./whiteboard";

const BASE_STENCH_REQUIRED = 7;
export class Gossip {
    players: any = []
    stench: any = 0;
    mutex: any = "";

    constructor() {}

    init() {
        this.updateGossip();
        const nameMatch = (player: any) => player === `${myName()}`
        if (this.players.some(nameMatch)) {
            return;
        }
        this.register();
    }

    registered() {
        return this.players.some((player: any) => player === `${myName()}`)
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

    claimMutex(retries: number, callback?: any): void {
        sleep(100);
        this.updateGossip();

        if (callback && callback()) {
            return;
        }

        if (retries > 50) {
            throw `Could not claim whiteboard mutex`
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

    incrementStench() {
        this.claimMutex(0);
        this.stench++;
        this.mutex = "";
        Whiteboard.write(this.asRawJSON());
        this.updateGossip();
    }

    resetStench() {
        this.claimMutex(0, () => {return this.stench === 0});
        this.stench = 0;
        this.mutex = "";
        Whiteboard.write(this.asRawJSON());
        this.updateGossip();
    }
    
    asRawJSON() {
        return {
            players: this.players,
            stench: this.stench,
            mutex: this.mutex
        }
    }
    
    readyToDive() {
        return this.stench >= BASE_STENCH_REQUIRED + this.players.length
    }

    destroy() {
        this.claimMutex(0);
        this.mutex = "";
        this.players = this.players.filter((player: any) => player !== myName());
        Whiteboard.write(this.asRawJSON());
    }
}

// My poor javascript, look at what they've done to you.
function sleep(ms: number) {
    const start =  new Date().getTime(), end = start + ms; 
    while (new Date().getTime() < end) {}
    return;
}
export class Whiteboard {
  gossip: any = {};
  lastCheck: any = new Date().getTime();
  checkInterval: number = 5 * 1000;

  constructor(gossip: any) {
    this.gossip = gossip;
    this.gossip.updateGossip();
  }

  getTasks() {
    return [
      {
        name: "Schedule gossip update",
        completed: () => new Date().getTime() - this.lastCheck < this.checkInterval,
        do: () => {
          this.gossip.updateGossip();
          this.lastCheck = new Date().getTime();
        },
      },
    ];
  }
}

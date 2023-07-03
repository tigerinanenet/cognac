export type ScoboParts = {
  hot: number;
  cold: number;
  stench: number;
  spooky: number;
  sleaze: number;
  normal: number;
};

export type ScoboPartType = keyof ScoboParts;

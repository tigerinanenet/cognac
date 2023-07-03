const SCRIPT_PREFIX: string = "cognac";

const prefix = (prop: string): string => {
  return `${SCRIPT_PREFIX}_${prop}`;
};

const privatize = (prop: string): string => {
  return `_${prefix(prop)}`;
};

export const SKIP_GARBO = prefix("skipGarbo");
export const CLAN = prefix("clan");
export const TOWN_SQUARE = prefix("townSquare");

export const COGNACS = privatize("bottlesFound");
export const DIVES = privatize("dives");

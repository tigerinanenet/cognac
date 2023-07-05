const SCRIPT_PREFIX = "cognac";

const prefix = (prop: string): string => {
  return `${SCRIPT_PREFIX}_${prop}`;
};

const privatize = (prop: string): string => {
  return `_${prefix(prop)}`;
};

export const CLAN = prefix("clan");
export const ASDON = prefix("useAsdon");
export const SKIP_GARBO = prefix("skipGarbo");
export const TOWN_SQUARE = prefix("townSquare");

export const COGNACS = privatize("bottlesFound");
export const DIVES = privatize("dives");
export const HEAPS_QUEUED = privatize("choice216");
export const DO_COMPOST = privatize("doCompost");

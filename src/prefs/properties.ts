const SCRIPT_PREFIX = "cognac";

const prefix = (prop: string): string => {
  return `${SCRIPT_PREFIX}_${prop}`;
};

const daily = (prop: string): string => {
  return `_${prefix(prop)}`;
};

export const CLAN = prefix("clan");
export const ASDON = prefix("useAsdon");
export const SKIP_GARBO = prefix("skipGarbo");
export const REFUSES_UNTIL_COMPOST = prefix("choice216");
export const RESULTS_DAY = prefix("resultsDay");
export const COGNACS = prefix("bottlesFoundToday");
export const DIVES = prefix("divesToday");
export const TURNS_SPENT = prefix("turnsSpentToday");
export const LIFETIME_COGNACS = prefix("bottlesLifetime");
export const LIFETIME_DIVES = prefix("divesLifetime");
export const LIFETIME_TURNS_SPENT = prefix("turnsLifetime");

export const HEAP_ATTEMPTS = daily("heapAttempts");
export const CURRENT_PLAYERS = daily("currentPlayers");

const SCRIPT_PREFIX: string = "cognac";

const prefix = (prop: string): string => {
    return `${SCRIPT_PREFIX}_${prop}`;
}

export const SKIP_GARBO = prefix("skipGarbo");
export const COGNACS = prefix("bottlesFound");
export const CLAN = prefix("clan");
export const TOWN_SQUARE = prefix("townSquare");
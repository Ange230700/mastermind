// src\config.ts

import type { GameDefaults, Color } from "~/src/types";

export const GAME_DEFAULTS: GameDefaults = {
  MAX_ATTEMPTS: 12,
  SLOTS_COUNT: 4,
  POSSIBLE_COLORS_LIST: [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "black",
  ] as Color[],
};

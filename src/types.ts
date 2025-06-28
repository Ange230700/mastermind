// src/types.ts

// Clues provided after each guess in Mastermind
export interface Clues {
  wellPlacedColors: string[];
  misplacedColors: string[];
  notInCodeColors: string[];
}

// Type for a color used in the game
export type Color =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet"
  | "black";

// Type for a secret code or guess
export type CodeArray = Color[];

// Game defaults structure
export interface GameDefaults {
  MAX_ATTEMPTS: number;
  SLOTS_COUNT: number;
  POSSIBLE_COLORS_LIST: Color[];
}

// Main state handler for the game
export interface MastermindStateType {
  resetAppState: () => void;
  resetColorsArray: () => void;
  addChosenColorToColorsArray: (color: Color) => void;
  checkIfColorsArrayIsValid: () => boolean;
  hasPlayerWon: () => boolean;
  hasPlayerLost: () => boolean;
  resetTemporarySecretCode: () => void;
  addColorToTemporarySecretCode: (color: Color) => void;
  removeColorFromColorsArray: (index: number) => void;
  getCurrentSlotIndex: () => number;
  incrementCurrentSlotIndex: () => void;
  resetCurrentSlotIndex: () => void;
  getCurrentTemporarySlotIndex: () => number;
  incrementCurrentTemporarySlotIndex: () => void;
  resetCurrentTemporarySlotIndex: () => void;
  getPossibleColorsList: () => Color[];
  getAttemptsNumberMax: () => number;
  getColorsArray: () => CodeArray;
  getAttemptsNumber: () => number;
  incrementAttemptsNumber: () => void;
  getTemporarySecretCode: () => CodeArray;
  getSecretCode: () => CodeArray;
  setSecretCode: (codeArray: CodeArray) => void;
  updateCurrentSlotIndex: () => void;
  setSlotCount: (count: number) => void;
  getSlotsCount: () => number;
}

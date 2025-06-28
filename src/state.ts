// src\state.ts

import type { MastermindStateType, Color, CodeArray } from "~/src/types";
import { GAME_DEFAULTS } from "~/src/config";

export const MastermindState: MastermindStateType = (() => {
  let secret_code: CodeArray = [];
  let attempts_number = 0;
  const attempts_number_max = GAME_DEFAULTS.MAX_ATTEMPTS;
  let colors_array: CodeArray = [];
  const possible_colors_list = GAME_DEFAULTS.POSSIBLE_COLORS_LIST;
  let slots_count = GAME_DEFAULTS.SLOTS_COUNT;
  let current_slot_index = 0;
  let temp_secret_code: CodeArray = [];
  let current_temp_slot_index = 0;

  function setSlotCount(count: number) {
    slots_count = count;
  }

  function getSlotsCount(): number {
    return slots_count;
  }

  function resetAppState() {
    secret_code = [];
    attempts_number = 0;
    colors_array = [];
    current_slot_index = 0;
    temp_secret_code = [];
    current_temp_slot_index = 0;
  }

  function resetColorsArray() {
    colors_array = [];
  }

  function addChosenColorToColorsArray(color: Color) {
    colors_array.push(color);
  }

  function checkIfColorsArrayIsValid(): boolean {
    return (
      Array.isArray(colors_array) &&
      colors_array.length === slots_count &&
      colors_array.every((color) => possible_colors_list.includes(color))
    );
  }

  function checkIfColorsArrayIsStrictlyEqualsToSecretCode(): boolean {
    if (colors_array.length !== secret_code.length) {
      return false;
    }

    for (const index in secret_code) {
      if (colors_array[index] !== secret_code[index]) {
        return false;
      }
    }

    return true;
  }

  function hasPlayerWon(): boolean {
    return checkIfColorsArrayIsStrictlyEqualsToSecretCode() || false;
  }

  function hasPlayerLost(): boolean {
    return attempts_number_max - attempts_number <= 0 || false;
  }

  function resetTemporarySecretCode() {
    temp_secret_code = [];
  }

  function addColorToTemporarySecretCode(color: Color) {
    temp_secret_code.push(color);
  }

  function removeColorFromColorsArray(index: number) {
    colors_array.splice(index, 1);
  }

  function getCurrentSlotIndex(): number {
    return current_slot_index;
  }

  function incrementCurrentSlotIndex() {
    current_slot_index += 1;
  }

  function resetCurrentSlotIndex() {
    current_slot_index = 0;
  }

  function getCurrentTemporarySlotIndex(): number {
    return current_temp_slot_index;
  }

  function incrementCurrentTemporarySlotIndex() {
    current_temp_slot_index += 1;
  }

  function resetCurrentTemporarySlotIndex() {
    current_temp_slot_index = 0;
  }

  function getPossibleColorsList(): Color[] {
    return possible_colors_list;
  }

  function getAttemptsNumberMax(): number {
    return attempts_number_max;
  }

  function getAttemptsNumber(): number {
    return attempts_number;
  }

  function incrementAttemptsNumber() {
    attempts_number++;
  }

  function getColorsArray(): CodeArray {
    return colors_array;
  }

  function getTemporarySecretCode(): CodeArray {
    return temp_secret_code;
  }

  function getSecretCode(): CodeArray {
    return secret_code;
  }

  function setSecretCode(codeArray: CodeArray) {
    secret_code = [...codeArray];
  }

  function updateCurrentSlotIndex() {
    current_slot_index = colors_array.length;
  }

  return {
    resetAppState,
    resetColorsArray,
    addChosenColorToColorsArray,
    checkIfColorsArrayIsValid,
    hasPlayerWon,
    hasPlayerLost,
    resetTemporarySecretCode,
    addColorToTemporarySecretCode,
    removeColorFromColorsArray,
    getCurrentSlotIndex,
    incrementCurrentSlotIndex,
    resetCurrentSlotIndex,
    getCurrentTemporarySlotIndex,
    incrementCurrentTemporarySlotIndex,
    resetCurrentTemporarySlotIndex,
    getPossibleColorsList,
    getAttemptsNumberMax,
    getColorsArray,
    getAttemptsNumber,
    incrementAttemptsNumber,
    getTemporarySecretCode,
    getSecretCode,
    setSecretCode,
    updateCurrentSlotIndex,
    setSlotCount,
    getSlotsCount,
  };
})();

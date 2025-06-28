// src\main.ts

import type { Clues, CodeArray } from "~/src/types";

/**
 * computeClues(guessArray, secretArray)
 * Returns an object with 3 arrays of colors:
 *   - wellPlacedColors
 *   - misplacedColors
 *   - notInCodeColors
 * @param {CodeArray} guessArray
 * @param {CodeArray} secretArray
 * @returns {Clues}
 **/
export function computeClues(
  guessArray: CodeArray,
  secretArray: CodeArray,
): Clues {
  if (guessArray.length !== secretArray.length) {
    return {
      wellPlacedColors: [],
      misplacedColors: [],
      notInCodeColors: guessArray.slice(),
    };
  }

  const wellPlacedColors: CodeArray = [];
  const leftoverSecret: CodeArray = [];
  const leftoverGuess: CodeArray = [];

  for (let index = 0; index < secretArray.length; index++) {
    if (guessArray[index] === secretArray[index]) {
      wellPlacedColors.push(guessArray[index]);
    } else {
      leftoverSecret.push(secretArray[index]);
      leftoverGuess.push(guessArray[index]);
    }
  }

  const misplacedColors: CodeArray = [];
  const notInCodeColors: CodeArray = [];

  leftoverGuess.forEach((color) => {
    const index = leftoverSecret.indexOf(color);
    if (index !== -1) {
      misplacedColors.push(color);
      leftoverSecret.splice(index, 1);
    } else {
      notInCodeColors.push(color);
    }
  });

  return { wellPlacedColors, misplacedColors, notInCodeColors };
}

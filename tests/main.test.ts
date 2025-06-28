// tests\main.test.ts

// tests/main.test.ts

import type { CodeArray } from "~/src/types";
import { computeClues } from "~/src/main";

// --- MOCKING MastermindState ---
// Since computeClues imports MastermindState (but doesn't use it for the clue computation),
// we don't need to mock it unless your actual code under test does more than shown.
// If necessary, you could do: vi.mock('../src/state', () => ({ MastermindState: { ... } }));

describe("computeClues", () => {
  it("returns all wellPlacedColors when guess is perfect", () => {
    const secret: CodeArray = ["red", "blue", "green", "yellow"];
    const guess: CodeArray = ["red", "blue", "green", "yellow"];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual(["red", "blue", "green", "yellow"]);
    expect(clues.misplacedColors).toEqual([]);
    expect(clues.notInCodeColors).toEqual([]);
  });

  it("returns all misplacedColors if all guessed colors are present but in wrong positions", () => {
    const secret: CodeArray = ["red", "blue", "green", "yellow"];
    const guess: CodeArray = ["yellow", "green", "blue", "red"];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual([]);
    // Order may matter depending on your implementation, but here we expect original guess order
    expect(clues.misplacedColors).toEqual(["yellow", "green", "blue", "red"]);
    expect(clues.notInCodeColors).toEqual([]);
  });

  it("returns notInCodeColors if none of the guessed colors are in the secret", () => {
    const secret: CodeArray = ["red", "blue", "green", "yellow"];
    const guess: CodeArray = ["violet", "orange", "black", "indigo"];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual([]);
    expect(clues.misplacedColors).toEqual([]);
    expect(clues.notInCodeColors).toEqual([
      "violet",
      "orange",
      "black",
      "indigo",
    ]);
  });

  it("returns correct mix of clues when some are well-placed, misplaced, and not in code", () => {
    const secret: CodeArray = ["red", "blue", "green", "yellow"];
    const guess: CodeArray = ["red", "yellow", "black", "blue"];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual(["red"]);
    expect(clues.misplacedColors).toEqual(["yellow", "blue"]);
    expect(clues.notInCodeColors).toEqual(["black"]);
  });

  it("handles repeated colors in both guess and secret", () => {
    const secret: CodeArray = ["red", "red", "blue", "green"];
    const guess: CodeArray = ["red", "blue", "red", "orange"];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual(["red"]);
    expect(clues.misplacedColors).toEqual(["blue", "red"]);
    expect(clues.notInCodeColors).toEqual(["orange"]);
  });

  it("returns all notInCodeColors if guess and secret lengths differ", () => {
    const secret: CodeArray = ["red", "blue"];
    const guess: CodeArray = ["red", "blue", "green"];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual([]);
    expect(clues.misplacedColors).toEqual([]);
    expect(clues.notInCodeColors).toEqual(["red", "blue", "green"]);
  });

  it("handles empty input arrays", () => {
    const secret: CodeArray = [];
    const guess: CodeArray = [];
    const clues = computeClues(guess, secret);
    expect(clues.wellPlacedColors).toEqual([]);
    expect(clues.misplacedColors).toEqual([]);
    expect(clues.notInCodeColors).toEqual([]);
  });
});

import { createContext, useContext, useState } from "react";

const NUM_HOLES = 9;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  const whack = () => {
    setScore(score + 1);
    setField(makeField(field));
  };

  const start = () => {
    setScore(0);
    setField(makeField());
    setPlaying(true);
  };

  const stop = () => {
    setPlaying(false);
  };

  const value = {
    field,
    score,
    playing,
    start,
    stop,
    whack,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
}

// Helper: generate an array of holes with a mole in one random hole
function makeField(prevField = []) {
  const field = Array(NUM_HOLES).fill(false);
  const moleIndex = Math.floor(Math.random() * NUM_HOLES);
  field[moleIndex] = true;
  return field;
}

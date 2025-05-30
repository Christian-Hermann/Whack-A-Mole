import { useGame } from "./GameContext";

export default function Welcome() {
  const { start } = useGame();

  return (
    <section className="welcome">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={start}>Play</button>
    </section>
  );
}

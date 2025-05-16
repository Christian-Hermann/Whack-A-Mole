import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import Field from "./Field";
import Scoreboard from "./Scoreboard";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack a Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

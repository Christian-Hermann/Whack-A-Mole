import { useGame } from "./GameContext";

/** A Field is a collection of Holes */
export default function Field() {
  const { field } = useGame();

  return (
    <ul className="field">
      {field.map((hasMole, i) => (
        <Hole key={i} hasMole={hasMole} />
      ))}
    </ul>
  );
}

/** A Hole is either empty or contains a mole */
function Hole({ hasMole }) {
  const { whack } = useGame();

  if (hasMole) {
    return <li className="hole mole" onClick={whack}></li>;
  }

  return <li className="hole"></li>;
}

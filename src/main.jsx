import { StrictMode } from "react"; // Ensures the app runs in development mode with checks and warnings.
import { createRoot } from "react-dom/client"; // The modern React rendering method for React 18 and later.
import App from "./App"; // The main app component, which is where your game logic and UI resides.
import { GameProvider } from "./GameContext"; // The context that holds the game state, provided to the app.
import "./index.css"; // Your global styles for the app.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      {" "}
      {/* Wraps the entire app with the GameProvider to manage game state */}
      <App />
    </GameProvider>
  </StrictMode>
);

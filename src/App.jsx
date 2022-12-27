// Libraries
import { useState } from "react";

// Components
import Score from "./components/Score";
import Game from "./components/Game";
import Modal from "./components/Modal";

// Context
import GameContextProvider from "./context/GameContext";

// Styles
import "../src/styles/reset.css";
import "../src/styles/styles.css";

const App = () => {

  // For rules modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <GameContextProvider>
        <Score />
        <Game />
        <button className="rulesButton" onClick={() => setIsOpen(true)}>
          RULES
        </button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </GameContextProvider>
    </div>
  )
}

export default App;

//* TODO: PLAY AGAIN COMPONENT
//* TODO: ANIMACIONES
//* TODO: RULES MODAL
// TODO: LOCAL STORAGE SCORE
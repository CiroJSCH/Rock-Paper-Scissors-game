// Components
import Score from "./components/Score";
import Game from "./components/Game";
// Context
import GameContextProvider from "./context/GameContext";

// Styles
import "../src/styles/reset.css";
import "../src/styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <GameContextProvider>
        <Score />
        <Game />
        <button className="rulesButton">
          RULES
        </button>
      </GameContextProvider>
    </div>
  )
}

export default App;

//* TODO: PLAY AGAIN COMPONENT
//* TODO: ANIMACIONES
// TODO: RULES MODAL
// TODO: LOCAL STORAGE SCORE
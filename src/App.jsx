// Components
import Score from "./components/Score";
import Choice from "./components/Choice";
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
        <Choice />
      </GameContextProvider>
    </div>
  )
}

export default App
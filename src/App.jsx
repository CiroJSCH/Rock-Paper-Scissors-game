// Components
import Score from "./components/Score";

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
      </GameContextProvider>
    </div>
  )
}

export default App
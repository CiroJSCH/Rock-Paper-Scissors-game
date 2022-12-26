// Libraries
import { createContext, useState } from 'react';

// Images
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';

export const GameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  const images = {
    rock,
    paper,
    scissors,
  };

  const [choice, setChoice] = useState({});
  const [hasChosen, setHasChosen] = useState(false);
  const [pcChoice, setPcChoice] = useState({});
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const randomChoice = () => {
    const random = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    setPcChoice({
      choice: random,
      image: images[random],
    });
  };

  return (
    <GameContext.Provider
      value={{
        choice,
        setChoice,
        hasChosen,
        setHasChosen,
        randomChoice,
        pcChoice,
        score,
        setScore,
        result, 
        setResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;

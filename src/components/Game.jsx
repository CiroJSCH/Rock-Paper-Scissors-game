//Libraries
import { useState, useContext } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Components
import Choice from './Choice';
import Result from './Result';

const Game = () => {

  const { hasChosen } = useContext(GameContext)

  return (
    <>
      {
        hasChosen ? <Result /> : <Choice />
      }
    </>
  );
};

export default Game;

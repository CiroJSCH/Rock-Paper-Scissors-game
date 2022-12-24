import { createContext } from 'react';

export const GameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  return <GameContext.Provider>{children}</GameContext.Provider>;
};

export default GameContextProvider;

// Libraries
import { useContext } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Styles
import '../styles/score/score.css';
import '../styles/score/responsive.css';

const Score = () => {
  const { score } = useContext(GameContext);

  return (
    <section className='score'>
      <div className='score__title'>ROCK PAPER SCISSORS</div>
      <div className='score__points'>
        <p>SCORE</p>
        <span>{score}</span>
      </div>
    </section>
  );
};

export default Score;

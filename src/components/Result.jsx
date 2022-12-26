// Libraries
import { useContext, useEffect } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Components
import ResultButton from './ResultButton';

// Styles
import '../styles/result/result.css';
import '../styles/result/responsive.css';

const Result = () => {
  const { choice, pcChoice, setScore, score } = useContext(GameContext);

  // Left beats right
  const options = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  useEffect(() => {
    if (pcChoice.choice === options[choice.choice]) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  }, [])
  
  return (
    <section className='result'>
      <div className='result__choice'>
        <ResultButton image={choice.image} choice={choice.choice} />
        <p>YOU PICKED</p>
      </div>
      <div className='result__choice'>
        <ResultButton image={pcChoice.image} choice={pcChoice.choice} />
        <p>THE HOUSE PICKED</p>
      </div>
    </section>
  );
};

export default Result;

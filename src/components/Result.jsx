// Libraries
import { useContext, useEffect, useState } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Components
import Again from './Again';
import ResultButton from './ResultButton';

// Styles
import '../styles/result/result.css';
import '../styles/result/responsive.css';

const Result = () => {
  const { choice, pcChoice, setScore, score, setResult } = useContext(GameContext);
  const [loading, setLoading] = useState(true);

  const media = window.matchMedia('(min-width: 1200px)');

  // Left beats right
  const options = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (!loading) {
      if (choice.choice === pcChoice.choice) {
        setScore(score);
        setResult("tie");
      } else if (pcChoice.choice === options[choice.choice]) {
        setScore(score + 1);
        setResult("win");
      } else {
        setScore(score - 1);
        setResult("lose");
      }
    }
  }, [loading]);

  return (
    <section className='result'>
      <div>
        <div className='result__choice'>
          <ResultButton image={choice.image} choice={choice.choice} />
          <p>YOU PICKED</p>
        </div>
        {media.matches && (
        <div>
          {!loading && <Again />}
        </div>
      )}
        <div className='result__choice'>
          {loading ? (
            <div className='selecting'>
              <span className='selecting__circle'></span>
            </div>
          ) : (
            <ResultButton image={pcChoice.image} choice={pcChoice.choice} />
          )}
          <p>THE HOUSE PICKED</p>
        </div>
      </div>
      {!media.matches && (
        <div>
          {!loading && <Again />}
        </div>
      )}
    </section>
  );
};

export default Result;

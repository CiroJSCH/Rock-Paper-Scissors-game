// Libraries
import { useContext } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Styles
import '../styles/again/again.css';
import '../styles/again/responsive.css';

const Again = () => {
  const { result, setHasChosen, setResult } = useContext(GameContext);

  return (
    <div className='again'>
      <p>
        {result === 'win'
          ? 'YOU WIN'
          : result === 'lose'
          ? 'YOU LOSE'
          : "IT'S A TIE"}
      </p>
      <button
        style={
          result === 'lose'
            ? { color: 'red' }
            : { color: 'var(--HeaderOutline)' }
        }
        onClick={() => {
          setHasChosen(false), setResult('');
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Again;

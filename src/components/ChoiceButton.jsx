// Libraries
import { useContext } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Styles
import "../styles/choiceButton/choiceButton.css"
import "../styles/choiceButton/responsive.css"

const ChoiceButton = ({ image, choice }) => {

  const { setHasChosen, setChoice, randomChoice } = useContext(GameContext)

  const choiceHandler = () => {
    setHasChosen(true);
    setChoice({
      image,
      choice,
    });
    randomChoice();
  }

  return (
    <div className="choiceButton" id={choice} onClick={choiceHandler}>
      <div className="choiceButton--inner">
        <img src={image} alt="option" />
      </div>
    </div>
  )
}

export default ChoiceButton;
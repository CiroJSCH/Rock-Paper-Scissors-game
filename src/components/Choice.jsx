// Libraries
import { useContext } from 'react';

// Context
import { GameContext } from '../context/GameContext';

// Components
import ChoiceButton from "./ChoiceButton";

// Images
import triangle from "../images/bg-triangle.svg"
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

// Styles
import "../styles/choice/choice.css";
import "../styles/choice/responsive.css";

const Choice = () => {

  return (
    <div className="choice">
    <img src={triangle} alt="Triangle background" />
      <ChoiceButton image={paper} choice={"paper"} />
      <ChoiceButton image={scissors} choice={"scissors"} />
      <ChoiceButton image={rock} choice={"rock"} />
    </div>
  )
}

export default Choice
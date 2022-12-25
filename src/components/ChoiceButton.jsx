// Styles
import "../styles/choiceButton/choiceButton.css"
import "../styles/choiceButton/responsive.css"

const ChoiceButton = ({ image, choice }) => {
  return (
    <div className="choiceButton" id={choice}>
      <div className="choiceButton--inner">
        <img src={image} alt="option" />
      </div>
    </div>
  )
}

export default ChoiceButton
// Styles
import "../styles/resultButton/resultButton.css";
import "../styles/resultButton/responsive.css";

const ResultButton = ({ image, choice }) => {
  return (
    <div className='resultButton' id={choice}>
      <div className='resultButton--inner'>
        <img src={image} alt='option' />
      </div>
    </div>
  );
};

export default ResultButton;

// Styles
import "../styles/resultButton/resultButton.css";
import "../styles/resultButton/responsive.css";
import '../styles/resultButton/winAnimation.css';

const ResultButton = ({ image, choice, winner }) => {

  return (
    <div className={`resultButton ${choice} ${winner ? "win" : null}`}>
      <div className='resultButton--inner'>
        <img src={image} alt='option' />
      </div>
    </div>
  );
};

export default ResultButton;

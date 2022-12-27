// Images
import rules from "../images/image-rules.svg";
import close from "../images/icon-close.svg";

// Styles
import "../styles/modal/modal.css";
import "../styles/modal/responsive.css";

const Modal = ({isOpen, setIsOpen}) => {

  if (!isOpen) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <h2>RULES</h2>
        <img src={rules} alt="Rules" className="modal__rules"/>
        <img src={close} alt="Close button" onClick={() => setIsOpen(false)} className="modal__close"/>
      </div>
    </>
  )
}

export default Modal
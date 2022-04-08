import ReactDOM from "react-dom";
import "./modal.scss";
import Close from "./times-solid.svg";

const Modal = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h3 className="modal_header-title">{title}</h3>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content">{children}</main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
              Zamknij
            </button>
            {/* <button className="submit">Submit</button> */}
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;

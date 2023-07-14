import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import "./../components/Modal.css";

const Modal = ({ onClose }) => {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.addEventListener("click", checkIfClickedOutside);
    };
  }, [onClose]);
  
  return ReactDom.createPortal (
    <div className="modalBackground" onClick={() => onClose(false)}>
      <div className="modalContainer">
        <div className="top">
          <h1>Theme Color</h1>
          <button
            id="btn"
            onClick={() => {
              onClose(false);
            }}
          >
            Change Themes
          </button>
        </div>

        <div className="body">
          <div className="fontc">
            <h3>Font Color</h3>
            <div className="color">
              <h3>#444444</h3>
              <button className="btn one"></button>
            </div>
          </div>
          <hr />
          <div className="fontc">
            <h3>Background Color</h3>
            <div className="color">
              <h3>#FFFFFF</h3>
              <button className="btn two"></button>
            </div>
          </div>
          <hr />
          <div className="fontc">
            <h3>Button Color</h3>
            <div className="color">
              <h3>#2072EF</h3>
              <button className="btn three"></button>
            </div>
          </div>
          <hr />
          <div className="fontc">
            <h3>Button Border Color</h3>
            <div className="color">
              <h3>#2072EF</h3>
              <button className="btn three"></button>
            </div>
          </div>
          <hr />
          <div className="fontc">
            <h3>Button Mouseover Color</h3>
            <div className="color">
              <h3>#0053D1</h3>
              <button className="btn four"></button>
            </div>
          </div>
          <hr />
        </div>
        <div className="footer">
          <button
            className="cancel"
            onClick={() => {
              onClose(false);
            }}
          >
            Cancel
          </button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;

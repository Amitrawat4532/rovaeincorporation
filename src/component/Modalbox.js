import React from "react";
import "../styles/modalbox.css";

const Modal = ({ show, setShow, selectedData }) => {
  if (show) {
    return (
      <div className="modalContainer">
        <div className="modalBox">
          <div>
            <h3>{selectedData.videoTitle}</h3>
            <button onClick={() => setShow(false)}>X</button>
          </div>
          <video width="100%" height="100%" controls>
            <source src={selectedData.videoLink} type="video/mp4"></source>
          </video>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Modal;

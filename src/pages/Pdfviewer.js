import React, { useState } from "react";
import "../styles/pdfviewer.css";
import Modalbox from "../component/Modalbox";

function Pdfviewer({ pdfSrc, formData }) {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const openVideoBox = (el) => {
    console.log("hii");
    setSelectedData(el);
    setShow(true);
  };

  return (
    <>
      <Modalbox show={show} setShow={setShow} selectedData={selectedData} />

      <div className="main_container">
        <div className="pdf_container">
          <iframe
            allowtransparency="true"
            style={{ backgroundColor: "black" }}
            src={pdfSrc}
            width="100%"
            height="800px"
            title="pdf"
          ></iframe>
        </div>
        <div id="mySidebar" class="sidebar">
          <a class="closebtn" onClick={closeNav}>
            &times;
          </a>

          {formData.map((el, id) => {
            return (
              <div onClick={() => openVideoBox(el)}>
                <h1>{el.videoTitle}</h1>
                <img src={el.videoThumbnail} width="500px" height="300px"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div id="main">
        <button class="openbtn" onClick={openNav}>
          Videos
        </button>
      </div>
    </>
  );
}

export default Pdfviewer;

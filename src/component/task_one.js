import React, { useState } from "react";
import "../styles/task_one.css";

import { useNavigate } from "react-router-dom";

function Task_one({ setPdfSrc, formData, setFormData }) {
  const [pdfLink, setPdfLink] = useState();

  const Navigate = useNavigate();

  const Addform = () => {
    setFormData([
      ...formData,
      {
        videoTitle: "",
        videoThumbnail: "",
        videoLink: "",
      },
    ]);
  };

  const RemoveForm = (id) => {
    const newArr = formData.filter((x) => formData.indexOf(x) !== id);

    setFormData(newArr);
  };

  const GenerateButton = () => {
    // console.log(pdfLink);
    setPdfSrc(pdfLink);
    Navigate("/Pdfviewer");
  };

  const inputHandler = (key, name, value) => {
    const newArr = formData;
    const tempData = newArr.filter((el) => {
      if (newArr.indexOf(el) === key) {
        newArr[key][name] = value;
      }
      return newArr;
    });
    setFormData(tempData);
  };

  return (
    <>
      <div className="main_container">
        <div className="form_container">
          <label>PDF Link*</label>
          <input
            type="text"
            placeholder="Add your pdf link here"
            id="inputmain"
            value={pdfLink}
            onChange={(e) => setPdfLink(e.target.value)}
          ></input>
        </div>

        {formData?.map((el, id) => {
          // return <Form key={key} />;
          return (
            <div className="input_box" key={id}>
              <button id="minus_icon" onClick={() => RemoveForm(id)}>
                -
              </button>
              <input
                type="text"
                placeholder="Add  video title here"
                value={formData[id].videoTitle}
                name="videoTitle"
                onChange={(e) => {
                  inputHandler(id, e.target.name, e.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="Add video thumbnail  here"
                value={formData[id].videoThumbnail}
                name="videoThumbnail"
                onChange={(e) => {
                  inputHandler(id, e.target.name, e.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="Add video url"
                name="videoLink"
                value={formData[id].videoLink}
                onChange={(e) => {
                  inputHandler(id, e.target.name, e.target.value);
                }}
              ></input>
            </div>
          );
        })}

        <div className="input_button">
          <button id="plus_icon" onClick={Addform}>
            +
          </button>
          <button onClick={GenerateButton}>Generate HTML</button>
        </div>
      </div>
    </>
  );
}

export default Task_one;

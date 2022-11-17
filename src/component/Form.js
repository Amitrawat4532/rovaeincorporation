import React from "react";

function Form() {
  return (
    <>
      <div className="input_box">
        <button id="minus_icon">-</button>
        <input type="text" placeholder="Add  video title here"></input>
        <input type="text" placeholder="Add videp thumbnail  here"></input>
        <input type="text" placeholder="Add video url"></input>
      </div>
    </>
  );
}

export default Form;

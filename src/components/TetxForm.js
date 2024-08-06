import React, { useState } from "react";
export default function TetxForm(props) {
  const handleUpClick = () => {
    let newTetx = text.toUpperCase();
    setText(newTetx);
    props.showAlert("Text has been converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newTetx = text.toLowerCase();
    setText(newTetx);
    props.showAlert("Text has been converted to Lowercase!", "success");
  };

  const handleInverseClick = () => {
    var newText = "";
    for (var i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Text has been Inverted!", "success");
  };

  const handleOnChange = (event) => {
    // Is function ko listen karna padega nhi to type nhi kar paynge textarea me
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text"); // HOOK
  return (
    <>
      <div className="container ">
        <h1
          align="center"
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            className={`form-control bg-${
              props.mode === "light" ? "dark" : "light"
            } text-${props.mode === "light" ? "light" : "dark"}`}
            value={text}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          <b>Convert To Uppercase</b>
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          <b>Convert To Lowercase</b>
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>
          <b>Inverse The Text</b>
        </button>
      </div>
      <div className="container my-3">
        <h1
          align="center"
          className={`text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Your Text Summary
        </h1>
        <p
          align="center"
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Length Of Text = {text.length} Characters<br></br>
          No. Of Words = {text.length === 0 ? 0 : text.split(" ").length}
          <br></br>
          Time Required to read = {text.length * 0.008} Minutes
        </p>
        <h2
          align="center"
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Preview
        </h2>
        <p
          align="center"
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {text}
        </p>
      </div>
    </>
  );
}

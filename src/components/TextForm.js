import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText2 = "";
    setText(newText2);
    props.showAlert("You cleared the text!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("You copied the text!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("You remove Extra Spaces!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value); // it is used for enter text value in textarea
  };

  const [text, setText] = useState("");
  //   setText("enter new value"); // correct way to change text value
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="mybox" className="form-label"></label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "white",
            }}
            id="mybox"
            value={text}
            rows="8"
            onChange={handleOnChange}
          >
            {text}
          </textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-warning mx-3"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-danger mx-3"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-secondary mx-3"
          onClick={handleExtraSpaces}
        >
          Clear Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} character
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to Read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

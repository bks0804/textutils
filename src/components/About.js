import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#494949" : "white",
  };

  return (
    <div
      className="container my-2"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-2">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is the first item's accordion body. It is shown by default,
              until the collapse plugin adds the appropriate classNamees that we
              use to style each element. These classNamees control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Anaylyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is the second item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classNamees that we
              use to style each element. These classNamees control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is the third item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classNamees that we
              use to style each element. These classNamees control the overall
              appearance, as well as the showing and hiding via CSS transitions.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-outline-info "
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}

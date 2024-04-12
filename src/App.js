import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import react, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#454444";
      document.body.style.color = "white";
      showAlert(" Dark mode has been enabled", "success ");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing mode";    // for evil alert for user
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Light mode has been enabled", "success ");
      document.title = "TextUtils - Light Mode";
    }
  };

  // const toggleMode1 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#30858a";
  //     document.body.style.color = "white";
  //     showAlert(" Dark mode has been enabled", "success ");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert(" Light mode has been enabled", "success ");
  //   }
  // };

  // const toggleMode2 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#8a307c";
  //     document.body.style.color = "white";
  //     showAlert(" Dark mode has been enabled", "success ");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert(" Light mode has been enabled", "success ");
  //   }
  // };

  // const toggleMode3 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#8a7c30";
  //     document.body.style.color = "white";
  //     showAlert(" Dark mode has been enabled", "success ");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert(" Light mode has been enabled", "success ");
  //   }
  // };

  // const toggleMode4 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#9a6b61";
  //     document.body.style.color = "white";
  //     showAlert(" Dark mode has been enabled", "success ");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert(" Light mode has been enabled", "success ");
  //   }
  // };

  return (
    <>
      {/* <Navbar /> */}

      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

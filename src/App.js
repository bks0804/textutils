import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import react, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#454444";
      document.body.style.color = "white";
      showAlert(" Dark mode has been enabled", "success ");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#454444";
      document.body.style.color = "black";
      showAlert(" Light mode has been enabled", "success ");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar /> */}

      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading=" TextUtils - Word counter | Character counter | Uppercase to Lowercase |  Remove extra space"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

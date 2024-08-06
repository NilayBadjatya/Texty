import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TetxForm from "./components/TetxForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
// This is JSX contains 90 - 95 % HTML rest Javascript

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode Has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Texty"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          {" "}
          {/* Switch was depricated to Routes in React v6 */}{" "}
          {/* Updated component */}
          <Route exact path="/about" element={<About />} /> {/* Updated prop */}
          <Route
            exact
            path="/"
            element={
              <TetxForm
                heading="Enter Your Text To Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />{" "}
          {/* Updated prop */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

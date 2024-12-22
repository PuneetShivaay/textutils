import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light"); //whether ldark mode is enabled or not
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
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils by Otical - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now !!"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils by Otical - Light Mode"

    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils by Otical"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}
                />
              }
            />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />}/>
          </Routes>
        </div>
      </Router>
      <Footer></Footer>

    </>
  );
}

export default App;

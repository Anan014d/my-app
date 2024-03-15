import logo from "./logo.svg";
import "./App.css";
// import Node from '../components/Node';
// import React from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState(`light`);
  const [alert, setalert] = useState("null");
  const showalert = (message, type) => {
    setalert({ message: message, type: type });
    // setTimeout()
    setTimeout(() => {
      setalert();
    }, 2000);
  };
  const togglemode = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode is on ", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is on ", "success");
    }
  };
  return (
    <>
        {/* <Router>
            <Navbar mode={mode} togglemode={togglemode} />
            <Alert alert={alert} />
            <div className="container my-3">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Textform
                  heading="Enter The Text To Analysis"
                  mode={mode}
                  togglemode={togglemode}
                  showalert={showalert}
                  alert={alert}
                />} />
              </Routes>
            </div>
        </Router> */}

      < Navbar mode ={mode} togglemode={togglemode}/>
      <Alert alert={alert}></Alert>
        <Textform heading ="Enter The Text To Analysis"mode={mode} togglemode={togglemode} showalert={showalert} alert={alert}></Textform>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/nav-control/Navbar";
import ControlNav from "./components/nav-control/ControlNav";
// import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ControlNav />
      </Router>
    </>
  );
}

export default App;

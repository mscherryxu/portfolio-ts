import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import RoutesComponent from "./RoutesComponent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <RoutesComponent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

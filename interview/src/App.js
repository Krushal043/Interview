import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProctFrom from "./components/ProctFrom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<ProctFrom />} />
        <Route path="/edit/:id" element={<ProctFrom />} />
      </Routes>
    </Router>
  );
}

export default App;

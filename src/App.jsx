import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import ContactPage from "./Components/ContactPage";
import Home from "./Components/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

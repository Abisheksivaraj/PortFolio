import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Skills from "./Components/Skills";
// import Project from "./Components/Project";
// import ContactPage from "./Components/ContactPage";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/ContactPage" element={<ContactPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

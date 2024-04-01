import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import ContactPage from "../Components/ContactPage";
import Footer from "../Components/Footer";

import Skills from "../Components/Skills";
import Project from "../Components/Project";
import Home from "../Components/Home";
const Portfolio = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Portfolio;

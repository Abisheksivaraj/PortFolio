import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Routee = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Routee;

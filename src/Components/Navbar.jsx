import React from "react";
import Image from "../assets/square.png";
import Menu from "../assets/menu.png";
const Navbar = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex items-center justify-between ">
        <div>
          <img src={Image} alt="" className="h-[3rem]" />
        </div>
        <div className="flex flex-row">
          <img src={Menu} alt="" className="h-[2rem]" />
        </div>
        <button>Contact me</button>
      </div>

      <div className="relative">
        <ul className="absolute bottom-[-1]">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>My project</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

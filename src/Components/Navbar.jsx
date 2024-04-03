import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleChange() {
    setIsMenuVisible((prevState) => !prevState);
  }

  return (
    <div className="text-white md:flex md:items-center  fixed top-0 w-screen p-2 z-50 bg-[#021024] shadow-sm shadow-white">
      <div className="flex items-center justify-between w-full p-4">
        <Link spy={true} smooth={true} offset={0} duration={500} to="Home">
          <h1 className="text-[2rem] font-bold text-[orange] cursor-pointer">
            PortFolio.
          </h1>
        </Link>
        <div>
          <CgMenuGridR
            className="text-[white] h-10 w-10 md:hidden"
            onClick={toggleChange}
          />
        </div>
      </div>

      <div
        className={`${
          isMenuVisible ? "" : "hidden"
        } md:block md:mt-1 md:w-full md:relative md:z-50`}
      >
        <ul className="md:flex md:flex-row md:gap-10 md:bg-[#021024] md:text-white md:ml-44">
          <li>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="hover:text-[#f98d2f] text-start cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={380}
              duration={500}
              className="hover:text-[#f98d2f] cursor-pointer"
            >
              AboutMe
            </Link>
          </li>
          <li>
            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={1200}
              duration={500}
              className="hover:text-[#f98d2f] cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={1930}
              duration={500}
              className="hover:text-[#f98d2f] cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#f98d2f] cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

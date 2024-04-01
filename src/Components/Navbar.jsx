import { React, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleChange() {
    setIsMenuVisible((prevState) => !prevState);
  }

  return (
    <div className="text-white md:flex md:items-center md:ml-[-1rem] p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className=" text-[2rem] font-bold text-[orange]">PortFolio.</h1>
        </div>
        <div>
          <CgMenuGridR
            className="text-[white] h-10 w-10 md:hidden"
            onClick={toggleChange}
          />
        </div>
      </div>

      <div className="">
        <ul
          className={`inset-0 bg-opacity-100   font-bold justify-evenly items-center  xl:ml-[37rem] right-[1rem]  text-18px  cursor-pointer p-2  flex flex-col h-[50rem] w-[20rem] text-[navy] bg-white
          
          md:text-[1.3rem] md:font-normal  md:flex  md:flex-row md:gap-10  z-10   md:bg-inherit md:text-white md:h-1 ${
            isMenuVisible ? "" : "hidden"
          }`}
        >
          <Link to={"/Home"}>
            <span className="hover:text-[#f98d2f] text-start">Home</span>
          </Link>

          <span className="hover:text-#f98d2f flex flex-col justify-start items-start gap-1 relative group text-start md:relative">
            <Link to={"/About"}>
              <span className="hover:text-#f98d2f flex flex-col justify-start items-start gap-1 relative group text-start md:relative">
                AboutUs
              </span>
            </Link>
          </span>
          <Link to={"/Skills"}>
            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Skills
            </span>
          </Link>

          <span className="hover:text-[#f98d2f] flex justify-start items-center gap-1 relative group">
            Projects
          </span>

          <span className="hover:text-[#f98d2f] cursor-pointer text-start">
            Contact
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { React, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleChange() {
    setIsMenuVisible((prevState) => !prevState);
  }

  return (
    <div className=" p-6 text-white">
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
          className={` absolute top-[5rem] right-[10rem] gap-5 font-normal text-18px md:text-[1.3rem] cursor-pointer p-2 h-auto flex flex-col md:flex  md:flex-row md:top-[1.5rem] md:gap-10 md:mr-[-8rem] z-10  ${
            isMenuVisible ? "" : "hidden"
          }`}
        >
          <span className="hover:text-[#f98d2f] text-start">Home</span>

          <span className="hover:text-#f98d2f flex flex-col justify-start items-start gap-1 relative group text-start md:relative">
            <span className="flex justify-center items-center">AboutUs</span>
          </span>

          <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
            Skills
          </span>

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

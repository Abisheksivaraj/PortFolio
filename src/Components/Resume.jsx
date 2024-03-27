import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaRegChartBar } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";

const Resume = () => {
  return (
    <motion.div
      className=" "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-white text-[2rem] text-center font-semibold underline-offset-4">
          Resume
        </h1>
      </div>
      <motion.div className="flex flex-col justify-between md:items-center gap-10 md:gap-[18rem] ">
        <motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ul className="flex flex-col items-start justify-evenly md:mt-10 ml-10 w-10  p-1 bg-white rounded-md md:w-16 md:h-[40rem] h-[25rem] md:p-3 md:rounded-md">
              <li className="text-[#f98d2f] flex items-center ">
                <FaUserGraduate className=" md:h-10 h-8 w-8 md:w-10" />
                <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12 px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
                  Education
                </span>
              </li>
              <li className="text-[#f98d2f] flex items-center">
                <MdWorkHistory className="h-8 w-8 md:h-10 md:w-10 " />
                <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
                  Work History
                </span>
              </li>
              <li className="text-[#f98d2f] flex items-center">
                <GiLaptop className="h-8 w-8 md:h-10 md:w-10 " />
                <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
                  Skills
                </span>
              </li>
              <li className="text-[#f98d2f] flex items-center">
                <FaRegChartBar className="h-8 w-8 md:h-10 md:w-10 " />
                <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
                  Projects
                </span>
              </li>
              <li className="text-[#f98d2f] flex items-center">
                <IoMdColorPalette className="h-8 w-8 md:h-10 md:w-10 " />
                <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
                  Intrests
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            className="md:h-[40rem] h-[30rem] w-[18rem] md:w-[50rem] bg-[#021024] shadow-2xl shadow-blue-500/20 ml-[-10px]"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div>
              ul
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;

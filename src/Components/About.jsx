import React from "react";
import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
// import Navbar from "../Components/Navbar";
import Aboutimg from "../assets/aboutimg.jpeg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-white text-[2rem] text-center font-semibold underline-offset-4">
          About Me
        </h1>
      </div>

      <motion.div className="p-6 md:flex md:flex-row  xl:ml-[13rem] ml-[2rem] ">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={Aboutimg}
            alt=""
            className="w-[20rem] md:w-[25rem] h-[40rem] rounded-tl-lg md:rounded-bl-lg rounded-tr-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[20rem] md:w-[27rem] bg-slate-50 h-[40rem] p-5 relative md:rounded-tr-lg rounded-br-lg rounded-bl-lg"
        >
          <p className="w-[18rem] font-normal text-[16px] md:text-[20px] md:w-[22rem]">
            Full Stack Web Developer with background knowledge of Mern stacks
            with redux,along with a knack of building websites with utmost
            efficiency
          </p>
          <motion.div className="absolute top-[12rem] md:text-[20px]">
            <h1 className="w-[18rem] font-semibold text-[16px] md:text-[20px]">
              Here are a few Highlights:
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-start">
                <RxDotFilled className="text-[3rem] text-[#f98d2f]" />
                <span>Full Stack Web Development.</span>
              </li>
              <li className="flex items-center justify-start">
                <RxDotFilled className="text-[3rem] text-[#f98d2f]" />
                <span>Interactive Frontend as per the Design.</span>
              </li>
              <li className="flex items-center justify-start">
                <RxDotFilled className="text-[3rem] text-[#f98d2f]" />
                <span>Html , CSS , TailwindCSS , JavaScript React </span>
              </li>
              <li className="flex items-center justify-start">
                <RxDotFilled className="text-[3rem] text-[#f98d2f]" />
                <span>Redux for State Management.</span>
              </li>
              <li className="flex items-center justify-start">
                <RxDotFilled className="text-[3rem] text-[#f98d2f]" />
                <span>Building API</span>
              </li>
            </ul>
          </motion.div>

          <motion.div>
            <ul className="absolute top-[33rem] md:top-[36rem]  text-[1rem] flex flex-row items-start md:flex-row  gap-10">
              <li>
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex items-center justify-center font-semibold h-10 w-[7rem] rounded-lg text-white bg-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                  Hire Me
                </motion.button>
              </li>
              <li>
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex items-center justify-center font-semibold h-10 md:w-[10rem] w-[8rem] text-white rounded-lg bg-black "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Resume
                </motion.button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

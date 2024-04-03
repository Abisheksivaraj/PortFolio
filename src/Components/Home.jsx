import React, { useState, useEffect } from "react";
import Port from "../assets/portimage.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AbishekResume from "../../src/AbishekResume.pdf";

const Home = () => {
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setIsSwiping(true);
      } else {
        setIsSwiping(false);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div id="Home">
      <motion.div
        className="p-16 text-white relative"
        animate={{ opacity: isSwiping ? 0.5 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full z-10 absolute top-[15rem] md:top-[10rem]"
        >
          <span className="text-[2rem] text-[gray]">Hello,</span> <br />
          <span className="text-[3rem] z-10 w-[20%]">
            I'm{" "}
            <span className="text-[3rem] text-[#f98d2f] font-bold">
              Abishek
            </span>
            <br />
            Frontend Developer
          </span>
          <p className="w-[84%] md:w-[60%] text-[1.3rem] text-[gray]">
            Frontend developer with a passion for creating engaging user
            experiences. Proficient in HTML, CSS, and JavaScript, with a strong
            foundation in modern frontend frameworks.
          </p>
          <ul className="absolute top-[34rem] text-[1rem] flex flex-col items-start md:flex-row md:top-[22rem] gap-10">
            <li>
              <button className=" flex items-center justify-center font-semibold h-14 w-[10rem] rounded-lg text-black bg-white ">
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
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
            </li>
            <li>
              <a href={AbishekResume} download="AbishekResume.pdf">
                <button className="flex items-center justify-center font-semibold h-14 w-[15rem] text-black rounded-lg bg-white">
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
                  Download Resume
                </button>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-[1rem] md:top-[5rem]  md:ml-[25rem] xl:ml-[40rem]"
        >
          <img
            src={Port}
            alt=""
            className="h-[47rem] w-[auto] md:h-[32rem] md:w-[50rem] xl:w-[55rem]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/Projects/calculator.png";
import project2 from "../assets/Projects/chatApp.png";
import project3 from "../assets/Projects/ExpenseTracker.png";
import project4 from "../assets/Projects/ImageSlider.png";
import project5 from "../assets/Projects/MovieHub.png";
import project6 from "../assets/Projects/RockPaperScissor.png";
import project7 from "../assets/Projects/TurboCarRental.png";
import project8 from "../assets/Projects/Portfolio.png"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
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
  const projects = [
    {
      img: project8,
      name: "Portfolio (React)",
      github_link: "https://github.com/Abisheksivaraj/PortFolio",
      live_link: "https://portfolio-abishek.netlify.app/",
    },
    {
      img: project2,
      name: "ChatApp (React)",
      github_link: "https://github.com/Abisheksivaraj/chatapp",
      live_link: "https://tangerine-cobbler-baf4b6.netlify.app/",
    },
    {
      img: project5,
      name: "MovieHub (React)",
      github_link: "https://github.com/Abisheksivaraj/movie",
      live_link: "https://flourishing-dieffenbachia-ae2b6b.netlify.app/",
    },
    {
      img: project3,
      name: "Expense Tracker (JavaScript)",
      github_link: "https://github.com/Abisheksivaraj/expense-tracker",
      live_link: "https://peppy-salamander-350750.netlify.app/",
    },
    {
      img: project6,
      name: "Rock Paper Scissor (JavaScript)",
      github_link: "https://github.com/Abisheksivaraj/rock-paper-scissor",
      live_link: "https://animated-tulumba-6c04e2.netlify.app/",
    },
    {
      img: project1,
      name: "Calculator (JavaScript)",
      github_link: "https://github.com/Abisheksivaraj/calculator",
      live_link: "https://heroic-cajeta-8387ac.netlify.app/",
    },
    {
      img: project7,
      name: "Turbo Car Rental (Html & CSS)",
      github_link: "https://github.com/Abisheksivaraj/turbo-project",
      live_link: "https://fantastic-fairy-26b005.netlify.app/",
    },
    {
      img: project4,
      name: "Image Slider (JavaScript)",
      github_link: "https://github.com/Abisheksivaraj/image-slider",
      live_link: "https://gant-fairy-cbdf6b.netlify.app/",
    },
  ];
  return (
    <motion.div className="relative p-24 md:p-16" id="Project">
      <motion.div
        id="projects"
        className="text-white absolute md:top-[110rem] xl:top-[92rem] top-[205rem]"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isSwiping ? 0.5 : 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-4xl font-semibold">
            <span className="md:ml-[-35rem] xl:ml-[-10rem] text-white">
              My Projects
            </span>
          </h3>
          <p className="text-gray-400 mt-3 xl:ml-[-10rem] text-lg md:ml-[-35rem] xl:mr-0">
            My awesome works
          </p>
        </motion.div>
        <br />
        <div className="flex max-w-7xl gap-6 px-5 mx-auto items-center relative ">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:w-full w-full mt-4  ml-[-4rem]"
          >
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                325: {
                  slidesPerView: 4,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={project_info.img} alt="" className="rounded-lg" />
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;

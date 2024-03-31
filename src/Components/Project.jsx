import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/Projects/calculator.png";
import project2 from "../assets/Projects/chatApp.png";
import project3 from "../assets/Projects/ExpenseTracker.png";
import project4 from "../assets/Projects/ImageSlider.png";
import project5 from "../assets/Projects/MovieHub.png";
import project6 from "../assets/Projects/RockPaperScissor.png";
import project7 from "../assets/Projects/TurboCarRental.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project2,
      name: "ChatApp",
      github_link: "https://github.com/Abisheksivaraj/chatapp",
      live_link: "https://tangerine-cobbler-baf4b6.netlify.app/",
    },
    {
      img: project5,
      name: "MovieHub",
      github_link: "https://github.com/Abisheksivaraj/movie",
      live_link: "https://flourishing-dieffenbachia-ae2b6b.netlify.app/",
    },
    {
      img: project3,
      name: "Expense Tracker",
      github_link: "https://github.com/Abisheksivaraj/expense-tracker",
      live_link: "https://peppy-salamander-350750.netlify.app/",
    },
    {
      img: project6,
      name: "Rock Paper Scissor",
      github_link: "https://github.com/Abisheksivaraj/rock-paper-scissor",
      live_link: "https://animated-tulumba-6c04e2.netlify.app/",
    },
    {
      img: project1,
      name: "Calculator",
      github_link: "https://github.com/Abisheksivaraj/calculator",
      live_link: "https://heroic-cajeta-8387ac.netlify.app/",
    },
    {
      img: project7,
      name: "Turbo Car Rental",
      github_link: "https://github.com/Abisheksivaraj/turbo-project",
      live_link: "https://fantastic-fairy-26b005.netlify.app/",
    },
    {
      img: project4,
      name: "Image Slider",
      github_link: "https://github.com/Abisheksivaraj/image-slider",
      live_link: "gant-fairy-cbdf6b.netlify.app",
    },
  ];
  return (
    <motion.div className=" relative ">
      <motion.div
        id="projects"
        className=" text-white absolute md:top-[130rem] top-[240rem] p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-4xl font-semibold">
            My <span className="md:mr-[23rem] xl:mr-[-4rem]">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg md:mr-[23rem] xl:mr-[-4rem]">
            My awesome works
          </p>
        </motion.div>
        <br />
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative ml-4">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:w-full w-full mt-4"
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

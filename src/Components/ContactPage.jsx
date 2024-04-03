import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "../index.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7b9mee7",
        "template_x158n5j",
        form.current,
        "I5aRRzj0TSG9gDkZt"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <motion.div
      className="p-16 absolute top-[251rem] md:top-[172rem] xl:top-[175rem] xl:ml-[14rem]"
      id="Contact"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-3 md:p-10 md:ml-28"
      >
        <p className="text-4xl font-semibold text-gray-100 text-center mr-10">
          Let's create something Together 🤝
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <form ref={form} className="flex flex-col items-center ml-2">
          <label className="relative cursor-pointer mt-4">
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              className="h-10 w-48 md:w-80 xl:w-[40rem] px-4 text-lg text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-50 transition duration-200"
            />
          </label>
          <label className="relative cursor-pointer mt-4">
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className="h-10 w-48 md:w-80 xl:w-[40rem] px-4 text-lg text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-50 transition duration-200"
            />
          </label>
          <label className="relative cursor-pointer mt-4">
            <textarea
              name="message"
              className="mt-4 h-40 w-48 md:w-80 xl:w-[40rem] px-4 text-lg text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-50 transition duration-200"
              placeholder="Message..."
            ></textarea>
          </label>
          <button
            onSubmit={sendEmail}
            className="mt-4 h-12 w-32 xl:w-[30rem] md:w-40 bg-[#021024] text-white border border-white rounded-lg p-2 flex items-center justify-center"
            type="submit"
          >
            <AiOutlineMail className="mr-2" />
            Send
          </button>
        </form>

        <motion.div className="">
          <ul className="text-white flex flex-col md:flex-row items-center justify-center gap-[5rem] ml-2 md:ml-[2rem] mt-10 md:mt-[4rem]">
            <li>
              <a href="">
                <FaFacebookF className="h-[2.5rem] w-[2.5rem] hover:text-[#f98d2f]" />
              </a>
            </li>
            <li>
              <a href="https://x.com/Abishek_2601?t=mgUDd_xMIzprwKOzyrD8yg&s=09">
                <FaTwitter className="h-[2.5rem] w-[2.5rem] hover:text-[#f98d2f]" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p_r_i_n_c_e.26?igsh=MTRjdWNtZnFrNXk4Zw==">
                <FaInstagram className="h-[2.5rem] w-[2.5rem] hover:text-[#f98d2f]" />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/abishek-sivaraj-9b0092272">
                <FaLinkedinIn className="h-[2.5rem] w-[2.5rem] hover:text-[#f98d2f]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Abisheksivaraj">
                <FaGithub className="h-[2.5rem] w-[2.5rem] hover:text-[#f98d2f]" />
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;

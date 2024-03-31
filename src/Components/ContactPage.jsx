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
    <motion.div className="absolute top-[282rem] md:top-[176rem] xl:ml-[13rem]">
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
        <ul className="text-white flex flex-col md:flex-row items-center justify-center gap-[5rem] ml-2 md:ml-[2rem] mt-[6rem]">
          <li>
            <a href="">
              <FaFacebookF className="h-[4rem] w-[4rem] hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter className="h-[4rem] w-[4rem] hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram className="h-[4rem] w-[4rem] hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedinIn className="h-[4rem] w-[4rem] hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub className="h-[4rem] w-[4rem] hover:text-[#f98d2f]" />
            </a>
          </li>
        </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;

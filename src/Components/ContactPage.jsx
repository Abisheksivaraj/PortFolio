import React, { useRef } from "react";

import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "../index.css";

import { GrMapLocation } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { SiWhatsapp } from "react-icons/si";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import Hubspot from "./Hubspot";

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
      className="p-16 absolute top-[251rem] md:top-[172rem] xl:top-[148rem] xl:ml-[14rem]"
      id="Contact"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-3 md:p-10 md:ml-28"
      >
        <p className="text-4xl font-semibold text-gray-100 text-center ml-[-1rem] md:ml-[-10rem] xl:ml-[-15rem]">
          Let's create something Together 🤝
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col md:flex-row items-center justify-start gap-[7rem] ml-[-1rem]  xl:ml-[-11rem]"
      >
        <Hubspot />

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ul className="text-[#f98d2f] flex flex-col items-start gap-[3em] md:ml-[-3rem]  mt-[-3rem]">
            <li className="flex items-center gap-4">
              <IoIosMail className="h-[3rem] w-[3rem]" />
              <span className="text-white  text-l md:text-2xl">
                abishek.webdev@gmail.com
              </span>
            </li>
            <li className="flex items-center gap-4">
              <SiWhatsapp className="h-[3rem] w-[3rem]" />
              <span className="text-white text-l md:text-2xl">
                +91 96779 53545
              </span>
            </li>
            <li className="flex items-center gap-4">
              <GrMapLocation className="h-[3rem] w-[3rem]" />
              <span className="text-white text-l md:text-2xl">
                Tirupur , TamilNadu
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="">
        <ul className="text-[#f98d2f] flex flex-row md:flex-row items-center justify-center gap-[3rem]  mt-10 md:mt-[4rem] ml-[-14rem] md:ml-[-1rem] xl:ml-[-9rem]">
          <li>
            <a href="">
              <FaFacebookF className="h-[2.5rem] w-[2.5rem] hover:text-[white]" />
            </a>
          </li>
          <li>
            <a href="https://x.com/Abishek_2601?t=mgUDd_xMIzprwKOzyrD8yg&s=09">
              <FaTwitter className="h-[2.5rem] w-[2.5rem] hover:text-[white]" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/p_r_i_n_c_e.26?igsh=MTRjdWNtZnFrNXk4Zw==">
              <FaInstagram className="h-[2.5rem] w-[2.5rem] hover:text-[white]" />
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/abishek-sivaraj-9b0092272">
              <FaLinkedinIn className="h-[2.5rem] w-[2.5rem] hover:text-[#white" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Abisheksivaraj">
              <FaGithub className="h-[2.5rem] w-[2.5rem] hover:text-[white]" />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
    //{" "}
  );
};

export default ContactPage;

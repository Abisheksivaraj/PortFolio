import React from "react";
import "../index.css";
import Navbar from "../Components/Navbar";
import { LiaTelegram } from "react-icons/lia";

const ContactPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-6 ">
        <p className="text-white text-center text-[2rem] font-serif ">
          Let's create something Together 🤝
        </p>
      </div>

      <div className="flex items-center justify-center ">
        <label className="relative cursor-pointer ml-1">
          <input
            type="text"
            placeholder="Input"
            className="h-18 w-[20rem] md:w-[32rem] px-6 text-4xl text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-4xl text-white text-opacity-80 bg-[#021024] absolute left-5 top-5 px-1 transition duration-200 input-text font-serif">
            Name
          </span>
        </label>
      </div>

      <div className="flex items-center justify-center mt-14">
        <label className="relative cursor-pointer ml-1">
          <input
            type="mail"
            placeholder="Input"
            className="h-18 w-[20rem] md:w-[32rem] px-6 text-4xl text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-4xl text-white text-opacity-80 bg-[#021024] absolute left-5 top-5 px-1 transition duration-200 input-text font-serif">
            Mail
          </span>
        </label>
      </div>

      <div className="flex items-center justify-center">
        <label className="relative cursor-pointer ml-1">
          <textarea
            className="m-14 text-4xl w-[19rem] md:w-[32rem] text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 "
            name="freeform"
            rows="5"
            cols="15"
            placeholder="Message..."
          ></textarea>
        </label>
        <div className="text-white flex items-center justify-center text-center relative ">
          <button className="flex items-center text-2xl top-[8rem] right-[9rem] absolute md:right-[16rem]  md:top-15 h-[3rem] w-[8rem] bg-[#021024] border border-white  rounded-xl p-5">
            <LiaTelegram />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

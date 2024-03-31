import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "../index.css";
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
    <div>
      <Navbar />
      <div className="p-6">
        <p className="text-4xl font-semibold text-gray-100 text-center">
          Let's create something Together 🤝
        </p>
      </div>
      <form ref={form} className="flex flex-col items-center">
        <label className="relative cursor-pointer mt-4">
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            className="h-10 w-48 md:w-80 px-4 text-lg text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-50 transition duration-200"
          />
        </label>
        <label className="relative cursor-pointer mt-4">
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className="h-10 w-48 md:w-80 px-4 text-lg text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-50 transition duration-200"
          />
        </label>
        <label className="relative cursor-pointer mt-4">
          <textarea
            name="message"
            className="mt-4 h-40 w-48 md:w-80 px-4 text-lg text-white bg-[#021024] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-white placeholder-gray-300 placeholder-opacity-50 transition duration-200"
            placeholder="Message..."
          ></textarea>
        </label>
        <button
          onSubmit={sendEmail}
          className="mt-4 h-12 w-32 md:w-40 bg-[#021024] text-white border border-white rounded-lg p-2 flex items-center justify-center"
          type="submit"
        >
          <AiOutlineMail className="mr-2" />
          Send
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactPage;

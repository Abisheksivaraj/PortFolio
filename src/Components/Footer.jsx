import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-6">
      <div className="">
        <ul className="text-white flex items-center justify-center gap-10">
          <li>
            <a href="">
              <FaFacebookF className="h-8 w-10 hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter className="h-8 w-10 hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram className="h-8 w-10 hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedinIn className="h-8 w-10 hover:text-[#f98d2f]" />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub className="h-8 w-10 hover:text-[#f98d2f]" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <span className="text-white flex items-center justify-center pt-10 text-[1.1rem] md:text-[2rem] font-thin">
          Design and Developed by AbishekSivaraj
        </span>
      </div>
    </div>
  );
};

export default Footer;

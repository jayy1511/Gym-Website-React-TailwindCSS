import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#222] rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className="w-full md:w-1/4">
          <Link to="/">
            <h1 className="font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
          <p className="mt-4">
            Your ultimate fitness partner, helping you stay healthy and active.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl mt-4">Address</h1>
          <p className="mt-4">13 Rue Voltaire, 75007 Paris</p>
        </div>
        <div>
          <h1 className="font-medium text-xl mt-4">Contact</h1>
          <div className="flex flex-row items-center gap-2 mt-4">
            <AiTwotonePhone size={20} />
            <p>+33 7 83 49 00 04</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>contact@fitzone.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center mt-4">
          &copy; 2025 <span className="text-brightRed">FitZone</span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

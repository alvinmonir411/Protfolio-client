import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Btn = ({ name, href = "#_" }) => {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
    >
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>

      {/* Right Arrow (disappears on hover) */}
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <HiArrowNarrowRight className="w-5 h-5 text-green-400" />
      </span>

      {/* Left Arrow (slides in on hover) */}
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <HiArrowNarrowRight className="w-5 h-5 text-green-400" />
      </span>

      {/* Text */}
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        {name}
      </span>
    </a>
  );
};

export default Btn;

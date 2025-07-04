import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className=" bg-black text-white overflow-hidden">
      <div className="container mx-auto min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 relative overflow-hidden">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 max-w-xl"
        >
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-500 lg:text-7xl font-bold leading-tight mb-6">
            <Typewriter
              options={{
                strings: [
                  "Hi,I am",
                  "Alvin Monir",
                  "Frontend ",
                  "Developer",
                  "React ",
                  "Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="text-gray-300 mb-6 bg-black/40 p-4 rounded-lg">
            Passionate web developer crafting beautiful and functional digital
            experiences. Specializing in modern web technologies and responsive
            design.
          </p>

          <div className="flex gap-4 text-lg mb-6">
            <NavLink
              to="https://github.com/alvinmonir411"
              className="text-[30px] text-white hover:text-pink-400 transition-colors duration-200"
            >
              <FaGithub />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/alvin-monir/"
              className="text-[30px] text-white hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </NavLink>
            <NavLink
              to="https://x.com/AlvinMonir"
              className="text-[30px] text-white hover:text-sky-400 transition-colors duration-200"
            >
              <FaTwitter />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/alvinmmonir321135"
              className="text-[30px] text-white hover:text-blue-600 transition-colors duration-200"
            >
              <FaFacebook />
            </NavLink>
          </div>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full text-white font-semibold">
              Hire Me
            </button>
            <a
              href="https://drive.google.com/file/d/16VBW8RRoV20chfIjwRHBVUWcguTHaPXL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
              className="border border-pink-400 text-pink-300 px-5 py-2 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] rounded-full bg-[#0f0f1b] border-4 border-pink-500 shadow-[0_0_25px_#ff80bf] p-1">
              <img
                src="/protfolio-hero-picture.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

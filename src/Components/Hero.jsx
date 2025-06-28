// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Hero = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1-8avRBMSLCcbjQN5C3Gs2q0ys2KjAum4/view?usp=sharing";

  return (
    <section className="w-full flex justify-between items-center  px-6 md:px-20 ">
      <div className="mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            <Typewriter
              words={["FRONTEND DEVLOPER", "React Developer", "UI Builder"]}
              loop={0} // 0 = Infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-base-content ">
            Hi,
            <br />
            I'm{" "}
            <span className="font-semibold text-yellow-500">
              Alvin Monir
            </span>. <br />I specialize in crafting modern, efficient, and
            responsive websites that help businesses grow and stand out online.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 text-3xl text-gray-600">
            <a
              href="https://www.linkedin.com/in/alvin-monir"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/alvinmonir411"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://web.facebook.com/alvinmmonir321135"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:scale-105 transition">
              View My Work
            </button>
            <a
              href="/Moniruzzaman-resume.pdf"
              download
              className="bg-gray-800 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-700 transition flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative "
        >
          {/* Background shapes */}
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-yellow-100 z-0"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-200 z-0"></div>

          {/* Profile Image */}
          <motion.img
            initial={{ x: 280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src="/protfolio-hero-picture.png"
            alt="Alvin Monir"
            className="relative z-10 w-full max-w-xs md:max-w-xl mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

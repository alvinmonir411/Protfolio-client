import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 lg:px-20">
      <div className="container mx-auto flex justify-center flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ rotate: 180, scale: 0.5, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full max-w-md flex-shrink-0"
        >
          <div className="rounded-[150px_0_150px_0] overflow-hidden border-4 border-pink-500 shadow-[0_0_20px_#ff80bf]">
            <img
              src="/AboutMe.png"
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl flex flex-col gap-6"
        >
          <p className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Passionate Frontend <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-bold">
              Web Developer
            </span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I’m <span className="text-pink-400 font-medium">Alvin Monir</span> —
            a creative frontend developer focused on building fast, modern, and
            responsive web applications. With strong experience in React,
            TailwindCSS, and JavaScript, I design interfaces that users love.
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Whether it's creating from scratch or enhancing existing designs, I
            enjoy solving real-world problems with scalable and maintainable
            code.
          </p>
          <a
            href="#projects"
            className="mt-4 w-max bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-transform duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          >
            View My Projects →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="container mx-auto overflow-hidden my-28 px-5 flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ rotate: 180, scale: 0.5, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full max-w-md"
        >
          <img
            src="/AboutMe.png"
            alt="About me"
            className="rounded-[150px_0_150px_0] shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <p className="uppercase text-sm tracking-widest text-base-content font-semibold">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-base-content">
            Passionate Frontend <br /> Web Developer
          </h2>
          <p className="text-base-content text-base">
            I’m Alvin Monir — a creative frontend developer with a strong focus
            on building responsive, accessible, and performance-driven web
            applications. With hands-on experience in React, Tailwind CSS, and
            modern JavaScript, I craft interfaces that deliver smooth user
            experiences.
          </p>
          <p className="text-base-content text-base">
            Whether it's building from scratch or improving an existing product,
            I love solving problems with clean, maintainable code. Let's build
            something amazing together.
          </p>
          <a
            href="#projects"
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition text-white font-semibold py-3 px-6 rounded-full w-max"
          >
            View My Projects →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

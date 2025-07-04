import React from "react";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { TiWeatherSunny } from "react-icons/ti";
import { BiMoon } from "react-icons/bi";
import { Link } from "react-scroll";
const Navbar = () => {
  const resumeLink =
    "https://drive.google.com/file/d/16VBW8RRoV20chfIjwRHBVUWcguTHaPXL/view?usp=sharing";

  const navLinks = (
    <>
      <li>
        <Link
          to="Home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-pink-400 underline underline-offset-8"
          className="text-sm font-medium text-gray-300 hover:text-pink-400 transition duration-300 cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-pink-400 underline underline-offset-8"
          className="text-sm font-medium text-gray-300 hover:text-pink-400 transition duration-300 cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-pink-400 underline underline-offset-8"
          className="text-sm font-medium text-gray-300 hover:text-pink-400 transition duration-300 cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="fetureProject"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-pink-400 underline underline-offset-8"
          className="text-sm font-medium text-gray-300 hover:text-pink-400 transition duration-300 cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-pink-400 underline underline-offset-8"
          className="text-sm font-medium text-gray-300 hover:text-pink-400 transition duration-300 cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-[#1b151b] backdrop-blur-md border border-b-pink-500 shadow-[0_0_15px_#ff80bf] rounded-b-xl"
    >
      <div className="navbar px-4 lg:px-10 py-3 text-white">
        {/* Logo */}
        <div className="navbar-start flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full border border-pink-400 shadow"
          />
          <NavLink to="/" className="text-2xl font-bold text-white">
            <span className="text-pink-400">A</span>lvin{" "}
            <span className="text-pink-400">M</span>onir
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>

        {/* Right End */}
        <div className="navbar-end hidden lg:flex">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full text-white font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost text-xl text-white">
              <FaHamburger />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-black/90 backdrop-blur rounded-lg w-52 border border-pink-500"
            >
              {navLinks}
              <li className="mt-3">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full text-white font-semibold"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

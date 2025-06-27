import React from "react";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Btn from "../../Shared/Btn";
import { motion } from "motion/react";
import { TiWeatherSunny } from "react-icons/ti";
import { BiMoon } from "react-icons/bi";

const Navbar = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1-8avRBMSLCcbjQN5C3Gs2q0ys2KjAum4/view?usp=sharing";

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 hover:text-primary ${
              isActive
                ? "text-primary underline underline-offset-8"
                : "text-gray-600"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 hover:text-black ${
              isActive
                ? "text-black underline underline-offset-8"
                : "text-gray-600"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 hover:text-primary ${
              isActive
                ? "text-primary underline underline-offset-8"
                : "text-gray-600"
            }`
          }
        >
          Skills
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar bg-white px-4 py-2 shadow-md sticky top-0 z-50"
    >
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost text-xl">
            <FaHamburger />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo and Name */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <h1 className="text-lg font-semibold text-gray-800">
            Alvin Monir<span className="text-primary text-xl">.</span>
          </h1>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
      </div>

      <div className="navbar-end hidden lg:flex lg:gap-5 text-black ">
        <div className="text-4xl">
          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="cupcake"
            />

            {/* sun icon */}
            <TiWeatherSunny />

            {/* moon icon */}
            <BiMoon />
          </label>
        </div>
        <Btn name="Download Resume" href={resumeLink} />
      </div>
    </motion.div>
  );
};

export default Navbar;

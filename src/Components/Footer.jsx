import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";

const socialLinks = [
  {
    icon: FaTwitter,
    href: "https://x.com/AlvinMonir",
    label: "Twitter",
  },

  {
    icon: FaFacebook,
    href: "https://web.facebook.com/alvinmmonir321135",
    label: "Facebook",
  },
  { icon: FaGithub, href: "https://github.com/alvinmonir411", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alvin-monir/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-neutral-300 font-sans list-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo + Intro */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/logo.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm leading-relaxed max-w-sm text-gray-400"
          >
            Crafting immersive web experiences with cutting-edge technologies.
          </motion.p>
        </div>

        {/* Links (Optional for Premium Look) */}
        <div className="hidden lg:flex flex-col space-y-3">
          <h4 className="text-white font-semibold text-lg">Explore</h4>
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
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white font-semibold text-lg mb-4"
          >
            Follow Me
          </motion.h4>
          <div className="flex space-x-5">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-gray-400 hover:text-pink-400 transition duration-300 text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a] py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-pink-400">Alvin Monir</span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

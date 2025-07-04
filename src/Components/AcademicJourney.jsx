import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaBook,
  FaStar,
} from "react-icons/fa";

const AcademicJourney = () => {
  return (
    <div className="min-h-screen bg-black py-16 overflow-hidden flex flex-col items-center justify-center text-base-content font-sans">
      <div className="container max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-content">
          Academic Journey
        </h2>
        <p className="text-lg text-center mb-16 text-neutral-content max-w-2xl mx-auto">
          My educational background has shaped my expertise in computer science
          and fueled my passion for innovation.
        </p>

        <motion.div
          className="relative border-l-4 border-pink-500 pl-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Timeline Dot */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
            className="absolute left-[-16px] top-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <FaGraduationCap className="text-white text-xl" />
          </motion.div>

          {/* Academic Entry Card with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1b151b] p-6 rounded-lg shadow-xl relative mb-12 border border-transparent hover:border-pink-500 hover:shadow-[0_0_15px_#ff80bf] transition-all duration-300"
            whileHover={{
              opacity: 0.9,
              scale: 1.02,
              boxShadow: "0 0 15px #ff80bf",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.2 },
            }}
          >
            {/* Date Range */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-4 right-4 mr-5 flex items-center gap-2 text-sm text-neutral-content bg-[#271c27] p-1"
            >
              <FaCalendarAlt className="text-pink-400" />
              <span className="hover:text-pink-500">2022 - Ongoing</span>
            </motion.div>

            {/* Degree Title */}
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-primary-content flex items-center gap-2"
            >
              <FaGraduationCap className="text-pink-400" />
              Degree (BSS 2nd Year)
            </motion.h3>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-md bg-[#271c27] p-1 text-neutral-content mb-2"
            >
              <FaMapMarkerAlt className="text-pink-400" />
              <span>Pirgachha Govt College, Rangpur, Pirgachha</span>
            </motion.div>

            {/* Current Academic Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-md text-neutral-content mb-4"
            >
              <FaStar className="text-pink-400" />
              <span>2024-2025(ongoing)</span>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 bg-[#271c27] p-1"
            >
              <h4 className="text-lg font-semibold text-primary-content flex items-center gap-2 mb-2">
                <FaAward className="text-pink-400" />
                Achievements
              </h4>
              <ul className="list-none space-y-2 text-neutral-content">
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span> Academic Scholarship
                  Recipient
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span> Participated in
                  Inter-College Programming Contest
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span> Active Member of
                  College Debating Club
                </li>
              </ul>
            </motion.div>

            {/* Key Courses Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 bg-[#271c27] p-1"
            >
              <h4 className="text-lg font-semibold text-primary-content flex items-center gap-2 mb-3">
                <FaBook className="text-pink-400" />
                Key Courses
              </h4>
              <div className="flex flex-wrap gap-3">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="badge badge-outline badge-secondary text-sm px-4 py-2"
                >
                  Web Development
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="badge badge-outline badge-secondary text-sm px-4 py-2"
                >
                  Social Research Methods
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="badge badge-outline badge-secondary text-sm px-4 py-2"
                >
                  Problem Solving
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="badge badge-outline badge-secondary text-sm px-4 py-2"
                >
                  Digital Communication
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="badge badge-outline badge-secondary text-sm px-4 py-2"
                >
                  Effective Communication
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicJourney;

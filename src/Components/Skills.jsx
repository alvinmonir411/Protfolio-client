import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html", level: 90 },
  { name: "CSS3", icon: "vscode-icons:file-type-css", level: 85 },
  { name: "JavaScript", icon: "vscode-icons:file-type-js-official", level: 85 },
  { name: "React", icon: "vscode-icons:file-type-reactjs", level: 80 },
  { name: "Next.js", icon: "vscode-icons:file-type-next", level: 75 },
  { name: "Node.js", icon: "vscode-icons:file-type-node", level: 70 },
  {
    name: "TypeScript",
    icon: "vscode-icons:file-type-typescript-official",
    level: 75,
  },
  { name: "Tailwind", icon: "vscode-icons:file-type-tailwind", level: 85 },
  { name: "MongoDB", icon: "devicon:mongodb", level: 70 },
  { name: "Git", icon: "vscode-icons:file-type-git", level: 75 },
  { name: "Firebase", icon: "logos:firebase", level: 65 },
  { name: "Figma", icon: "logos:figma", level: 70 },
];

const SkillsGrid = () => {
  return (
    <section className=" px-6   mx-auto bg-black">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-white mb-6"
        >
          <span className="text-white">Technical </span>
          <span className="text-purple-400">Expertise</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          A showcase of my technical proficiency and the tools I use to create
          exceptional web experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map(({ name, icon, level }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative group"
            >
              {/* Glowing border effect on hover */}
              <div
                className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 
                            transition duration-300 bg-gradient-to-r from-pink-500 to-purple-500 blur-md z-0"
              />

              {/* Main Card */}
              <div
                className="relative z-10 bg-[#1b151b] rounded-xl p-8 border border-[#1e1e24]
                            hover:border-pink-400 transition-all duration-300"
              >
                <Icon
                  icon={icon}
                  width="56"
                  height="56"
                  className="mx-auto mb-6"
                />

                <h3 className="text-xl font-semibold text-center text-white mb-6">
                  {name}
                </h3>

                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-[#3b3b42] mb-4 overflow-hidden">
                  <div
                    style={{ width: `${level}%` }}
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-500"
                  />
                </div>
                <p className="text-sm text-gray-400 text-center">
                  {level}% Proficiency
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;

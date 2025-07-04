import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error loading projects:", error);
        setIsLoading(false); // Even if there's an error, stop loading
      });
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <section className="bg-black text-white py-36 px-6 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg max-w-xl mx-auto">
          A selection of projects that showcase my technical capabilities,
          creativity, and experience.
        </p>

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-12 h-12 border-4 border-t-4 border-pink-500 rounded-full"
            ></motion.div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group rounded-xl overflow-hidden hover:border hover:border-pink-500 hover:shadow-[0_0_15px_#ff80bf] transition-all duration-300"
              >
                <div className="relative z-10 bg-[#20191f] rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between ">
                      <div>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 text-xl transition-colors"
                          >
                            <button className="btn m-2">
                              <FaGithub />
                            </button>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-500 text-xl transition-colors"
                          >
                            <button className="btn">
                              <FaExternalLinkAlt />
                            </button>
                          </a>
                        )}
                      </div>
                      <button
                        className="ml-auto cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
                        onClick={() => handleViewDetails(project)}
                      >
                        <FaInfoCircle /> View details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal to display project details */}
      {selectedProject && (
        <dialog
          id="my_modal_5"
          className="modal modal-middle w-full sm:w-[1200px] mx-auto"
        >
          <div className="modal-box  max-w-[1400px] bg-[#20191f] text-white p-6 rounded-lg shadow-lg">
            {/* Modal Image */}
            <div className="mb-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>

            {/* Modal Title */}
            <h3 className="font-bold text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {selectedProject.title}
            </h3>

            {/* Project Overview */}
            <p className="text-lg mb-6">{selectedProject.project_overview}</p>

            {/* Technology Stack Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Technology Stack
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc pl-6">
                    {selectedProject.technology_stack?.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Challenge & Solution Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Challenges & Solutions
              </h4>
              <p>{selectedProject.challenges_and_solutions}</p>
            </div>

            {/* Future Plans Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Future Plans
              </h4>
              <p>{selectedProject.future_plans}</p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mb-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 text-xl transition-colors"
                >
                  <button className="btn bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaGithub />
                    GitHub
                  </button>
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-500 text-xl transition-colors"
                >
                  <button className="btn bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </a>
              )}
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-red-600 hover:bg-red-700">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default FeaturedProjects;

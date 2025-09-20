import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] clip-path-projects font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          PROJECTS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg font-medium">
          A showcase of my projects highlighting my skills and experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="relative flex flex-col border border-white bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300"
          >
            {/* Project Logo/Image */}
            <div className="w-full flex justify-center pt-6">
              <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden shadow-xl border-2 border-purple-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mt-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 mb-4 line-clamp-3 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-auto">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-auto max-h-[90vh]">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
              {/* Project Image */}
              <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-800 p-4 rounded-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 lg:h-full object-contain rounded-xl shadow-md"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-4 text-center lg:text-left">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-center font-semibold transition-colors duration-300"
                  >
                    View Code
                  </a>
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold transition-colors duration-300"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

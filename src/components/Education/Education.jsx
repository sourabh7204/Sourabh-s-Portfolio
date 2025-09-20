import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg font-medium">
          A journey of learning and growth. Here’s a snapshot of my academic
          path.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full hidden sm:block"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Card */}
            <div className="w-full sm:w-1/2 sm:px-8">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gray-900 bg-opacity-80 border border-gray-700 backdrop-blur-md shadow-lg transform transition-transform duration-300 hover:scale-105">
                {/* Logo inside card */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-purple-500">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="mt-14 sm:mt-8 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300 mt-1">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">{edu.date}</p>
                  <p className="mt-4 text-gray-400 font-semibold">
                    Grade: {edu.grade}
                  </p>
                  <p className="mt-4 text-gray-400 text-sm">{edu.desc}</p>
                </div>
              </div>
            </div>

            {/* Timeline Circle */}
            <div className="hidden sm:flex w-12 h-12 bg-gray-400 border-4 border-purple-500 rounded-full flex items-center justify-center z-10 mx-8 sm:mx-0 sm:absolute left-1/2 transform -translate-x-1/2">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

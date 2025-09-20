import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[100px] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        SKILLS
      </h2>
      {/* Single underline */}
      <div className="w-24 h-1 mx-auto mt-2 rounded-full bg-purple-600 dark:bg-[#8245ec]"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-400">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          {/* Category Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-white">
            {category.title}
          </h3>

          {/* Skill Items - Cards kept same */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col sm:flex-row items-center justify-center 
             space-y-1 sm:space-y-0 sm:space-x-2 
             bg-transparent border-2 border-gray-700 rounded-3xl 
             py-2 px-3 text-center w-full"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 break-words">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

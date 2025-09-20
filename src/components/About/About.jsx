import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[20px] md:px-[50px] lg:px-[100px] font-sans mt-6 md:mt-10 lg:mt-14"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Sourabh Vishwakarma
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400 leading-tight">
            <span className="text-gray-800 dark:text-gray-200">I am a </span>
            <span>
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "MERN Stack Developer",
                  "Web App Creator",
                  "UI/UX Designer",
                  "Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-400 mb-10 mt-6 leading-relaxed max-w-xl">
            I’m a Full-Stack Developer skilled in the MERN stack and modern web
            technologies. I’ve built projects like e-commerce platforms and
            Airbnb clones, focusing on clean code, responsive designs, and
            seamless user experiences. I love turning ideas into working
            applications and continuously learning to deliver high-quality
            solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1E_u_yInBWKAMN7RpkP74fFuUEi0tHKsv/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 relative overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 10px rgba(130,69,236,0.6), 0 0 30px rgba(130,69,236,0.4)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
          <Tilt
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="p-[4px] rounded-full bg-gradient-to-r from-purple-600 to-pink-500">
              <img
                src={profileImage}
                alt="Sourabh Vishwakarma"
                className="w-full h-full object-cover rounded-full border-4 border-gray-100 dark:border-gray-900 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { FaTwitter, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="py-12 px-[8vw] md:px-[6vw] lg:px-[12vw] 
                       bg-gray-100 dark:bg-gray-950 
                       border-t border-gray-300 dark:border-gray-800 
                       transition-colors duration-300"
    >
      <div className="container mx-auto text-center flex flex-col items-center space-y-6">
        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-500 tracking-wide">
          Sourabh Vishwakarma
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-600 dark:hover:text-purple-400 text-gray-700 dark:text-gray-300 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          {[
            {
              icon: <FaTwitter />,
              link: "https://x.com/sourabh7204?t=g6Jdp2GzvPYK6qByLOFA8w&s=08",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sourabh7204",
            },
            {
              icon: <FaTelegramPlane />,
              link: "http://t.me/sourabh7204",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 dark:text-gray-400 
                         hover:text-purple-600 dark:hover:text-purple-400 
                         transform hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 dark:border-gray-800 pt-6">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium">Sourabh Vishwakarma</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

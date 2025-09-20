import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Apply theme on load
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[20px] md:px-[50px] lg:px-[100px] ${
        isScrolled
          ? "bg-white dark:bg-[#050414] bg-opacity-70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="py-4 flex justify-between items-center text-black dark:text-white transition">
        {/* Logo */}
        <div className="text-xl font-semibold cursor-pointer flex items-center space-x-1">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="dark:text-white text-black">Sourabh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="dark:text-white text-black">Vishwakarma</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 text-lg">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/sourabh7204"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sourabh7204"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white dark:bg-[#050414] bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-700 dark:text-gray-300 text-lg">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] transition ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-5 mt-4 items-center">
              <a
                href="https://github.com/sourabh7204"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sourabh7204"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] transition"
              >
                <FaLinkedin size={22} />
              </a>
              {/* Mobile Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

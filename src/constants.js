// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import powerbiLogo from "./assets/tech_logo/powerbi.png";
import tableauLogo from "./assets/tech_logo/tableau.png";

// Experience Section Logo's
import mernLogo from "./assets/company_logo/mern1.png";
import dsaLogo from "./assets/company_logo/dsa.png";

// Education Section Logo's
import hkbkLogo from "./assets/education_logo/hkbk.png";
import ssvnLogo from "./assets/education_logo/ssvn.png";
import florenceLogo from "./assets/education_logo/florence.png";

// Project Section Logo's
import spotifyLogo from "./assets/work_logo/spotify.png";
import airbnbLogo from "./assets/work_logo/airbnb1.png";
import shopcartLogo from "./assets/work_logo/shopcart.png";
import ieltsLanding from "../assets/ieltsLanding.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "C", logo: cLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      //  { name: "Python", logo: pythonLogo },
      // { name: "C++", logo: cppLogo },

      // { name: "C-Sharp", logo: csharpLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Power BI", logo: powerbiLogo },
      { name: "Tableau", logo: tableauLogo },

      // { name: "Netlify", logo: netlifyLogo },
      // { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer",
    company: "MERN Stack Projects",
    date: "Jan 2025 - Sep 2025",
    desc: "Built and deployed full-stack web applications using MongoDB, Express, React, and Node.js. Focused on creating responsive, user-friendly interfaces and efficient backend APIs.",
    img: mernLogo,
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST API",
    ],
  },
  {
    id: 2,
    role: "DSA Learner",
    company: "Java & Algorithms",
    date: "Sep 2025 - Present",
    desc: "Starting structured practice of Data Structures and Algorithms in Java to strengthen problem-solving and coding skills for competitive programming and interviews.",
    img: dsaLogo,
    skills: ["Java", "DSA", "Problem Solving", "Algorithms"],
  },
];

export const education = [
  {
    id: 0,
    img: hkbkLogo,
    school: "HKBK College of Engineering, Bengaluru",
    date: "Sep 2023 - Present",
    grade: "7.6+ CGPA",
    desc: "Currently pursuing 3rd-year B.Tech in Information Science Engineering. Learning advanced programming, data structures, algorithms, web development, and full-stack development with MERN stack. Actively involved in projects and hands-on applications to strengthen coding and software engineering skills.",
    degree: "Bachelor of Technology - B.Tech (Information Science Engineering)",
  },
  {
    id: 1,
    img: ssvnLogo,
    school: "State Board XII, PCM with Computer Science",
    date: "Sep 2021 - Mar 2023",
    grade: "81%",
    desc: "Completed class 12 (State Board syllabus) with Physics, Chemistry, Mathematics, and Computer Science. Gained strong foundation in logical thinking, problem solving, and basic programming concepts, preparing for engineering studies.",
    degree: "Pre-University - PCM with Computer Science",
  },
  {
    id: 2,
    img: florenceLogo,
    school: "State Board X",
    date: "Jul 2020 - Apr 2021",
    grade: "71%",
    desc: "Completed class 10 (State Board syllabus) with focus on Science, Mathematics, and other core subjects. Built the foundation for analytical thinking and problem-solving skills for later studies in PCM and engineering.",
    degree: "Secondary School",
  },
];

export const projects = [
  //Airbnb Full-Stack Project
  {
    id: 0,
    title: "Airbnb Full-Stack Project",
    description:
      "A full-stack Airbnb clone with MongoDB, Express, Node.js, React JS, and Mapbox API. Uses Cloudinary for image storage. Live demo available.",
    image: airbnbLogo, // Import a logo or screenshot
    tags: [
      "MongoDB",
      "Express",
      "Node.js",
      "React JS",
      "API",
      "Mapbox",
      "Cloudinary",
    ],
    github: "https://github.com/sourabh7204/Airbnb_FullStack_Project",
    webapp: "https://airbnb-project-qk0s.onrender.com/listings",
  },
  //ShopCart eCommerce Website
  {
    id: 1,
    title: "ShopCart MERN (Ongoing)",
    description:
      "A MERN stack eCommerce website built with TypeScript. Includes product listings, cart, and checkout features. Currently under development.",
    image: shopcartLogo,
    tags: [
      "MongoDB",
      "Express",
      "React JS",
      "Node.js",
      "TypeScript",
      "eCommerce",
    ],
    github: "https://github.com/sourabh7204/shopcart-eCommerce-Website",
    webapp: "", // Not deployed yet
  },
  //Spotify Clone
  {
    id: 2,
    title: "Spotify Clone (Practice Project)",
    description:
      "A front-end Spotify clone built with HTML and CSS for practice and learning purposes.",
    image: spotifyLogo,
    tags: ["HTML", "CSS", "UI/UX"],
    github: "https://github.com/sourabh7204/Spotify-Clone",
    webapp: "https://spotify-clone-el94.vercel.app/",
  },
  //IELTS Landing Page
  {
    id: 2,
    title: "IELTS Institute Landing Page",
    description:
      "A modern and responsive landing page for an IELTS coaching institute built using React, Tailwind CSS, and Vite. Designed with a focus on professional UI and smooth user experience during my internship project.",
    image: ieltsLanding,
    tags: ["React", "Tailwind CSS", "Vite", "Frontend"],
    github: "https://github.com/sourabh7204/ielts-institute-landing",
    webapp: "https://ielts-institute-landing.vercel.app/",
  },
];

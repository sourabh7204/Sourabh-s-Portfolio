import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/img2.png";

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
            href="https://drive.google.com/file/d/1bAvL_TCAf5fBvC9N4F1NN6aG8De0rce-/view?usp=drivesdk"
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

// import React, { useEffect, useState } from "react";

// // --- Typewriter Hook (no external dependency) ---
// function useTypewriter(
//   words,
//   typingSpeed = 80,
//   deletingSpeed = 50,
//   pause = 2000,
// ) {
//   const [charIdx, setCharIdx] = useState(0);
//   const [wordIdx, setWordIdx] = useState(0);
//   const [deleting, setDeleting] = useState(false);
//   useEffect(() => {
//     const current = words[wordIdx % words.length];
//     let t;
//     if (!deleting && charIdx < current.length)
//       t = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
//     else if (!deleting && charIdx === current.length)
//       t = setTimeout(() => setDeleting(true), pause);
//     else if (deleting && charIdx > 0)
//       t = setTimeout(() => setCharIdx((c) => c - 1), deletingSpeed);
//     else {
//       setDeleting(false);
//       setWordIdx((w) => (w + 1) % words.length);
//     }
//     return () => clearTimeout(t);
//   }, [charIdx, deleting, wordIdx, words, typingSpeed, deletingSpeed, pause]);
//   return words[wordIdx % words.length].slice(0, charIdx);
// }

// // --- Static particle data (avoids random on re-render) ---
// const PARTICLES = [...Array(20)].map((_, i) => ({
//   id: i,
//   w: 2 + ((i * 7) % 4),
//   h: 2 + ((i * 13) % 4),
//   top: (i * 23 + 7) % 100,
//   left: (i * 31 + 13) % 100,
//   dur: 4 + ((i * 6) % 6),
//   delay: ((i * 4) % 400) / 100,
//   opacity: 0.2 + ((i * 7) % 40) / 100,
// }));

// const socials = [
//   {
//     label: "GitHub",
//     href: "https://github.com",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//         <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.94.58.1.79-.25.79-.56v-2.14c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.3-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.73 0c2.19-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.75.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z" />
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "https://linkedin.com",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//         <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Twitter",
//     href: "https://twitter.com",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//   },
// ];

// const STATS = [
//   { value: "2+", label: "Years Exp." },
//   { value: "15+", label: "Projects" },
//   { value: "10+", label: "Technologies" },
// ];

// const TECH = [
//   "React",
//   "Node.js",
//   "MongoDB",
//   "Express",
//   "TypeScript",
//   "Tailwind",
// ];

// export default function About() {
//   const typed = useTypewriter([
//     "Full-Stack Developer",
//     "MERN Stack Developer",
//     "UI/UX Designer",
//     "Web App Creator",
//   ]);
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 80);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
//         @keyframes float { 0%,100%{transform:translateY(0) scale(1);opacity:.4} 50%{transform:translateY(-16px) scale(1.1);opacity:.8} }
//         @keyframes spin-slow { to{transform:rotate(360deg)} }
//         @keyframes fade-up { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes pulse-glow { 0%,100%{box-shadow:0 0 30px rgba(124,58,237,.5),0 0 80px rgba(124,58,237,.2)} 50%{box-shadow:0 0 55px rgba(124,58,237,.85),0 0 130px rgba(124,58,237,.35)} }
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
//         @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }

//         .about-section { font-family:'Inter',system-ui,sans-serif }
//         .afu{animation:fade-up .6s ease forwards;opacity:0}
//         .d1{animation-delay:.1s}.d2{animation-delay:.25s}.d3{animation-delay:.4s}
//         .d4{animation-delay:.55s}.d5{animation-delay:.7s}.d6{animation-delay:.85s}
//         .cursor{animation:blink 1s step-end infinite}
//         .avatar-pulse{animation:pulse-glow 3s ease-in-out infinite}
//         .ring-spin{animation:spin-slow 8s linear infinite}

//         .btn-cta{background:linear-gradient(135deg,#7c3aed,#a855f7,#ec4899);background-size:200% auto;transition:background-position .4s,transform .2s,box-shadow .3s}
//         .btn-cta:hover{background-position:right center;transform:translateY(-2px) scale(1.03);box-shadow:0 12px 38px rgba(124,58,237,.55)}
//         .btn-outline{background:rgba(124,58,237,.08);border:1.5px solid rgba(124,58,237,.4);color:#c084fc;transition:all .2s}
//         .btn-outline:hover{background:rgba(124,58,237,.18);transform:translateY(-2px);box-shadow:0 8px 24px rgba(124,58,237,.3)}
//         .social-icon{background:rgba(255,255,255,.05);border:1px solid rgba(124,58,237,.2);color:#94a3b8;transition:all .2s}
//         .social-icon:hover{background:rgba(124,58,237,.18);transform:translateY(-3px);box-shadow:0 6px 20px rgba(124,58,237,.3);color:#c084fc}
//         .stat-tile{background:rgba(255,255,255,.04);border:1px solid rgba(124,58,237,.2);transition:all .2s}
//         .stat-tile:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(124,58,237,.3);background:rgba(124,58,237,.1)}
//         .chip{background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.25);color:#a78bfa;font-size:11px;font-weight:600;padding:3px 11px;border-radius:20px;letter-spacing:.03em}
//         .float-badge{background:rgba(10,7,24,.92);backdrop-filter:blur(16px);font-size:12px;font-weight:700;padding:8px 14px;border-radius:12px}
//       `}</style>

//       <section
//         className="about-section"
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           padding: "80px 24px",
//           overflow: "hidden",
//           background:
//             "linear-gradient(135deg, #08051a 0%, #110c2a 45%, #0d0d1a 100%)",
//         }}
//       >
//         {/* Grid bg */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             opacity: 0.04,
//             backgroundImage:
//               "linear-gradient(rgba(124,58,237,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,.8) 1px,transparent 1px)",
//             backgroundSize: "52px 52px",
//           }}
//         />

//         {/* Ambient glows */}
//         <div
//           style={{
//             position: "absolute",
//             width: "600px",
//             height: "600px",
//             borderRadius: "50%",
//             top: "-10%",
//             left: "-5%",
//             background:
//               "radial-gradient(circle,rgba(124,58,237,.1),transparent 65%)",
//             pointerEvents: "none",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             width: "500px",
//             height: "500px",
//             borderRadius: "50%",
//             bottom: "-10%",
//             right: "-5%",
//             background:
//               "radial-gradient(circle,rgba(236,72,153,.08),transparent 65%)",
//             pointerEvents: "none",
//           }}
//         />

//         {/* Particles */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             overflow: "hidden",
//             pointerEvents: "none",
//           }}
//         >
//           {PARTICLES.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 position: "absolute",
//                 width: `${p.w}px`,
//                 height: `${p.h}px`,
//                 borderRadius: "50%",
//                 background: `rgba(160,100,240,${p.opacity})`,
//                 top: `${p.top}%`,
//                 left: `${p.left}%`,
//                 animation: `float ${p.dur}s ease-in-out infinite`,
//                 animationDelay: `${p.delay}s`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Content */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             width: "100%",
//             maxWidth: "1100px",
//             margin: "0 auto",
//             display: "flex",
//             flexWrap: "wrap",
//             alignItems: "center",
//             gap: "60px",
//             justifyContent: "space-between",
//             opacity: mounted ? 1 : 0,
//             transition: "opacity .3s",
//           }}
//         >
//           {/* ── LEFT ── */}
//           <div style={{ flex: "1 1 420px", minWidth: 0 }}>
//             {/* Status badge */}
//             <div
//               className="afu d1"
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 marginBottom: "22px",
//                 padding: "5px 14px",
//                 borderRadius: "30px",
//                 background: "rgba(124,58,237,.12)",
//                 border: "1px solid rgba(124,58,237,.3)",
//                 color: "#c084fc",
//                 fontSize: "11px",
//                 fontWeight: 700,
//                 letterSpacing: ".1em",
//                 textTransform: "uppercase",
//               }}
//             >
//               <span
//                 style={{
//                   width: "8px",
//                   height: "8px",
//                   borderRadius: "50%",
//                   background: "#4ade80",
//                   boxShadow: "0 0 10px #4ade80",
//                   display: "inline-block",
//                 }}
//               />
//               Available for Work
//             </div>

//             <p
//               className="afu d1"
//               style={{
//                 color: "#a78bfa",
//                 fontSize: "17px",
//                 fontWeight: 500,
//                 marginBottom: "6px",
//               }}
//             >
//               👋 Hello, World! I'm
//             </p>

//             <h1
//               className="afu d2"
//               style={{
//                 fontSize: "clamp(2.6rem,5vw,4rem)",
//                 fontWeight: 900,
//                 lineHeight: 1.05,
//                 letterSpacing: "-0.02em",
//                 marginBottom: "16px",
//                 margin: "0 0 16px",
//                 background:
//                   "linear-gradient(135deg,#fff 20%,#c084fc 60%,#f472b6 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Sourabh
//               <br />
//               Vishwakarma
//             </h1>

//             {/* Typed role */}
//             <div
//               className="afu d3"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//                 fontSize: "20px",
//                 fontWeight: 600,
//                 margin: "16px 0",
//                 minHeight: "30px",
//               }}
//             >
//               <span style={{ color: "#475569" }}>I build </span>
//               <span style={{ color: "#c084fc" }}>{typed}</span>
//               <span
//                 className="cursor"
//                 style={{ color: "#a855f7", fontWeight: 300 }}
//               >
//                 |
//               </span>
//             </div>

//             {/* Tech chips */}
//             <div
//               className="afu d3"
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "7px",
//                 margin: "18px 0",
//               }}
//             >
//               {TECH.map((t) => (
//                 <span key={t} className="chip">
//                   {t}
//                 </span>
//               ))}
//             </div>

//             {/* Bio */}
//             <p
//               className="afu d3"
//               style={{
//                 fontSize: "15px",
//                 lineHeight: 1.78,
//                 color: "#7c8ea6",
//                 maxWidth: "500px",
//                 margin: "0 0 26px",
//               }}
//             >
//               Full-Stack Developer passionate about building performant,
//               scalable web apps with the MERN stack. I turn complex problems
//               into clean, intuitive experiences — from e-commerce platforms to
//               real-time collaborative tools.
//             </p>

//             {/* Stats */}
//             <div
//               className="afu d4"
//               style={{ display: "flex", gap: "12px", marginBottom: "28px" }}
//             >
//               {STATS.map((s) => (
//                 <div
//                   key={s.label}
//                   className="stat-tile"
//                   style={{
//                     flex: 1,
//                     maxWidth: "100px",
//                     textAlign: "center",
//                     borderRadius: "14px",
//                     padding: "14px 8px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: 900,
//                       color: "#c084fc",
//                       lineHeight: 1,
//                     }}
//                   >
//                     {s.value}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "11px",
//                       color: "#475569",
//                       marginTop: "4px",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div
//               className="afu d5"
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "14px",
//                 marginBottom: "26px",
//               }}
//             >
//               <a
//                 href="https://drive.google.com/file/d/1bAvL_TCAf5fBvC9N4F1NN6aG8De0rce-/view?usp=drivesdk"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-cta"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   padding: "12px 28px",
//                   borderRadius: "50px",
//                   color: "white",
//                   fontWeight: 700,
//                   fontSize: "14px",
//                   letterSpacing: ".04em",
//                   textDecoration: "none",
//                 }}
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
//                   />
//                 </svg>
//                 Download CV
//               </a>
//               <a
//                 href="#contact"
//                 className="btn-outline"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   padding: "12px 28px",
//                   borderRadius: "50px",
//                   fontWeight: 700,
//                   fontSize: "14px",
//                   letterSpacing: ".04em",
//                   textDecoration: "none",
//                 }}
//               >
//                 Let's Connect
//                 <svg
//                   width="16"
//                   height="16"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </a>
//             </div>

//             {/* Socials */}
//             <div className="afu d6" style={{ display: "flex", gap: "10px" }}>
//               {socials.map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={s.label}
//                   className="social-icon"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     textDecoration: "none",
//                   }}
//                 >
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT: Avatar ── */}
//           <div
//             className="afu d3"
//             style={{
//               flexShrink: 0,
//               display: "flex",
//               justifyContent: "center",
//               position: "relative",
//               width: "300px",
//               height: "300px",
//             }}
//           >
//             {/* Spinning conic ring */}
//             <div
//               className="ring-spin"
//               style={{
//                 position: "absolute",
//                 inset: "-20px",
//                 borderRadius: "50%",
//                 background:
//                   "conic-gradient(from 0deg,transparent 50%,#7c3aed 68%,#ec4899 82%,transparent 100%)",
//                 opacity: 0.75,
//               }}
//             />
//             {/* Soft glow */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: "8px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle,rgba(124,58,237,.28),rgba(236,72,153,.14),transparent 70%)",
//                 filter: "blur(18px)",
//               }}
//             />

//             {/* Avatar */}
//             <div
//               className="avatar-pulse"
//               style={{
//                 position: "relative",
//                 width: "280px",
//                 height: "280px",
//                 borderRadius: "50%",
//                 padding: "3px",
//                 background: "linear-gradient(135deg,#7c3aed,#ec4899)",
//                 margin: "auto",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   overflow: "hidden",
//                   border: "4px solid #08051a",
//                 }}
//               >
//                 {/* ↓ Swap this div for your actual <img src={profileImage} ...> */}
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     background: "linear-gradient(160deg,#18104a,#2e126e)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "72px",
//                     fontWeight: 900,
//                     color: "#c084fc",
//                     userSelect: "none",
//                     letterSpacing: "-2px",
//                   }}
//                 >
//                   SV
//                 </div>
//               </div>
//             </div>

//             {/* Float badges */}
//             <div
//               className="float-badge"
//               style={{
//                 position: "absolute",
//                 bottom: "8px",
//                 left: "-10px",
//                 border: "1px solid rgba(124,58,237,.45)",
//                 color: "#c084fc",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "7px",
//               }}
//             >
//               ⚛️ React Expert
//             </div>
//             <div
//               className="float-badge"
//               style={{
//                 position: "absolute",
//                 top: "8px",
//                 right: "-10px",
//                 border: "1px solid rgba(236,72,153,.4)",
//                 color: "#f9a8d4",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "7px",
//               }}
//             >
//               🚀 Full Stack
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

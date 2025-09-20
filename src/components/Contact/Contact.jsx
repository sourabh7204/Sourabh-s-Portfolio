import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_n302xe9", // Replace with your EmailJS Service ID
        "template_gyhom89", // Replace with your EmailJS Template ID
        form.current,
        "lyIJF1F4S36GFm39n" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center clip-path-contact py-24 px-[8vw] md:px-[6vw] lg:px-[18vw] 
                 font-sans 
                 bg-skills-gradient 
                 dark:bg-gray-950 
                 transition-colors duration-300"
    >
      {/* Toasts */}
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          Let’s connect! Whether you have a question, an opportunity, or just
          want to say hi, drop me a message 🚀
        </p>
      </div>

      {/* Contact Form Card */}
      <div
        className="w-full max-w-lg bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl 
                   p-8 rounded-2xl shadow-[0_0_30px_rgba(130,69,236,0.3)] 
                   border border-gray-300 dark:border-gray-700 
                   hover:border-purple-500 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 text-center mb-6">
          Let’s Work Together
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md 
                       bg-gray-100 dark:bg-gray-800 
                       text-gray-900 dark:text-white 
                       border border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md 
                       bg-gray-100 dark:bg-gray-800 
                       text-gray-900 dark:text-white 
                       border border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md 
                       bg-gray-100 dark:bg-gray-800 
                       text-gray-900 dark:text-white 
                       border border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 rounded-md 
                       bg-gray-100 dark:bg-gray-800 
                       text-gray-900 dark:text-white 
                       border border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 font-semibold rounded-md transition-all duration-300 ${
              isSending
                ? "bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 shadow-lg hover:shadow-purple-600/40"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

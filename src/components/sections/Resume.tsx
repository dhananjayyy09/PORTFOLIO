import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const Resume = () => {
  return (
    <>
      <Header useMotion={true} p="Resume" h2="Resume." />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
      >
        Download my latest resume or view it directly.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-6">
        <motion.a
          href="/DhananjayResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-tertiary shadow-primary flex items-center gap-3 rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          View Resume
        </motion.a>

        <motion.a
          href="/DhananjayResume.pdf"
          download="DhananjayResume.pdf"
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black flex items-center gap-3 rounded-xl px-8 py-3 font-bold shadow-md outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");

"use client";
import { Kings } from "next/font/google";
import { ModeToggle } from "./ThemeSwitch";
import { motion } from "framer-motion";

const kings = Kings({ subsets: ["latin"], weight: ["400"] });

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export default function Navbar() {
  return (
    <nav className="justify-center flex sticky top-0 z-50">
      <motion.div
        className="mt-4 px-2 sm:px-20 w-full sm:w-[40rem]"
        style={{ maxWidth: "1200px" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <span>
          <motion.a
            href="/"
            className={`md:text-3xl text-2xl font-bold ${kings.className} relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            variants={linkVariants}
            whileHover="hover"
          >
            Anshnk
          </motion.a>
          <motion.a
            href="/photography"
            className={`md:text-2xl ml-4 mr-10 sm:ml-10 sm:mr-40 text-xl ${kings.className} relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            variants={linkVariants}
            whileHover="hover"
          >
            Photography
          </motion.a>
        </span>
        <ModeToggle />
      </motion.div>
    </nav>
  );
}
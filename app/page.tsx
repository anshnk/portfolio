"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Kings } from "next/font/google";

const kings = Kings({ subsets: ["latin"], weight: ["400"] });

import { 
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContent
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ThemeSwitch"
import { useState } from "react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const bottomVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

export default function Page() {
  const projectUrls = [
    "https://github.com/anshnk/nullOS",
    "https://github.com/anshnk/unblockedtech",
    "https://github.com/z1g-project/ephemeral",
    "https://github.com/anshnk/Phoenix",
    "https://github.com/anshnk/portfolio",
    "https://github.com/anshnk/newsite"
  ];

  const [randomProjectUrl, setRandomProjectUrl] = useState(projectUrls[0]);

  const handleRandomizeProject = () => {
    const randomIndex = Math.floor(Math.random() * projectUrls.length);
    setRandomProjectUrl(projectUrls[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full bg-base-200">
      <div className="max-w-lg w-full px-4">
        <motion.div
          className="w-40 h-40 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Avatar className="w-40 h-40 mb-4 justify-start">
            <AvatarImage src="https://github.com/anshnk.png" alt="anshnk" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.div
          className={`${kings.className} text-4xl font-bold mb-1 text-left`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          anshnk
        </motion.div>
        <motion.p
          className="text-lg mb-3 italic text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Pretty awesome coder
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-[100px] mb-10">
                Contact Me
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="https://discordapp.com/users/593497381820039187" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="mailto:ansh@anshnk.dev">
                  Email
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
        <motion.p
          className="max-w-md mb-2 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Hey, I'm Ansh. I'm 13yrs old and I like coding. It's more of a hobby for me but I'm okay at it. This is my first submission for Hack Club High Seas.
        </motion.p>
        <motion.div
          variants={bottomVariants}
          initial="hidden"
          animate="visible"
        >
          <ModeToggle />
          <Button className="ml-4 mt-4" onClick={handleRandomizeProject}>
            A project I've worked on or made!
          </Button>
        </motion.div>
        
      </div>
    </div>
  )
}
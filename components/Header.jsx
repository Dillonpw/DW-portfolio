"use client";

import Image from "next/image";
import Dogs from "./dogs.jsx";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 10 }}
      className="mt-28 md:mx-20 flex flex-col items-center justify-center md:flex-row md:justify-between"
    >
      <Image
        src="/Cartoon.jpeg"
        alt="cartoon"
        width={300}
        height={300}
        className="rounded-full border-2 dark:border-gray-200"
      />
      <div className=" md:mt-40 flex flex-col items-center justify-center text-nowrap">
        <h1 id="home" className="fade-in-2 text-2xl font-semibold lg:text-3xl">
          Dillon Walsh
        </h1>

        <div
          id="links"
          className="fade-in-2 flex items-center justify-center space-x-4 text-xl dark:text-gray-200"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  id="xLink"
                  href="https://x.com/dillonpw_"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="redirect to X"
                >
                  <FontAwesomeIcon
                    className="h-6 w-6 hover:scale-110"
                    icon={faXTwitter}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Twitter/X</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <a
                  id="githubLink"
                  href="https://github.com/Dillonpw/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="redirect to Github"
                >
                  <FontAwesomeIcon
                    className="h-6 w-6 hover:scale-110"
                    icon={faGithub}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  id="linkedinLnk"
                  href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="redirect to Linkedin"
                >
                  <FontAwesomeIcon
                    className="h-6 w-6 hover:scale-110"
                    icon={faLinkedinIn}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="fade-in-3 flex w-full flex-col items-center lg:w-1/2 xl:w-1/3">
          <h2 className="fade-in-3 text-xl opacity-60">
            Full Stack Web Developer
          </h2>
          <Dogs />
          {/*} <Button variant="default" asChild>
          <Link href="/about">About Me</Link>
        </Button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

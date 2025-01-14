"use client";
import Switcher from "./Switcher.jsx";
import Image from "next/image";
import Dogs from "./dogs.jsx";
import Links from "./Links.jsx";
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
} from "./ui/tooltip";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 10 }}
      className="mt-20 flex flex-col items-center justify-center md:mx-10 md:flex-row md:justify-evenly"
    >
      <Image
        src="https://utfs.io/f/2x9MeROBnW8iOQeCQKVh4ogqGP9YIydZrTlvxQFDetMEbBfH"
        alt="cartoon"
        width={300}
        height={300}
        className="rounded-full border-2 dark:border-gray-200"
        priority
      />
      <div className="flex flex-col items-center justify-center text-nowrap md:mt-10">
        <div
          id="links"
          className="fade-in-2 flex items-end justify-center space-x-12 space-y-12 dark:text-gray-200"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="xLink"
                  href="https://x.com/dillonpw_"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter/X"
                  className="block p-2 transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon className="h-6 w-6" icon={faXTwitter} />
                </a>
              </TooltipTrigger>
              <TooltipContent>Twitter/X</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="githubLink"
                  href="https://github.com/Dillonpw/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="block p-2 transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="linkedinLink"
                  href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="block p-2 transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon className="h-6 w-6" icon={faLinkedinIn} />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="fade-in-3 flex w-full flex-col items-center lg:w-1/2 xl:w-1/3">
          <h1 id="home" className="fade-in-2 text-2xl font-semibold">
            Dillon Walsh
          </h1>

          <Switcher />
          <h2 className="fade-in-3 cursor-pointer text-xl opacity-60">
            If I&apos;m not building{" "}
            <a
              className="hover:underline"
              href="https://www.schedtrack.com"
              target="_blank"
            >
              Schedtrack.com
            </a>{" "}
          </h2>

          <Dogs />
          <Links />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

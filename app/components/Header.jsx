import NavBar from "./nav.jsx";
import Image from "next/image";
import Dogs from "./dogs.jsx";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        className="mx-8 mt-40 flex flex-col items-center justify-center lg:flex-row"
      >
        <div className="flex w-full flex-col items-center justify-center gap-4 px-6 lg:w-1/2 lg:items-start lg:justify-start">
          <Image
            src="/Cartoon.jpeg"
            alt="cartoon"
            width={200}
            height={200}
            className="mx-5 rounded-full border-2 dark:border-blue-400"
          />
          <h1 id="home" className="px-5 text-5xl">
            Dillon Walsh
          </h1>
          <h2 className="fade-in-2 px-5 text-3xl opacity-60">
            Full Stack Web Developer
          </h2>
          <div
            id="links"
            className="fade-in-3 pr-5 text-slate-900 opacity-60 dark:text-cyan-200 md:ml-5"
          >
            <a
              id="githubLink"
              href="https://github.com/Dillonpw/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Github"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faGithub}
              />
            </a>
            <a
              id="linkedinLnk"
              href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Linkedin"
            >
              <FontAwesomeIcon
                className=" h-8 w-8 hover:scale-110"
                icon={faLinkedinIn}
              />
            </a>
          </div>
          <Dogs />
        </div>
        <div className="fade-in-4 mt-30 flex w-full flex-col items-center px-6 lg:w-1/2">
          <p className="mb-5 mt-20 rounded-xl  p-6 pt-10 text-xl text-slate-900 dark:text-cyan-200">
            In 2019, after completing my college education, I took on a position
            as a 911 emergency dispatcher. While this role was challenging, it
            also afforded me the time to explore my budding interest in web
            development. Relying entirely on free resources, including
            freeCodeCamp, The Odin Project, and official documentation, to hone
            my skills while working a full time job. Recently, my focus has
            shifted towards contributing to open source learning projects and
            their documentation, and developing personal projects, as well as
            providing web development services for some really great people. If
            you visit my Github you may notice I&apos;ve been diving into Mobile
            development and having a blast!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;

import NavBar from "./nav.jsx";
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
        className="mx-8 mt-10 flex flex-col items-center justify-center lg:flex-row"
      >
        <div className="flex w-full flex-col gap-4 px-6 md:w-1/2">
          <h1 id="home" className=" px-5 py-10 text-5xl">
            Dillon Walsh
          </h1>
          <h2 className="fade-in-2 px-5 pb-2 text-3xl opacity-60">
            Full Stack Web Developer
          </h2>
          <h3 className="fade-in-2 px-5 pb-2 text-xl opacity-60">
            If I&apos;m not online I&apos;m probably walking my dogs
          </h3>

          <div
            id="links"
            className="fade-in-3 ml-1 px-5 pt-4 text-slate-900 opacity-60 dark:text-cyan-100"
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
        </div>

        <div className="fade-in-4 mt-30 flex w-full flex-col items-center px-6 md:w-1/2">
          <p className="mb-5 mt-20 px-6 pt-10 text-xl opacity-60">
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

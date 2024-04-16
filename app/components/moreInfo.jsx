import Contact from "./Contact";
import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col bg-slate-200 pt-10 dark:bg-emerald-800"
    >
      <p className="m-4 text-center text-4xl font-bold">There&apos;s More!</p>
      <p className="mx-8 text-left text-xl">
        I have several more projects in the works that I am happy to show and
        discuss including a mobile app version of the Dispatcher cheat sheet and a
        small business&apos;s website still in the planning phase. If
        you&apos;re interested feel free to send me a message about the private
        projects, or just visit my profile on
        <a
          href="https://github.com/Dillonpw"
          target="_blank"
          rel="noreferrer"
          className=" ml-2 underline"
        >
          Github
        </a>{" "}
        for everything else!
      </p>
      <Contact />
    </motion.div>
  );
};

export default MoreInfo;

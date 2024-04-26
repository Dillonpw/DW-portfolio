import Contact from "./Contact";
import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col bg-slate-200 pt-10 dark:bg-emerald-600 dark:text-cyan-50"
    >
      <p className="m-4 text-center text-4xl font-bold">There&apos;s More!</p>
      <p className="mx-8 text-left text-xl">
        I&apos;m always looking for new jobs and projects to take on, feel free to reach
        out with your questions or ideas and I&apos;ll get back to you as soon as
        I can!
      </p>
      <Contact />
    </motion.div>
  );
};

export default MoreInfo;

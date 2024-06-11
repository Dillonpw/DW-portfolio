import Contact from "./Contact";
import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col  dark:text-cyan-50"
    >
      <p className="m-4 text-center text-4xl font-bold">There&apos;s More!</p>
      <p className="mx-8 text-center text-xl">
        I&apos;m always looking for new jobs and projects to take on, feel free
        to reach out with your questions or ideas and I&apos;ll get back to you
        as soon as I can!
      </p>
      <Contact />
    </motion.div>
  );
};

export default MoreInfo;

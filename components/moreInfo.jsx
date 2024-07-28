import Contact from "./Contact";
import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-40 flex flex-col  dark:text-gray-200"
    >
      <p className="m-4 text-center text-2xl font-bold lg:text-5xl">
        There&apos;s More!
      </p>
      <p className="text-md mx-12 text-left opacity-60 md:text-lg lg:mx-60 lg:text-center">
        I&apos;m always looking for new jobs and projects to take on, feel free
        to reach out with your questions or ideas and I&apos;ll get back to you
        as soon as I can!
      </p>
      <Contact />
    </motion.div>
  );
};

export default MoreInfo;

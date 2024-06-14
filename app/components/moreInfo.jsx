import Contact from "./Contact";
import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col  dark:text-cyan-200"
    >
      <p className="m-4 text-center text-5xl font-bold">There&apos;s More!</p>
      <p className="mx-8 text-center text-xl lg:mx-16">
        I&apos;m always looking for new jobs and projects to take on, feel free
        to reach out with your questions or ideas and I&apos;ll get back to you
        as soon as I can!
      </p>
      <Contact />
    </motion.div>
  );
};

export default MoreInfo;

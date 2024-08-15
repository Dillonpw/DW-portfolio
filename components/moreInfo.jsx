import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-10 flex flex-col gap-2 dark:text-gray-200 xl:text-xl"
    >
      <p className="text-md mx-12 text-center opacity-60 sm:text-left lg:mx-60 lg:text-center">
        I&apos;m always looking for projects and opportunities to take on, feel
        free to reach out with your questions or ideas and I&apos;ll get back to
        you as soon as I can!
      </p>
      <p className="text-md mx-12 text-center opacity-60 sm:text-left lg:text-center">
        You can reach me at Dillonpwalsh10@gmail.com
      </p>
    </motion.div>
  );
};

export default MoreInfo;

import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col mt-10 gap-2 dark:text-gray-200 xl:text-xl"
    >
      <h1 className="text-center text-xl font-bold">Want to Connect?</h1>
      <p className="text-md mx-12 text-center opacity-60 lg:mx-60 ">
        I&apos;m always looking for projects and opportunities to take on, feel
        free to reach out with your questions or ideas and I&apos;ll get back to
        you as soon as I can!
      </p>
      <p className="text-md mx-12 px-2 text-center">Dillonpwalsh10@gmail.com</p>
    </motion.div>
  );
};

export default MoreInfo;

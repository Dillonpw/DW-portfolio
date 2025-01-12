import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.75 }}
      className="mx-10 mt-20 flex flex-col gap-2 dark:text-gray-200 lg:mx-[12rem] xl:mx-[20rem] xl:text-xl"
    >
      <h1 className="text-center text-xl font-bold">Want to Connect?</h1>
      <p className="text-md mx-12 text-center opacity-60">
        I&apos;m always looking for projects and opportunities to take on, feel
        free to reach out with your questions or ideas and I&apos;ll get back to
        you as soon as I can!
      </p>
      <p className="text-md text-center">Dillonpwalsh10@gmail.com</p>
    </motion.section>
  );
};

export default MoreInfo;

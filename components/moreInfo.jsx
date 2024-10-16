import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col mt-10 mx-10 gap-2 dark:text-gray-200 xl:text-xl lg:mx-[12rem] xl:mx-[20rem]"
    >
      <h1 className="text-center text-xl font-bold">Want to Connect?</h1>
      <p className="text-md mx-12 text-center opacity-60 ">
        I&apos;m always looking for projects and opportunities to take on, feel
        free to reach out with your questions or ideas and I&apos;ll get back to
        you as soon as I can!
      </p>
      <div className="flex justify-center flex-col">
      <h2 className="text-xl text-center font-bold mt-10">Reach Me At:</h2>
      <p className="text-md text-center">Dillonpwalsh10@gmail.com</p>
      </div>
    </motion.div>
  );
};

export default MoreInfo;

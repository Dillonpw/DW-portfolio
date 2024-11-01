"use client";

import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        transition={{ duration: 3, delay: 1 }}
        animate={{ opacity: 1 }}
        className="mt-36 flex flex-col items-center justify-center pb-6 text-center text-sm xl:px-80"
      >
        <p className="mx-6">
          Built using <b className="text-emerald-500">React</b>,{" "}
          <b className="text-emerald-500">Next.JS</b> and{" "}
          <b className="text-emerald-500">Tailwind</b>, with some elements
          designed in <b className="text-emerald-500">Figma</b>
          <br />
          &copy;2024 All Rights Reserved
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;

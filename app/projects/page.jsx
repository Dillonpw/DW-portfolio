"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Suspense } from "react";
import images from "../components/Images";
import Skeleton from "../components/Skeleton";
import ThemeToggle from "../components/theme";
import logo from "/public/logo.svg";
const Projects = () => {
  return (
    <motion.main
      className=""
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
        <Link href="/" id="logo" className="justify-start px-2 hover:scale-105">
          <Image className="" src={logo} alt="Logo" />
        </Link>
        <ThemeToggle />
      </div>
      <h3 className="mt-20 text-center font-mono text-5xl font-bold">
        Selected Projects
      </h3>
      <p className="m-6 text-center text-lg opacity-60">
        Click on the images for more information about each listed project
      </p>
      <div className="m-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {images.map((image) => (
          <div key={image.id} className="mb-4 flex flex-col items-center ">
            <Link
              description="More info about projects"
              className="hover-scale block "
              href={`/${image.id}`}
            >
              <Suspense fallback={<Skeleton />}>
                <Image
                  className="rounded-xl border-2 border-black dark:border-white"
                  src={image.src}
                  alt={image.title}
                  width={565}
                  height={311}
                />
              </Suspense>
            </Link>
            <div className="mt-8 flex flex-wrap items-center justify-center ">
              {image.tags.map((tag) => (
                <span
                  key={tag}
                  className="m-2 cursor-default rounded-2xl border-2  bg-neutral-950 px-3 py-2 text-gray-200 dark:bg-gray-200 dark:text-neutral-950"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-4 text-lg opacity-60">
              <p>{image.about}</p>
            </div>{" "}
          </div>
        ))}
      </div>
    </motion.main>
  );
};
export default Projects;

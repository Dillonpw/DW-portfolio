import Link from "next/link";
import Image from "next/image";
import images from "./Images";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Skeleton from "./Skeleton";
const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y:-30 }}
      className="mt-20 flex flex-col dark:text-cyan-50"
    >
      <h3 className="mt-20 text-center font-mono text-4xl font-bold">
        Selected Projects
      </h3>
      <p className=" mb-6 text-center text-lg opacity-50">
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
                  className="m-2 cursor-default rounded-2xl border-2 border-cyan-200 bg-slate-800 px-3 py-2 text-cyan-200 dark:bg-cyan-200 dark:text-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-4 text-lg opacity-50">
              <p>{image.about}</p>
            </div>{" "}
          </div>
        ))}
      </div>
    </motion.section>
  );
};
export default Projects;

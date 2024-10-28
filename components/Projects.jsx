import Link from "next/link";
import Image from "next/image";
import images from "./Images";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mt-32">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        className="m-6 text-center text-lg opacity-60"
      >
        Click on the images for more information about each listed project
      </motion.p>
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: -30 }}
        className="mt-20 flex flex-col"
      >
        <div className="m-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {images.slice(0, 5).map((image) => (
            <div key={image.id} className="mb-4 flex flex-col items-center">
              <Link
                description="More info about projects"
                className="hover-scale block"
                href={`/${image.id}`}
              >
                <Image
                  className="rounded-xl border-2 border-black transition-all hover:scale-105 dark:border-white"
                  src={image.src}
                  alt={image.title}
                  width={565}
                  height={311}
                />
              </Link>
              <div className="mt-8 flex flex-wrap items-center justify-center">
                {image.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} // Alternate directions
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }} // delay for a staggered effect
                    className="m-2 cursor-default rounded-2xl border-2 bg-neutral-950 px-3 py-2 text-gray-200 dark:bg-gray-200 dark:text-neutral-950"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="p-4 text-lg opacity-60">
                <p>{image.about}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;

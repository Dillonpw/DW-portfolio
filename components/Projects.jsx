import Link from "next/link";
import Image from "next/image";
import images from "./Images";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: -30 }}
      className="mt-60 flex flex-col "
    >
      <h3 className="text-center text-4xl font-bold">Highlights</h3>
      <p className="m-6 text-center text-lg opacity-60">
        Click on the images for more information about each listed project
      </p>

      <div className="m-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {images.slice(0, 3).map((image) => (
          <div key={image.id} className="mb-4 flex flex-col items-center">
            <Link
              description="More info about projects"
              className="hover-scale block"
              href={`/${image.id}`}
            >
              <Image
                className="rounded-xl border-2 border-black dark:border-white"
                src={image.src}
                alt={image.title}
                width={565}
                height={311}
              />
            </Link>
            <div className="mt-8 flex flex-wrap items-center justify-center">
              {image.tags.map((tag) => (
                <span
                  key={tag}
                  className="m-2 cursor-default rounded-2xl border-2 bg-neutral-950 px-3 py-2 text-gray-200 dark:bg-gray-200 dark:text-neutral-950"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-4 text-lg opacity-60">
              <p>{image.about}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-center">
        <Button variant="default" asChild>
          <Link href="/projects">More Projects</Link>
        </Button>
      </div>
    </motion.section>
  );
};

export default Projects;

'use client'

import Link from "next/link";
import Image from "next/image";
import images from "./Images";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="mt-8 md:mt-32 px-4 sm:px-6 lg:px-8">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        className="mb-6 text-center text-sm sm:text-base md:text-lg opacity-60"
      >
        Click on the images for more information about each listed project
      </motion.p>
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: -30 }}
        className="mt-8 md:mt-20 flex flex-col"
      >
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {images.slice(0, 5).map((image) => (
            <div key={image.id} className="mb-6 flex flex-col items-center">
              <Link
                aria-label={`More info about ${image.title}`}
                className="block w-full overflow-hidden rounded-xl border-2 border-black transition-all dark:border-white"
                href={`/${image.id}`}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    className="rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-60"
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </Link>
              <div className="mt-4 md:mt-8 flex flex-wrap items-center justify-center">
                {image.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="m-1 md:m-2 cursor-default rounded-2xl border-2 bg-neutral-950 px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm text-gray-200 dark:bg-gray-200 dark:text-neutral-950"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="p-2 md:p-4 text-sm md:text-base opacity-60">
                <p>{image.about}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
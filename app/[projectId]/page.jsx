'use client';

import images from "../../components/Images";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Nav from "../../components/nav";
import Image from "next/image";
import { useParams } from "next/navigation";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectPage = () => {
  const { projectId } = useParams();

  const renderContent = () => {
    const project = images.find((image) => image.id === projectId);

    if (!project) {
      return <div>Oops! There&apos;s nothing here...</div>;
    }

    return (
      <main>
        <Nav>
          <h2 className="text-center font-mono text-xl lg:text-2xl">
            {project.title}
          </h2>
        </Nav>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: -30 }}
          className="flex flex-col items-center justify-center px-4 pt-40 xl:px-20"
        >
          {project.video && (
            <Suspense
              fallback={
                <div className="w-100 h-auto animate-pulse bg-slate-700"></div>
              }
            >
              <video
                src="https://utfs.io/f/2x9MeROBnW8izghZmAdbdqj6eSUgmlVLipk0w4HItRXDYyGJ"
                className="h-100 w-auto items-center justify-center rounded-lg border-2 border-black bg-slate-700 dark:border-white"
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
              />
            </Suspense>
          )}
          <Suspense
            fallback={
              <div className="w-100 h-auto animate-pulse bg-slate-700"></div>
            }
          >
            <Image
              className="w-100 m-2 h-auto items-center justify-center rounded-lg border-2 border-black bg-slate-700 dark:border-white"
              src={project.src}
              alt={project.title}
              width={1000}
              height={300}
            />
          </Suspense>

          {project.src2 && (
            <Suspense
              fallback={
                <div className="w-100 h-auto animate-pulse bg-slate-700"></div>
              }
            >
              <Image
                className="w-100 m-2 h-auto items-center justify-center rounded-lg border-2 border-black bg-slate-700 dark:border-white"
                src={project.src2}
                alt={project.title}
                width={1000}
                height={300}
              />
            </Suspense>
          )}
          {project.mobileImg && (
            <Suspense
              fallback={
                <div className="w-100 h-auto animate-pulse bg-slate-700"></div>
              }
            >
              <Image
                className="h-100 w-auto items-center justify-center rounded-lg border-2 border-black bg-slate-700 dark:border-white"
                src={project.mobileImg}
                alt={project.title}
                width={375}
                height={500}
              />
            </Suspense>
          )}
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center">
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="m-2 cursor-default rounded-2xl border-2 bg-neutral-950 px-3 py-2 text-gray-200 dark:bg-gray-200 dark:text-neutral-950"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="mt-4 flex justify-center pb-6">
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
            id={`github link ${projectId}`}
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            aria-label="redirect to Github"
          >
            <FontAwesomeIcon
              className="mx-4 h-8 w-8 hover:scale-110"
              icon={faGithub}
            />
          </motion.a>

          {project.livePreviewLink && (
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              animate={{ x: 0 }}
              className="mx-4 h-8 w-8 hover:scale-110"
              id={`live preview link ${projectId}`}
              href={project.livePreviewLink}
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to live preview"
            >
              <FontAwesomeIcon
                className="h-8 w-8 hover:scale-110"
                icon={faUpRightFromSquare}
              />
            </motion.a>
          )}
        </div>
        <section className="ml-4 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
          >
            <h3 className="mt-8 text-center text-xl font-bold">
              About This Project
            </h3>
            <p className="max-w-100 xs:px-8 text-left text-lg opacity-60 sm:px-12 md:px-40">
              {project.about}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
          >
            <h3 className="mt-8 text-center text-xl font-bold">Challenges</h3>
            <p className="max-w-100 xs:px-8 mb-10 text-left text-lg opacity-60 sm:px-12 md:px-40">
              {project.challenge}
            </p>
          </motion.div>
        </section>
      </main>
    );
  };

  return <div>{renderContent()}</div>;
};

export default ProjectPage;
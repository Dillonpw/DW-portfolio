"use client";
import images from "../../components/Images";
import { useEffect } from "react";
import Nav from "../../components/nav";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectPage = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const renderContent = () => {
    const project = images.find((image) => image.id === projectId);

    if (!project) {
      return <div>Oops! There&apos;s nothing here...</div>;
    }

    return (
      <motion.main
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <Nav />
        <div className="mt-40 flex flex-col items-center justify-center px-4 xl:flex-row">
          <h2 className="m-6 text-center text-2xl font-bold">
            {project.title}
          </h2>

          <Image
            className="w-100 m-2 h-auto items-center justify-center rounded-2xl border-2 border-black bg-slate-700 dark:border-white"
            src={project.src}
            alt={project.title}
            width={1000}
            height={300}
          />
          {project.src2 && (
            <Image
              className="w-100 m-2 h-auto items-center justify-center rounded-2xl border-2 border-black bg-slate-700 dark:border-white"
              src={project.src2}
              alt={project.title}
              width={1000}
              height={300}
            />
          )}
          {project.mobileImg && (
            <Image
              className="h-100 w-auto items-center justify-center rounded-2xl border-2 border-black bg-slate-700 dark:border-white"
              src={project.mobileImg}
              alt={project.title}
              width={300}
              height={500}
            />
          )}
        </div>

        <div className="mt-4 flex justify-center pb-6">
          <a
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
          </a>

          {project.livePreviewLink && (
            <a
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
            </a>
          )}
        </div>
        <section className="ml-4 flex flex-col items-center justify-center">
          <h3 className="mt-8 text-xl font-bold">About This Project</h3>
          <p className="max-w-100 md:px-40 xs:px-8 sm:px-12 text-left text-lg opacity-60">
            {project.about}
          </p>
          <h3 className="mt-8 text-xl font-bold">Challenges</h3>
          <p className="max-w-100 mb-10 xs:px-8 sm:px-12 md:px-40 text-left text-lg opacity-60">
            {project.challenge}
          </p>
        </section>
      </motion.main>
    );
  };

  return <div>{renderContent()}</div>;
};

export default ProjectPage;

"use client";
import images from "../../components/Images";
import { useEffect } from "react";
import Nav from "../../components/nav";
import Image from "next/image";
import { useParams } from "next/navigation";
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
      <main>
        <Nav>
          <h2 className="text-center font-mono text-xl lg:text-2xl">
            {project.title}
          </h2>
        </Nav>
        <div className="flex flex-col items-center justify-center px-4 pt-40 xl:flex-row">
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
          <p className="max-w-100 xs:px-8 text-left text-lg opacity-60 sm:px-12 md:px-40">
            {project.about}
          </p>
          <h3 className="mt-8 text-xl font-bold">Challenges</h3>
          <p className="max-w-100 xs:px-8 mb-10 text-left text-lg opacity-60 sm:px-12 md:px-40">
            {project.challenge}
          </p>
        </section>
      </main>
    );
  };

  return <div>{renderContent()}</div>;
};

export default ProjectPage;

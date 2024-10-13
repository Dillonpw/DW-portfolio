"use client";
import Nav from "../../components/nav";
import Projects from "../../components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
const ProjectsPage = () => {
  return (
    <>
      <Nav>
        <h1 className="text-center font-mono text-xl lg:text-2xl">
          Recent Work
        </h1>
      </Nav>
      <Projects />
      <div className="flex items-center justify-center gap-2">
        <Button variant="link">
          <a target="_blank" href="https://github.com/Dillonpw/">
            More Projects{" "}
          </a>
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <a
                id="githubLink"
                href="https://github.com/Dillonpw/"
                target="_blank"
                rel="noreferrer"
                aria-label="redirect to Github"
              >
                <FontAwesomeIcon
                  className="h-6 w-6 hover:scale-110"
                  icon={faGithub}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
      </div>
    </>
  );
};
export default ProjectsPage;

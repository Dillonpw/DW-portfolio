"use client";
import NavBar from "../../components/nav";
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
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <>
      <NavBar>
        <p className="text-center font-mono text-xl lg:text-2xl">Recent Work</p>
      </NavBar>
      <Projects />
      <div className="flex items-center justify-center mt-8 hover:scale-110">
        <Button variant="ghost" className="flex items-center space-x-2"> {/* Adjusted flex container and spacing */}
          <Link target="_blank" href="https://github.com/Dillonpw/">
            More Projects
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
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
          </TooltipProvider>
        </Button>
      </div>
    </>
  );
};

export default ProjectsPage;

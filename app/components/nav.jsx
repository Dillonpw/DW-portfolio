import ThemeToggle from "./theme.jsx";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const scrollAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTech = (e) => {
    e.preventDefault();
    const techElement = document.getElementById("tech");
    if (techElement) {
      const techPos = techElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: techPos,
        behavior: "smooth",
      });
    }
  };

  const scrollProjects = (e) => {
    e.preventDefault();
    const projectElement = document.getElementById("projects");
    if (projectElement) {
      const projectPos =
        projectElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: projectPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-neutral-50 p-4 shadow-md dark:border-b dark:border-neutral-700 dark:bg-neutral-950">
      <div className="flex flex-row items-center px-2">
        <Link href="/" id="logo">
          <Image
            className="hover:scale-105"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="relative ml-2 flex items-center">
          <div className="group relative">
            <div className="h-2 w-2 animate-ping cursor-pointer rounded-full bg-emerald-500 p-2"></div>
            <div className="absolute bottom-full mb-2 hidden w-max rounded-lg bg-black px-2 py-1 text-sm text-gray-200 group-hover:block dark:bg-gray-200 dark:text-neutral-950">
              I&apos;m online!
            </div>
          </div>
        </div>
      </div>

      <div className="text-md justify-center px-2 md:text-xl lg:text-2xl">
        <button
          className="m-2 cursor-pointer hover:scale-110"
          onClick={scrollAbout}
        >
          About
        </button>
        <button
          className="m-2 cursor-pointer hover:scale-110"
          onClick={scrollProjects}
        >
          Projects
        </button>
        <button
          className="m-2 cursor-pointer hover:scale-110"
          onClick={scrollTech}
        >
          Tech
        </button>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;

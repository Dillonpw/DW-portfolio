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
    <nav className="fixed top-0 z-50 flex w-full flex-row items-center justify-between rounded-b-md bg-emerald-700 p-4 text-white dark:bg-slate-900">
      <Link href="/" id="logo" className="justify-start px-2">
        <Image
          className="hover:scale-105"
          src={logo}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <div className="justify-center px-2 text-lg md:text-xl lg:text-2xl">
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

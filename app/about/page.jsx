import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme";
import logo from "/public/logo.svg";
const About = () => {
  return (
    <div>
              <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
        <Link href="/" id="logo" className="justify-start px-2 hover:scale-105">
          <Image className="" src={logo} alt="Logo" />
        </Link>
        <ThemeToggle />
      </div>
      <p className="mb-5 rounded-xl px-20 pt-5 text-center text-xl opacity-60 md:text-left lg:text-2xl">
        In 2019, after completing my college education, I took on a position as
        a 911 emergency dispatcher. While this role was challenging, it also
        afforded me the time to explore the many facets of web development. Now
        as a professional web developer I provide web development services for
        some really great people doing really great things and contribute to my
        favorite open source projects like{" "}
        <a
          href="https://astro.build/"
          target="_blank"
          className="cursor-pointer font-bold text-black underline dark:text-gray-50"
        >
          Astro
        </a>{" "}
        and{" "}
        <a
          href="https://www.theodinproject.com"
          target="_blank"
          className="cursor-pointer font-bold text-black underline dark:text-gray-50"
        >
          The Odin Project
        </a>
      </p>
    </div>
  );
};
export default About;

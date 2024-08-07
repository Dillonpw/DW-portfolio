import ThemeToggle from "./theme.jsx";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0  z-50 flex w-[100vw] flex-row items-center justify-between bg-transparent p-6 shadow-md backdrop-blur-sm dark:border-b dark:border-neutral-700 ">
      <div className="flex flex-row items-center ">
        <Link href="/" id="logo">
          <Image
            className="hover:scale-105"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            loading="eager"
          />
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;

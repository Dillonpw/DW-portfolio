import ThemeToggle from "./theme.jsx";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const NavBar = ({ children }) => {
  return (
    <nav className="fixed mt-5 left-0 border-t right-0 top-0 z-50 mx-auto flex w-[90vw] max-w-5xl items-center justify-between rounded-xl bg-transparent p-6 px-4 shadow-md backdrop-blur-sm dark:border-b dark:border-neutral-700">
      <div className="flex flex-row items-center">
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
      <div className="flex items-center">{children}</div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;

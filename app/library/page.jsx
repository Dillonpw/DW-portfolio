"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.svg";
import ThemeToggle from "../components/theme";

const Library = () => {
  return (
    <main>
      <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
        <Link href="/" id="logo" className="justify-start px-2">
          <Image
            className="hover:scale-105"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <ThemeToggle />
      </div>
      <p>component library test</p>

    </main>
  );
};
export default Library;

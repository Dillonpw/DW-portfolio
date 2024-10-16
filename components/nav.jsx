"use client";
import ThemeToggle from "./theme.jsx";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky left-0 top-0 z-50 flex justify-center w-full transition-all ovverlfo-x-auto">
      <header
        className={`flex mx-4 items-center px-6 justify-between bg-transparent backdrop-blur-xl transition-all ${
          isScrolled
            ? "mt-4 h-16 w-[90%] rounded-full shadow-md"
            : "h-16 w-full"
        }`}
      >
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

        <div className="flex items-center">{children}</div>
        <ThemeToggle />
      </header>
    </nav>
  );
};

export default NavBar;

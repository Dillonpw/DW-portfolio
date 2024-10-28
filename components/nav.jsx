"use client";
import { motion } from "framer-motion";
import ThemeToggle from "./theme.jsx";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    <motion.nav
      initial={{ opacity: 0, y: -5 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 0 }}
      className="sticky left-0 top-0 z-50 flex w-full justify-center transition-all"
    >
      <header
        className={`mx-4 flex items-center justify-between bg-transparent px-6 backdrop-blur-xl transition-all ${
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
    </motion.nav>
  );
};

export default NavBar;

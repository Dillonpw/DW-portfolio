"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="mx-2 h-8 w-8 animate-pulse rounded-lg bg-slate-700 p-1"></div>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="mx-4 h-8 w-8 rounded p-1 text-3xl"
        onClick={() => setTheme("light")}
      >
        <FontAwesomeIcon icon={faSun} />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="mx-4 h-8 w-8 rounded p-1 text-3xl"
        onClick={() => setTheme("dark")}
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
    );
  }
};

export default ThemeToggle;

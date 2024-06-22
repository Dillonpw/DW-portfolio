import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  };

  return (
    <div className="mx-2">
      <button
        className="mt-2 flex h-10 w-10 items-center justify-center text-4xl font-bold transition-transform duration-300 ease-in-out"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        <FontAwesomeIcon
          className="theme-icon"
          icon={darkMode ? faSun : faMoon}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;

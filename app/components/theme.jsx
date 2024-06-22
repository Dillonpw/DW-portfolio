import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  return (
    <div className="mx-2">
      <button
        className="mt-2 flex h-10 w-10 items-center justify-center text-2xl font-bold transition-transform duration-300 ease-in-out"
        onClick={toggleTheme}
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

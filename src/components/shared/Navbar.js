import logo3 from "../../assets/logo3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center text-center h-[8vh] text-white dark:text-gray-200 bg-blue-900 dark:bg-purple-800 place-content-around">
      <img
        className="px-6 min-w-[150px] max-w-[180px] overflow-hidden"
        src={logo3}
        alt="logo"
      />
      <div className="px-6 w-[700px] max-w-[90vw] flex justify-end gap-6 items-center">
        <div>
          <Navigation />
          <MobileNavigation />
        </div>
        <button onClick={handleThemeChange}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faToggleOff} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faToggleOn} size="2xl" />
          )}
        </button>
      </div>
    </nav>
  );
}

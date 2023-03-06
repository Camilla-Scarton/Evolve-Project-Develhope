import logo3 from "../../assets/logo3.png";
import logo3Dark from "../../assets/logo3Dark.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from 'react';

export function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefer-color-scheme: dark)').matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <nav className="flex items-center text-center h-[6vh] text-white dark:text-gray-200 bg-blue-900 dark:bg-purple-800 place-content-around">
      <img className="px-4 h-[90px]" src={theme === "light" ? logo3 : logo3Dark} alt="logo"/>
      <div className="flex gap-7 items-center">
        <Link to="/"><h6>Home</h6></Link>
        <>|</>
        <Link to="/map"><h6>Nearest gyms</h6></Link>
        <>|</>
        <Link to="/bmi"><h6>Daily calories</h6></Link>
        <>|</>
        <Link to="/design"><h6>Design</h6></Link>
        <>|</>
        <button onClick={handleThemeChange}>
          {theme === "light" ? <FontAwesomeIcon icon={faToggleOff} size="2x" /> : <FontAwesomeIcon icon={faToggleOn} size="2x" />}
        </button>
      </div>
    </nav>
  );
}

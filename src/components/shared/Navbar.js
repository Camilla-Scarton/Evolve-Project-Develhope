import logo3 from "../../assets/logo3.png";
import logo3Dark from "../../assets/logo3Dark.png";
import { Link } from "react-router-dom";

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
    <nav className="flex items-center text-center sticky top-0 h-20 text-white bg-blue-900 dark:bg-purple-800 place-content-around">
      <img className="px-4 h-[90px]" src={theme === "light" ? logo3 : logo3Dark} alt="logo"/>
      <div className="flex gap-10 items-center">
        <Link to="/">Home</Link>
        <>|</>
        <Link to="/map">Nearest gyms</Link>
        <>|</>
        <Link to="/bmi">Daily calories</Link>
        <>|</>
        <Link to="/design">Design</Link>
        <>|</>
        <button onClick={handleThemeChange}>
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

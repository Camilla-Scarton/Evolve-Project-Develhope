import logo3 from "../../assets/logo3.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex items-center text-center sticky top-0 h-20 text-white bg-blue-900 dark:bg-purple-800 place-content-around">
      <img className="px-4 h-[90px]" src={logo3} alt="logo"/>
      <div className="flex gap-10 items-center">
        <Link to="/">Home</Link>
        <>|</>
        <Link to="/map">Nearest gyms</Link>
        <>|</>
        <Link to="/bmi">Daily calories</Link>
        <>|</>
        <Link to="/design">Design</Link>
      </div>
    </nav>
  );
}

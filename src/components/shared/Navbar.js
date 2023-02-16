import logo3 from "../../assets/logo3.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="gap-5 z-10 flex items-center text-center sticky top-0 h-20 text-white bg-blue-900 dark:bg-purple-800">
      <img className="px-4 h-[90px]" src={logo3} alt="logo"/>
      <Link to="/">Home</Link>
      <>|</>
      <Link to="/map">Nearest gyms</Link>
      <>|</>
      <Link to="/bmi">Daily calories</Link>
      <>|</>
      <Link to="/design">Design</Link>
    </nav>
  );
}

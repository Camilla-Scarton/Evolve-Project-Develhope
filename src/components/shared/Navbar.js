import logo from "../../assets/logo.png";
import logo3 from "../../assets/logo3.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="z-10 flex sticky top-0 h-[60px] text-white bg-blue-900 dark:bg-purple-800">
      <Link to="/map">Map</Link>
      <img className="w-[60px] h-[60px]" src={logo} alt="LOGO" />
      <div className="flex w-full items-center justify-center">
        <img className="h-[90px]" src={logo3} alt="logo"/>
      </div>
    </div>
  );
}

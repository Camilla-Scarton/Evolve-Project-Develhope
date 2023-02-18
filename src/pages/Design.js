// Icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Logo
import logo from "../assets/logo.png";
import logoDark from "../assets/logoDark.png";
import logo3 from "../assets/logo3.png";
import logo3Dark from "../assets/logo3Dark.png";

// Components
import { FirstButton } from "../components/FirstButton";
import { SecondButton } from "../components/SecondButton";
import { ThirdButton } from "../components/ThirdButton";
import { Card } from "../components/Card";
import BodyModelCanvas from "../components/BodyModelCanvas";

import "../style/button.css";

export function Design() {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-between">
        <div className="flex-col">
          <FirstButton name="First Button"/>
          <SecondButton name="Second Button"/>
          <ThirdButton name="Third Button"/>
        </div>
        <div className="flex-col items-center gap-2 text-white w-[450px] h-full p-5 m-5  from-blue-300 via-blue-900 to-purple-400 rounded-md bg-gradient-to-tr dark:from-purple-300  dark:via-purple-700 dark:to-blue-400">
          <h3 className="flex text-xl items-center justify-center">LOGO:</h3>
          <div className="flex gap-3 text-xl items-center justify-around  m-5">
            <img className="w-[100px]" src={logo} alt="logo" />{" "}
            <img className="w-[100px]" src={logoDark} alt="logo-dark" />
            <img className="w-[100px]" src={logo3} alt="logo" />{" "}
            <img className="w-[100px]" src={logo3Dark} alt="logo-dark" />
          </div>
          <h3 className="flex text-xl items-center justify-center">ICONE:</h3>
          <div className="flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faBars} size="2x" />
            <FontAwesomeIcon icon={faChevronLeft} size="2x" className="m-5" />
            <FontAwesomeIcon icon={faChevronRight} size="2x" className="m-5" />
            <FontAwesomeIcon icon={faXmark} size="2x" className="m-5" />
            <FontAwesomeIcon icon={faGithub} size="2x" className="m-5" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="m-5" />
          </div>
        </div>
        <div className="drop-shadow-xl flex flex-col items-center gap-2 text-white w-[480px] h-full p-5 m-5 from-blue-300 via-blue-900 to-purple-400 rounded-md bg-gradient-to-tr dark:from-purple-300 dark:via-purple-700 dark:to-blue-400">
          <h1>Questo è un h1</h1>
          <h2>Questo è un h2</h2>
          <h3>Questo è un h3</h3>
          <h4>Questo è un h4</h4>
          <h5>Questo è un h5</h5>
          <h6>Questo è un h6</h6>
          <p>Questo è un paragrafo</p>
        </div>
        <Card />
      </div>
      <div className="min-h-[500px] h-1/1 w-1/1 mx-auto">
        <BodyModelCanvas />
      </div>
    </div>
  );
}

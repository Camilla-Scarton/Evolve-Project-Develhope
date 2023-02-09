import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bottom-0 w-full h-[45px] text-white bg-blue-900 dark:bg-purple-800 grid grid-cols-5 items-center text-center">
      <div>
        <span>Chiara Arrivas</span>
        <a href="https://github.com/ChiaraArrivas">
          <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
        </a>
        <a href="https://www.linkedin.com/in/chiara-arrivas-30661225a/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
        </a>
      </div>
      <div>
        <span>Marco Incardona</span>
        <a href="https://github.com/MarcoIncardona">
          <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
        </a>
        <a href="https://www.linkedin.com/in/marco-incardona-09945425a/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
        </a>
      </div>

      <div>
        <span>Simone Mazza</span>
        <a href="https://github.com/smazza98">
          <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
        </a>
        <a href="https://www.linkedin.com/in/simone-mazza-1998-fe/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
        </a>
      </div>

      <div>
        <span>Camilla Scarton</span>
        <a href="https://github.com/Camilla-Scarton">
          <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
        </a>
        <a href="https://www.linkedin.com/in/camilla-scarton/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
        </a>
      </div>

      <div>
        <span>Salvatore Vella</span>
        <a href="https://github.com/SalvatoreVella">
          <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
        </a>
        <a href="https://www.linkedin.com/in/salvatore-vella/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
        </a>
      </div>
    </footer>
  );
}

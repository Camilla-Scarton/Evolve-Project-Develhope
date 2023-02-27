import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bottom-0 w-full h-20 text-white dark:text-gray-200 bg-blue-900 dark:bg-purple-800 grid grid-cols-5 items-center text-center">
      <div>
        <h6>Chiara Arrivas</h6>
        <div>
          <a href="https://github.com/ChiaraArrivas">
            <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/chiara-arrivas-30661225a/">
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
          </a>
        </div>
      </div>
      <div>
        
        <h6>Marco Incardona</h6>
        <div>
          <a href="https://github.com/MarcoIncardona">
            <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/marco-incardona-09945425a/">
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
          </a>
        </div>
      </div>

      <div>
        <h6>Simone Mazza</h6>
        <div>
          <a href="https://github.com/smazza98">
            <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/simone-mazza-1998-fe/">
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
          </a>
        </div>
      </div>

      <div>
        <h6>Camilla Scarton</h6>
        <div>
          <a href="https://github.com/Camilla-Scarton">
            <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/camilla-scarton/">
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
          </a>
        </div>
      </div>

      <div>
        <h6>Salvatore Vella</h6>
        <div>
          <a href="https://github.com/SalvatoreVella">
            <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/salvatore-vella/">
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

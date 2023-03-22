import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="p-2 w-full min-h-[9vh] text-white dark:text-gray-200 bg-blue-900 dark:bg-purple-800 grid grid-cols-5 items-center text-center">
      <div className="m-1">
        <h5 className="mb-1">Chiara Arrivas</h5>
        <div className="flex flex-row justify-center gap-2 sm:gap-6 flex-wrap">
          <a href="https://github.com/ChiaraArrivas">
            <FontAwesomeIcon icon={faGithub} size="lg sm:xl" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/chiara-arrivas-30661225a/">
            <FontAwesomeIcon icon={faLinkedin} size="lg sm:xl" className="mx-1" />
          </a>
        </div>
      </div>

      <div className="m-1">
        <h5 className="mb-1">Marco Incardona</h5>
        <div className="flex flex-row justify-center gap-2 sm:gap-6 flex-wrap">
          <a href="https://github.com/MarcoIncardona">
            <FontAwesomeIcon icon={faGithub} size="lg sm:xl" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/marco-incardona-09945425a/">
            <FontAwesomeIcon icon={faLinkedin} size="lg sm:xl" className="mx-1" />
          </a>
        </div>
      </div>

      <div className="m-1">
        <h5 className="mb-1">Simone Mazza</h5>
        <div className="flex flex-row justify-center gap-2 sm:gap-6 flex-wrap">
          <a href="https://github.com/smazza98">
            <FontAwesomeIcon icon={faGithub} size="lg sm:xl" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/simone-mazza-1998-fe/">
            <FontAwesomeIcon icon={faLinkedin} size="lg sm:xl" className="mx-1" />
          </a>
        </div>
      </div>

      <div className="m-1">
        <h5 className="mb-1">Camilla Scarton</h5>
        <div className="flex flex-row justify-center gap-2 sm:gap-6 flex-wrap">
          <a href="https://github.com/Camilla-Scarton">
            <FontAwesomeIcon icon={faGithub} size="lg sm:xl" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/camilla-scarton/">
            <FontAwesomeIcon icon={faLinkedin} size="lg sm:xl" className="mx-1" />
          </a>
        </div>
      </div>

      <div className="m-1">
        <h5 className="mb-1">Salvatore Vella</h5>
        <div className="flex flex-row justify-center gap-2 sm:gap-6 flex-wrap">
          <a href="https://github.com/SalvatoreVella">
            <FontAwesomeIcon icon={faGithub} size="lg sm:xl" className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/salvatore-vella/">
            <FontAwesomeIcon icon={faLinkedin} size="lg sm:xl" className="mx-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

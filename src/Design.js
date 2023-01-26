import { Navbar } from "./navbar"
import { FirstButton } from "./FirstButton"
import { SecondButton } from "./SecondButton"
import { ThirdButton } from "./ThirdButton"
import { Footer } from "./Footer"
import { Card } from "./card"
import logo from "./assets/logo.png"
import logo3 from "./assets/logo3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'




import BodyModelCanvas from "./BodyModelCanvas"
import "./button.css"

export function Design() {
    return (
        <div>
            <Navbar />
            <div className="w-full flex flex-wrap justify-between">
                <div className="flex-col">
                    <button className="m-5 relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Search</span>
                    </button>
                    <button className="btn m-5"><span>Hover me!</span></button>
                    <FirstButton />
                    <SecondButton />
                    <ThirdButton />
                </div>
                <div className="drop-shadow-xl text-white w-[450px] h-full p-5 m-5 bg-blue-900 rounded-md bg-gradient-to-tr
 dark:from-purple-300 dark:to-blue-400">
                    <h3 className="flex text-xl items-center justify-center">LOGO:</h3>
                    <div className="flex text-xl items-center justify-center"> <img className="w-[150px]" src={logo} /> <img className="w-[150px]" src={logo3} /></div>
                    <h3 className="flex text-xl items-center justify-center">ICONE:</h3>
                    <div className="flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faBars} size="2x" />
                        <FontAwesomeIcon icon={faChevronLeft} size="2x" className="m-5"/>
                        <FontAwesomeIcon icon={faChevronRight} size="2x" className="m-5"/>
                        <FontAwesomeIcon icon={faXmark} size="2x" className="m-5"/>
                        <FontAwesomeIcon icon={faGithub} size="2x" className="m-5"/>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="m-5" />
                    </div>


                </div>
                <div className="drop-shadow-xl flex flex-col items-center gap-2 text-white w-[480px] h-full p-5 m-5 bg-blue-900 rounded-md bg-gradient-to-tr
 dark:from-purple-300 dark:to-blue-400">
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
            <Footer />
        </div>
    )
}
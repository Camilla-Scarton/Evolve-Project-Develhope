import { Navbar } from "./navbar"
import { FirstButton } from "./FirstButton"
import { SecondButton } from "./SecondButton"
import { ThirdButton } from "./ThirdButton"
import { Footer } from "./Footer"
import { Card } from "./card"
import logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <div className="drop-shadow-xl text-white w-[450px] h-full p-5 m-5 bg-blue-900 rounded-md">
                    <h3 className="flex text-xl items-center justify-center">LOGO:</h3>
                    <div className="flex text-xl items-center justify-center"> <img className="w-[150px]" src={logo} /></div>
                    <h3 className="flex text-xl items-center justify-center">ICONE:</h3>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />

                </div>
                <div className="drop-shadow-xl flex flex-col-reverse gap-2 text-white w-[480px] h-full p-5 m-5 bg-blue-900 rounded-md">
                    <h1>Questo è un h1</h1>
                    <h2>Questo è un h2</h2>
                    <h3>Questo è un h3</h3>
                    <h4>Questo è un h4</h4>
                    <h5>Questo è un h5</h5>
                    <h6>Questo è un h6</h6>
                    
                </div>
                <Card />
            </div>
            {/*    <div className="min-h-[500px] h-1/1 w-1/1 mx-auto sm:w-1/2 sm:h-1/2">
                <BodyModelCanvas />
    </div> */}
            <Footer />
        </div>
    )
}
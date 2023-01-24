import { Navbar } from "./navbar"
import { FirstButton } from "./firstButton"
import { SecondButton } from "./SecondButton"
import { ThirdButton } from "./ThirdButton"
import { Footer } from "./Footer"
import { Card } from "./card"
import logo from "./assets/logo.png"
import "./button.css"

export function Design() {
    return (
        <div>
            <Navbar />
            <div className="w-full flex justify-between">
                <div className="flex-col">
                    <button className="btn m-5"><span>Hover me!</span></button>
                    <FirstButton />
                    <SecondButton />
                    <ThirdButton />
                </div>
                <div className="text-white h-[300px] p-5 m-5 bg-blue-900 rounded-md drop-shadow-lg">
                    <h1 className="flex text-xl items-center justify-center">LOGO:</h1>
                    <img className="w-[250px]" src={logo} />
                </div>
                <Card />
            </div>
            <Footer />
        </div>
    )
}
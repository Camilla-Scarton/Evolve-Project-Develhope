import { Navbar } from "./navbar"
import { FirstButton } from "./firstButton"
import { SecondButton } from "./SecondButton"
import { ThirdButton } from "./ThirdButton"
import { Footer } from "./Footer"
import { Card } from "./card"
import logo from "./assets/logo.png"

export function Design() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex">
                <div className="flex-col">
                    <FirstButton />
                    <SecondButton />
                    <ThirdButton />
                    <div className="text-white p-5 m-5 bg-blue-900 rounded-md drop-shadow-lg">
                        <h1 className="flex text-xl items-center justify-center">LOGO:</h1>
                        <img className="w-[250px]" src={logo} />
                    </div>
                </div>
                <Card />
            </div>
            <Footer />
        </div>
    )
}
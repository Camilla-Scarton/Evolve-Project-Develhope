import logo from "./assets/logo.png"
import logo3 from "./assets/logo3.png"

export function Navbar() {
    return (
        <div className="z-10 flex sticky top-0 h-[60px] text-white bg-blue-900 dark:bg-purple-800">
            <img className="w-[60px] h-[60px]" src={logo} alt="LOGO"/> 
        <div className="flex w-full items-center justify-center"><img className="h-[90px]" src={logo3}/></div>
        </div>
    )
}
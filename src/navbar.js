import logo from "./assets/logo.png"

export function Navbar() {
    return (
        <div className="z-10 flex sticky top-0 h-[60px] text-white bg-blue-900 dark:bg-blue-500">
            <img className="w-[60px] h-[60px]" src={logo} alt="LOGO"/> 
        <div className="flex w-full items-center justify-center">Navbar</div>
        </div>
    )
}
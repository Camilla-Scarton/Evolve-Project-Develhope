import { ThirdButton } from "./ThirdButton" 
import logo from "./assets/logo.png"

export function Card() {
    return (
        <div>
            <div className="bg-gradient-to-tr drop-shadow-lg from-blue-300 via-blue-900 to-purple-400 sm:max-w-sm max-w-[240px] rounded-md overflow-hidden 
            shadow-lg m-5 dark:from-purple-300  dark:via-purple-700 dark:to-blue-400 transition-all duration-200 hover:shadow-xl dark:shadow-slate-600 dark:hover:shadow-slate-600">
                    <div className="px-6 py-4">
                        <img className="w-full" src={logo} alt="LOGO"/>
                        <h3 className=" text-white  mb-2">Muscolo</h3>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex items-center justify-center">
                        <ThirdButton/>
                    </div>
            </div>
        </div>
    )
}
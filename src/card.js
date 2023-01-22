import { ThirdButton } from "./ThirdButton" 
import logo from "./assets/logo.png"

export function Card() {
    return (
        <div>
            <div class="bg-gradient-to-tr drop-shadow-lg from-blue-300 to-blue-900 sm:max-w-sm max-w-[240px] rounded-md overflow-hidden shadow-lg m-5">
                    <div class="px-6 py-4">
                        <img class="w-full" src={logo} alt="LOGO"/>
                        <div class=" text-white font-bold text-xl mb-2">Muscolo</div>
                        <p class="text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex items-center justify-center">
                        <ThirdButton/>
                    </div>
            </div>
        </div>
    )
}
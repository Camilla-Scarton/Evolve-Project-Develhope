import BodyModelCanvas from "../components/BodyModelCanvas";
import exercises from "../utilities/exercises";
import { createContext } from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/index.css"

export const contentCard = createContext({})


export function ExCard() {

    const card = exercises.Abdominals.map((ex) => {
        return (
            <div className="bg-gradient-to-tr drop-shadow-lg from-blue-300 via-blue-900 to-purple-400 sm:max-w-sm max-w-[240px] rounded-md overflow-y-auto 
            shadow-lg mb-3 dark:from-purple-300  dark:via-purple-700 dark:to-blue-400 transition-all duration-200 hover:shadow-xl dark:shadow-slate-600 dark:hover:shadow-slate-600 p-3 h-128 scrollbar-hide " id="slide">
                <h1 className="font-bold text-xl mb-2" >{ex.name}</h1>
                <img className="flex flex-row w-80 h-52 m-auto rounded-md shadow-xl border-solid border-purple-400 border-2 my-3 hover:w-full hover:h-72 transition-all" src={ex.image} alt="muscolo" />
                <div className=" flex flex-row gap-1 items-center">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                    <a className="bg-red-600 p-1 border-l-red-800 rounded-md" href={ex.Youtube}>Guarda il video</a>
                </div>
                <p className=" text-gray-900 text-base" >{ex.instructions}</p>
                <h3 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 my-2" >difficulty: {ex.difficulty}</h3>
            </div>
        )
    })

    const slidesContainer = document.querySelector("#slider-container");

    function scrolldown(){
        slidesContainer.scrollTop += 684
    }

    function scrollup(){
        slidesContainer.scrollTop -= 684
    }


    return (
        <div>
            <BodyModelCanvas />
            <div className="absolute h-67 top-12 right-12 flex flex-col items-center" >
                <button onClick={scrollup} className="shadow-xl text-white rounded-md px-5 w-[250px] py-2 mb-2 mt-5 bg-gradient-to-r from-blue-900 to-purple-800 hover:from-purple-800 hover:to-blue-900  dark:hover:from-blue-400 dark:hover:to-violet-500 hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)] dark:to-blue-400 dark:from-violet-500">^</button>
                <div className="relative overflow-y-scroll h-128 scrollbar-hide scroll-smooth" id="slider-container">
                    {card}
                </div>
                <button onClick={scrolldown} className="shadow-xl text-white rounded-md px-5 w-[250px] py-2 mt-2  bg-gradient-to-r from-blue-900 to-purple-800 hover:from-purple-800 hover:to-blue-900  dark:hover:from-blue-400 dark:hover:to-violet-500 hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)] dark:to-blue-400 dark:from-violet-500">v</button>
            </div>
        </div>
    )
}
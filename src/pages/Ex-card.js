import exercises from "../utilities/exercises";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/index.css";
import { useParams } from "react-router";
import useCarousel from "../hooks/useCarousel";
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";


export function ExCard() {
  const { bodyPart } = useParams();


  const card = exercises[bodyPart].map((ex) => {
    return (
      <div
        className="bg-gradient-to-tr drop-shadow-lg  w-[40vw] h-auto rounded-md overflow-y-auto 
            shadow-lg mb-3  dark:from-purple-400  dark:via-purple-700 dark:to-blue-400 from-blue-400 via-blue-900 to-purple-400 hover:shadow-xl dark:shadow-slate-600 dark:hover:shadow-slate-600 p-3 "
        id="slide" key={ex.name}
        >
        <img
          className="flex flex-row w-[35%] m-auto rounded-md shadow-xl mb-3 transition-all"
          src={ex.image}
          alt="muscolo"
        />
        <h1 className="text-center font-bold text-xl pt-3 pb-3 text-white">{ex.name}</h1>
        <h3 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 my-2">
          Difficulty: {ex.difficulty}
        </h3>
        <div className="py-3">
          <p className=" text-gray-200 text-base h-[20vh] overflow-y-auto scrollbar pr-2">{ex.instructions}</p>
        </div>
        <button className="drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2  
            from-blue-900 to-purple-700 hover:from-purple-700 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 w-[97%] m-auto transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500 flex justify-center items-center gap-3">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
          <a
            className=""
            href={ex.Youtube}
          >
            Watch the video
          </a>
        </button>
      </div>
    );
  });

  const { nextCard, prevCard, currentItem, currentItemIndex } = useCarousel(card)

  return (
    <div className=" flex flex-col items-center">
      <div
        className="relative transition-all"
        id="slider-container"
      >
        {currentItem}
      </div>
      <div className="flex flex-row justify-between w-full">
      <button
        onClick={prevCard} disabled={currentItemIndex === 0 ? true : false}
        className=" disabled:opacity-50 shadow-xl flex justify-between items-center text-white rounded-2xl px-5 w-24 h-12 py-2 mx-2 bg-gradient-to-r from-blue-900 to-purple-700 hover:from-purple-700 hover:to-blue-900  dark:hover:from-blue-400 dark:hover:to-violet-500 hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)] dark:to-blue-400 dark:from-violet-500"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="1x" />
        Prev
      </button>
      <button
        onClick={nextCard} disabled={currentItemIndex === card.length - 1 ? true : false}
        className="flex disabled:opacity-50  justify-between items-center shadow-xl text-white rounded-2xl w-24 h-12 px-5 py-2 mx-2  bg-gradient-to-r from-blue-900 to-purple-700 hover:from-purple-700 hover:to-blue-900  dark:hover:from-blue-400 dark:hover:to-violet-500 hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)] dark:to-blue-400 dark:from-violet-500"
      >
        Next
        <FontAwesomeIcon icon={faChevronRight} size="1x" />
        
      </button>
      </div>
    </div>
  );
}

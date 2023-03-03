import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const ResultsBmi = (state) => {
  const location = useLocation();
  let data = location.state.data;
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full 
    bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700
     dark:to-blue-400">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col ml-0">
            <div className="flex flex-col justify-center items-center">
              <h2 className="m-5  text-white">Goals</h2>
            </div>
            <h3 className="m-1  text-white">Extreme weight gain:</h3>
            <h3 className="m-1  text-white">Extreme weight loss:</h3>
            <h3 className="m-1  text-white">Mild weight gain:</h3>
            <h3 className="m-1  text-white">Mild weight loss:</h3>
            <h3 className="m-1 text-white">Weight gain:</h3>
            <h3 className="m-1  text-white">Weight loss:</h3>
            <h3 className="m-1  text-white">Maintain weight:</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="m-1 text-white">Calory</h2>
            <h3 className="m-1  text-white"> {Math.round(data.goals["Extreme weight gain"].calory)}</h3>
            <h3 className="m-1  text-white">{Math.round(data.goals["Extreme weight loss"].calory)}</h3>
            <h3 className="m-1  text-white">{Math.round(data.goals["Mild weight gain"].calory)}</h3>
            <h3 className="m-1  text-white">{Math.round(data.goals["Mild weight loss"].calory)}</h3>
            <h3 className="m-1 text-white">{Math.round(data.goals["Weight gain"].calory)}</h3>
            <h3 className="m-1  text-white">{Math.round(data.goals["Weight loss"].calory)}</h3>
            <h3 className="m-1  text-white">{Math.round(data.goals["maintain weight"])}</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="m-1  text-white">Weight</h2>
            <h3 className="m-1  text-white">+{data.goals["Extreme weight gain"]["gain weight"]}</h3>
            <h3 className="m-1  text-white">-{data.goals["Extreme weight loss"]["loss weight"]}</h3>
            <h3 className="m-1  text-white">+{data.goals["Mild weight gain"]["gain weight"]}</h3>
            <h3 className="m-1  text-white">-{data.goals["Mild weight loss"]["loss weight"]}</h3>
            <h3 className="m-1  text-white">+{data.goals["Weight gain"]["gain weight"]}</h3>
            <h3 className="m-1  text-white">-{data.goals["Weight loss"]["loss weight"]}</h3>
            <h3 className="m-1  text-white">-{data.goals["Weight loss"]["loss weight"]}</h3>
          </div>
        </div>
      </div>
      <div className="absolute top-20 left-5"> <button onClick={() => navigate(-1)}>
        {" "}
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="3x"
          className="text-white"
        />
      </button></div>
    </div>
  );
};
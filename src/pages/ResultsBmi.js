import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const ResultsBmi = (state) => {
  const location = useLocation();
  let data = location.state.data;
  let navigate = useNavigate();

  return (
    <div className="tracking-wide w-full bg-gradient-to-tr drop-shadow-lg from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400 flex flex-col items-center justify-between h-full">
      <h2 className="m-5  text-white">Goals: </h2>
      <div className="flex">
        <div className="m-3 text-white flex flex-col items-center justify-center">
          <h3 >
            Extreme weight gain:
          </h3>
          <p>Calory: {Math.round(data.goals["Extreme weight gain"].calory)}</p>
          <p>Gain Weight: {data.goals["Extreme weight gain"]["gain weight"]}</p>
        </div>

        <div className="m-3 text-white flex flex-col items-center justify-center">
          <h3>
            Extreme weight loss:
          </h3>
          <p>Calory: {Math.round(data.goals["Extreme weight loss"].calory)}</p>
          <p>Loss Weight: {data.goals["Extreme weight loss"]["loss weight"]}</p>
        </div>

        <div className="m-3 text-white flex flex-col items-center  justify-center">
          <h3>
            Mild weight gain:
          </h3>
          <p>Calory: {Math.round(data.goals["Mild weight gain"].calory)}</p>
          <p>Gain Weight: {data.goals["Mild weight gain"]["gain weight"]}</p>

        </div>
        <div className="m-3 text-white flex flex-col items-center  justify-center">
          <h3>
            Mild weight loss:
          </h3>
          <p>Calory: {Math.round(data.goals["Mild weight loss"].calory)}</p>
          <p>Loss Weight: {data.goals["Mild weight loss"]["loss weight"]}</p>

        </div>

        <div className="m-3 text-white flex flex-col items-center  justify-center">
          <h3>
            Weight gain:</h3>
          <p>Calory: {Math.round(data.goals["Weight gain"].calory)}</p>
          <p>Gain Weight: {data.goals["Weight gain"]["gain weight"]}</p>

        </div>

        <div className="m-3 text-white flex flex-col items-center  justify-center">
          <h3 >
            Weight loss:</h3>
          <p>Calory: {Math.round(data.goals["Weight loss"].calory)}</p>
          <p>Loss Weight: {data.goals["Weight loss"]["loss weight"]}</p>

        </div>

        <div className="m-3 text-white flex flex-col items-center justify-center">
          <h3>
            Maintain weight:</h3>
          <p>Calory: {Math.round(data.goals["maintain weight"])}</p>

        </div>


      </div>

      <button onClick={() => navigate(-1)}>
        {" "}
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="3x"
          className="m-5 text-white"
        />
      </button>
    </div>
  );
};
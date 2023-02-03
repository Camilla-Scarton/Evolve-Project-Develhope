import { useLocation } from "react-router";

export const ResultsBmi = (state) => {
  const location = useLocation();
  let data = location.state.data;
  return (
    <div className="w-full bg-gradient-to-tr drop-shadow-lg from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400 flex flex-col items-center justify-center">
      <h2 className="m-5  text-white">Goals: </h2>
      <h3 className="m-3 text-white flex flex-col items-center  justify-center">
        Extreme weight gain:
        <p>Calory: {Math.round(data.goals["Extreme weight gain"].calory)}</p>
        <p>Gain Weight: {data.goals["Extreme weight gain"]["gain weight"]}</p>
      </h3>
      <h3 className="m-3 text-white flex flex-col items-center justify-center">
        Extreme weight loss:
        <p>Calory: {Math.round(data.goals["Extreme weight loss"].calory)}</p>
        <p>Loss Weight: {data.goals["Extreme weight loss"]["loss weight"]}</p>
      </h3>
      <h3 className="m-3 text-white flex flex-col items-center  justify-center">
        Mild weight gain:
        <p>Calory: {Math.round(data.goals["Mild weight gain"].calory)}</p>
        <p>Gain Weight: {data.goals["Mild weight gain"]["gain weight"]}</p>
      </h3>
      <h3 className="m-3 text-white flex flex-col items-center  justify-center">
        Mild weight loss:
        <p>Calory: {Math.round(data.goals["Mild weight loss"].calory)}</p>
        <p>Loss Weight: {data.goals["Mild weight loss"]["loss weight"]}</p>
      </h3>
      <h3 className="m-3 text-white flex flex-col items-center  justify-center">
        Weight gain:
        <p>Calory: {Math.round(data.goals["Weight gain"].calory)}</p>
        <p>Gain Weight: {data.goals["Weight gain"]["gain weight"]}</p>
      </h3>
      <h3 className="m-3 text-white flex flex-col items-center  justify-center">
        Weight loss:
        <p>Calory: {Math.round(data.goals["Weight loss"].calory)}</p>
        <p>Loss Weight: {data.goals["Weight loss"]["loss weight"]}</p>
      </h3>
      <h3 className="m-3 text-white flex flex-col items-center justify-center">
        Maintain weight:
        <p>Calory: {Math.round(data.goals["maintain weight"])}</p>
      </h3>
    </div>
  );
};

import { Link } from "react-router-dom";

export const MealPlan = () => {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400">
      <form className="flex flex-col text-center justify-center h-[100%] gap-10">
        <label htmlFor="daily-calories">
          <p className="text-white py-2">
            How many <strong>calories</strong> do you want to consume{" "}
            <strong>daily</strong>?
            <p className="text-base pb-2">...calculate them in the <Link to="/bmi"><strong>Daily Calories</strong></Link> section!</p>
          </p>
          <input
            className="text-white text-center bg-[#ffffff4f] rounded-sm"
            id="daily-calories"
            placeholder="Daily calories"
          />
        </label>
        <label htmlFor="meal-number">
          <p className="text-white py-2">
            How many <strong>meals</strong> do you want to make{" "}
            <strong>daily</strong>?
          </p>
          <input className="text-white text-center bg-[#ffffff4f] rounded-sm" id="meal-number" placeholder="3" />
        </label>
        <div className="flex flex-col gap-3">
            <p className="text-white py-2">
              Which <strong>macronutrients</strong> percentage distribution do
              you prefer?
              <p className="text-base">...proteins are automatically written to get <strong>100%</strong>!</p>
            </p>
          <label htmlFor="carb-distribution">
            <p className="text-white pb-2">Percentage of <strong>carbohydrates</strong>:</p>
            <input
              className="text-white text-center bg-[#ffffff4f] rounded-sm"
              id="carb-distribution"
              placeholder="45"
            />
          </label>
          <label htmlFor="fat-distribution">
            <p className="text-white py-2">Percentage of <strong>fats</strong>:</p>
            <input
              className="text-white text-center bg-[#ffffff4f] rounded-sm"
              id="fat-distribution"
              placeholder="25"
            />
          </label>
          <label htmlFor="protein-distribution">
            <p className="text-white py-2">Percentage of <strong>proteins</strong>:</p>
            <input
              className="text-white text-center bg-[#ffffff4f] rounded-sm"
              id="protein-distribution"
              placeholder="30"
            />
          </label>
        </div>
        <button
          type="submit"
          className="self-center w-[200px] drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2 m-5 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500"
        >
          <span>SUBMIT</span>
        </button>
      </form>
    </div>
  );
};

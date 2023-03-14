import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// TODO mettere slide per le calorie / mettere select per i pasti / mettere le percentuali giuste
// per il select: https://react-select.com/home
// TODO fare chiamata fetch / impostare la pagina dei risultati
// per i risultati: https://rapidapi.com/FatSecret/api/fatsecret1

export const MealPlan = () => {
  const [form, setForm] = useState({
    calories: 2600,
    meals: 3,
    carbs: "",
    proteins: "",
    fats: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const [borders, setBorders] = useState([false, false, true, false, false]);

  const handleMealClick = (event) => {
    let number = Number(event.target.name);
    if (number) {
      setForm({
        ...form,
        meals: number,
      });
    }
  };

  useEffect(() => {
    setBorders((borders) => {
      let _borders = [false, false, false, false, false];
      _borders[form.meals - 1] = true;
      return _borders;
    });
  }, [form.meals]);

  return (
    <div className="w-full h-full bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400">
      <form className="p-4 flex flex-col text-center justify-center h-[100%] gap-10">
        <label htmlFor="daily-calories" className="flex flex-col items-center">
          <p className="text-white py-2">
            How many <strong>calories</strong> do you want to consume{" "}
            <strong>daily</strong>?
            <span className="block text-sm sm:text-lg">
              ...calculate them in the{" "}
              <Link to="/bmi">
                <strong>Daily Calories</strong>
              </Link>{" "}
              section!
            </span>
          </p>
          <div className="center w-[450px] bg-gradient-to-r from-white dark:from-gray-200 rounded-full m-2">
            <input
              className="mt-1 h-[30px] max-w-[90%] w-[400px] accent-blue-900 dark:accent-purple-800"
              id="daily-calories"
              name="calories"
              required
              type="range"
              value={form.calories}
              min="1200"
              max="4000"
              step="10"
              onChange={handleChange}
            />
          </div>
          <p className="text-white">
            <strong>{form.calories}</strong>
          </p>
        </label>

        <div className="meal-number">
          <p className="text-white py-2">
            How many <strong>meals</strong> do you want to make{" "}
            <strong>daily</strong>?
          </p>
          <div className="p-2 mx-auto max-w-full w-[260px] flex flex-row flex-wrap justify-between">
            <button
              name="1"
              type="button"
              className={`mx-auto w-[30px] text-white text-center bg-[#ffffff4f] rounded-sm border-2 ${
                borders[0] ? "border-white" : "border-transparent"
              }`}
              onClick={handleMealClick}
            >
              {borders[0] ? <strong>1</strong> : 1}
            </button>
            <button
              name="2"
              type="button"
              className={`mx-auto w-[30px] text-white text-center bg-[#ffffff4f] rounded-sm border-2 ${
                borders[1] ? "border-white" : "border-transparent"
              }`}
              onClick={handleMealClick}
            >
              {borders[1] ? <strong>2</strong> : 2}
            </button>
            <button
              name="3"
              type="button"
              className={`mx-auto w-[30px] text-white text-center bg-[#ffffff4f] rounded-sm border-2 ${
                borders[2] ? "border-white" : "border-transparent"
              }`}
              onClick={handleMealClick}
            >
              {borders[2] ? <strong>3</strong> : 3}
            </button>
            <button
              name="4"
              type="button"
              className={`mx-auto w-[30px] text-white text-center bg-[#ffffff4f] rounded-sm border-2 ${
                borders[3] ? "border-white" : "border-transparent"
              }`}
              onClick={handleMealClick}
            >
              {borders[3] ? <strong>4</strong> : 4}
            </button>
            <button
              name="5"
              type="button"
              className={`mx-auto w-[30px] text-white text-center bg-[#ffffff4f] rounded-sm border-2 ${
                borders[4] ? "border-white" : "border-transparent"
              }`}
              onClick={handleMealClick}
            >
              {borders[4] ? <strong>5</strong> : 5}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white py-2">
            Which <strong>macronutrients</strong> percentage distribution do you
            prefer?
          </p>

          <label htmlFor="carb-distribution">
            <p className="text-white pb-2">
              Percentage of <strong>carbohydrates</strong>:
            </p>
            <input
              className="w-[200px] text-white text-center bg-[#ffffff4f] rounded-sm"
              id="carb-distribution"
              name="carbs"
              required
              type="number"
              value={form.carbs}
              min={10}
              max={80}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="protein-distribution">
            <p className="text-white py-2">
              Percentage of <strong>proteins</strong>:
            </p>
            <input
              className="w-[200px] text-white text-center bg-[#ffffff4f] rounded-sm"
              id="protein-distribution"
              name="proteins"
              required
              type="number"
              value={form.proteins}
              min={10}
              max={80}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="fat-distribution">
            <p className="text-white py-2">
              Percentage of <strong>fats</strong>:
            </p>
            <input
              className="w-[200px] text-white text-center bg-[#ffffff4f] rounded-sm"
              id="fat-distribution"
              name="fats"
              required
              type="number"
              value={form.fats}
              min={10}
              max={80}
              disabled
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

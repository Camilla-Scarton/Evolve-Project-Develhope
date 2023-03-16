import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import {
  faRotateLeft,
  // carbs
  faBowlRice,
  faBreadSlice,
  faJar,
  faIceCream,
  // proteins
  faDrumstickBite,
  faCow,
  faShrimp,
  faFishFins,
  faEgg,
  // fats
  faCheese,
  faBacon,
  faCookie,
  faBottleDroplet,
  // vegetable
  faCarrot,
  faPepperHot,
  //fruits
  faLemon,
  faAppleWhole,
  // water
  faGlassWater,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MealPlan = () => {
  const [form, setForm] = useState({
    calories: 2600,
    meals: 3,
    percentages: {
      carbs: 45,
      proteins: 30,
      fats: 25,
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
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

  const [lightMode, setLightMode] = useState(
    document.documentElement.classList.value === ""
  );
  window.addEventListener("click", () =>
    setLightMode(document.documentElement.classList.value === "")
  );

  const [values, setValues] = useState([45, 75]);

  const handleSliderChange = (event, newValue, activeThumb) => {
    if (newValue[2] - newValue[1] < 10) {
      if (activeThumb === 1) {
        const clamped = Math.min(newValue[1], 80);
        setValues([clamped, clamped + 10]);
      } else {
        const clamped = Math.max(newValue[2], 20);
        setValues([clamped - 10, clamped]);
      }
    } else {
      setValues([Math.max(newValue[1], 10), Math.min(newValue[2], 90)]);
    }

    setForm({
      ...form,
      percentages: {
        carbs: values[0],
        proteins: values[1] - values[0],
        fats: 100 - values[1],
      },
    });
  };

  const [result, setResult] = useState(false);

  return (
    <div className="w-full h-full bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400">
      {!result && (
        <form className="p-4 flex flex-col text-center justify-center h-[100%] gap-10">
          <label
            htmlFor="daily-calories"
            className="flex flex-col items-center"
          >
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
            <div className="center max-w-full w-[450px] bg-gradient-to-r from-white dark:from-gray-200 rounded-full m-3">
              <input
                className="mt-1 h-[40px] max-w-[90%] w-[400px] accent-blue-900 dark:accent-purple-800"
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
            <p className="text-white mt-2">
              <strong>{form.calories}</strong>
            </p>
          </label>

          <div className="meal-number">
            <p className="text-white py-2">
              How many <strong>meals</strong> do you want to make{" "}
              <strong>daily</strong>?
            </p>
            <div className="p-2 mx-auto max-w-full w-[260px] flex flex-row flex-wrap justify-between">
              {borders.map((borderValue, i) => {
                return (
                  <button
                    key={`key-${i + 1}`}
                    name={i + 1}
                    type="button"
                    className={`mx-auto w-[30px] text-white text-center bg-[#ffffff4f] rounded-sm border-2 ${
                      borderValue ? "border-white" : "border-transparent"
                    }`}
                    onClick={handleMealClick}
                  >
                    {borderValue ? <strong>{i + 1}</strong> : i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <p className="text-white py-2">
              Which <strong>macronutrients</strong> percentage distribution do
              you prefer?
            </p>
            <div className="max-w-full flex flex-col sm:flex-row flex-wrap w-[540px] items-center justify-between pb-2">
              <p className="text-white hidden sm:flex">
                <strong>0%</strong>
              </p>

              <div className="max-w-full center w-[450px] bg-gradient-to-r from-white via-white dark:from-gray-200 dark:via-gray-200 rounded-full m-2 p-1">
                <div className="relative mt-1 max-w-full w-[380px] mx-auto">
                  <Slider
                    className="z-10"
                    size="medium"
                    getAriaLabel={() => "Minimum distance shift"}
                    value={[0, values[0], values[1], 100]}
                    onChange={handleSliderChange}
                    getAriaValueText={(value) => `${value}%`}
                    step={5}
                    disableSwap
                    track={false}
                    sx={{
                      color: lightMode ? "#1e3a8a" : "#6b21a8",
                    }}
                  />
                  <div className="absolute top-3 max-w-full w-[380px] mx-auto">
                    <div className="absolute top-0 left-0 bg-orange-400 w-full h-1.5 ml-0"></div>
                    <div
                      className={
                        "absolute top-0 right-0 bg-green-400 h-1.5 mr-0"
                      }
                      style={{ width: `${100 - values[1]}%` }}
                    ></div>
                    <div
                      className={"absolute top-0 left-0 bg-cyan-400 h-1.5 ml-0"}
                      style={{ width: `${values[0]}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="text-white hidden sm:flex">
                <strong>100%</strong>
              </p>
            </div>

            <p className="text-white pb-2 flex items-center gap-2">
              <span className="bg-cyan-400 h-3 w-3 rounded-full"></span>
              <strong>Carbohydrates: {form.percentages.carbs} %</strong>
            </p>
            <p className="text-white pb-2 flex items-center gap-2">
              <span className="bg-orange-400 h-3 w-3 rounded-full"></span>
              <strong>Proteins: {form.percentages.proteins} %</strong>
            </p>
            <p className="text-white pb-2 flex items-center gap-2">
              <span className="bg-green-400 h-3 w-3 rounded-full"></span>
              <strong>Fats: {form.percentages.fats} %</strong>
            </p>
          </div>
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setResult(true);
            }}
            className="self-center w-[200px] drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500"
          >
            <span>SUBMIT</span>
          </button>
        </form>
      )}

      {result && (
        <div className="text-white p-4 flex flex-col text-center items-center justify-center h-[100%] gap-4">
          <h3>Results</h3>
          <hr className="mx-auto w-[50%]" />
          <p className="flex flex-row flex-wrap gap-4 items-center">
            <span className="mx-auto">
              Total calories: <strong>{form.calories}</strong>
            </span>
            <span className="mx-auto">
              Total meals: <strong>{form.meals}</strong>
            </span>
          </p>
          <p className="max-w-[90%] w-[600px] flex flex-row flex-wrap gap-1 justify-evenly">
            <span>
              <strong>{form.percentages.carbs}</strong> % carbohydrates
            </span>
            <span>
              <strong>{form.percentages.proteins}</strong> % proteins
            </span>
            <span>
              <strong>{form.percentages.fats}</strong> % fats
            </span>
          </p>
          <hr className="mx-auto w-[50%]" />

          <div class="max-w-full">
            <h5 className="pb-2">Distributions</h5>
            <div className="mx-auto max-w-[90%] w-[1000px] flex flex-row flex-wrap gap-2 justify-evenly">
              <p>1 g of carbs gives 4 calories.</p>
              <p>1 g of proteins gives 4 calories.</p>
              <p>1 g of fats gives 9 calories.</p>
            </div>

            <p className="flex flex-col items-center gap-2 pt-5">
              <h5>Total calories and grams of macronutrients</h5>
              <div className="max-w-[90%] w-[1000px] flex flex-row flex-wrap gap-2 justify-evenly">
                <div>
                  <strong>
                    {(form.calories / 100) * form.percentages.carbs}
                  </strong>{" "}
                  calories from carbohydrates (
                  <strong>
                    {Math.floor(
                      ((form.calories / 100) * form.percentages.carbs) / 4
                    )}
                  </strong>{" "}
                  grams)
                </div>
                <div>
                  <strong>
                    {(form.calories / 100) * form.percentages.proteins}
                  </strong>{" "}
                  calories from proteins (
                  <strong>
                    {Math.floor(
                      ((form.calories / 100) * form.percentages.proteins) / 4
                    )}
                  </strong>{" "}
                  grams)
                </div>
                <div>
                  <strong>
                    {(form.calories / 100) * form.percentages.fats}
                  </strong>{" "}
                  calories from fats (
                  <strong>
                    {Math.floor(
                      ((form.calories / 100) * form.percentages.fats) / 9
                    )}
                  </strong>{" "}
                  grams)
                </div>
              </div>
            </p>
          </div>
          <hr className="mx-auto w-[50%]" />
          <div className="max-w-[90%] w-[1250px] flex flex-col items-center gap-3 sm:gap-10">
            <div className="flex flex-col sm:flex-row justify-evenly gap-2">
              <div>
                <h5 className="pb-3">Carbs</h5>
                <div className="flex flex-row items-center justify-evenly flex-wrap pb-2">
                  <FontAwesomeIcon icon={faBowlRice} size="xl" />
                  <FontAwesomeIcon icon={faBreadSlice} size="xl" />
                  <FontAwesomeIcon icon={faJar} size="xl" />
                  <FontAwesomeIcon icon={faIceCream} size="xl" />
                </div>
                <p>
                  Rice, pasta, bread, begals, cereals, beans, lentils, polenta,
                  potatoes, biscuits, ice-cream...
                </p>
              </div>
              <div>
                <h5 className="pb-3">Proteins</h5>
                <div className="flex flex-row items-center justify-evenly flex-wrap pb-2">
                  <FontAwesomeIcon icon={faDrumstickBite} size="xl" />
                  <FontAwesomeIcon icon={faCow} size="xl" />
                  <FontAwesomeIcon icon={faEgg} size="xl" />
                  <FontAwesomeIcon icon={faShrimp} size="xl" />
                  <FontAwesomeIcon icon={faFishFins} size="xl" />
                </div>
                <p>
                  Chicken breast, lean beef, eggs, fish, shellfish, milk,
                  cottage cheese, greek yogurt, almonds...
                </p>
              </div>
              <div>
                <h5 className="pb-3">Fats</h5>
                <div className="flex flex-row items-center justify-evenly flex-wrap pb-2">
                  <FontAwesomeIcon icon={faCheese} size="xl" />
                  <FontAwesomeIcon icon={faBacon} size="xl" />
                  <FontAwesomeIcon icon={faCookie} size="xl" />
                  <FontAwesomeIcon icon={faBottleDroplet} size="xl" />
                </div>
                <p>
                  Cheese, butter, bacon, avocados, olive oil, olives, nut
                  butters, walnuts, almonds...
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-around">
              <div>
                <div className="flex flex-row items-center justify-evenly flex-wrap pb-2">
                  <FontAwesomeIcon icon={faCarrot} size="xl" />
                  <h5>Vegetables</h5>
                  <FontAwesomeIcon icon={faPepperHot} size="xl" />
                </div>
                <p>
                  All vegetables are great! Choose different colors for
                  different vitamins!
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-evenly flex-wrap pb-2">
                  <FontAwesomeIcon icon={faLemon} size="xl" />
                  <h5>Fruits</h5>
                  <FontAwesomeIcon icon={faAppleWhole} size="xl" />
                </div>
                <p>Fruits are rich in vitamins, but watch out for sugars!</p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-evenly flex-wrap pb-2">
                  <FontAwesomeIcon icon={faGlassWater} size="xl" />
                  <h5>Water</h5>
                  <FontAwesomeIcon icon={faMugHot} size="xl" />
                </div>
                <p>Water, coffee and tea can be all good sugar free choices!</p>
              </div>
            </div>
          </div>
          <hr className="mx-auto w-[50%]" />
          <button
            type="button"
            onClick={() => {
              setForm({
                calories: 2600,
                meals: 3,
                percentages: {
                  carbs: 45,
                  proteins: 30,
                  fats: 25,
                },
              });
              setValues([45, 75]);
              setResult(false);
            }}
            className="drop-shadow-xl text-white bg-gradient-to-r rounded-full px-4 py-3 m-5 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500 "
          >
            <FontAwesomeIcon icon={faRotateLeft} size="1x" />
          </button>
        </div>
      )}
    </div>
  );
};

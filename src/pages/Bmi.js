import { useState } from "react";
import axios from "axios";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bmi() {
  const [info, setInfo] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activitylevel: "level_2",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const handleInput = (event) => {
    if (error) {
      setError(null)
    }
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const handlereset = (event) => {
    setInfo({
      age: "",
      gender: "male",
      height: "",
      weight: "",
      activitylevel: "level_2",
    });
    setResponse(null);
    setError(null);
  }

  //validazione numero intero

  function isIntegerNum(num) {
    if (typeof parseInt(num) == "number" && num % 1 === 0 && num >= 1) {
      return true
    }
  }

  //validazione form

  const activityLevelOptions = [
    "level_1",
    "level_2",
    "level_3",
    "level_4",
    "level_5",
    "level_6",
  ];

  function validationForm(info) {
    if (!isIntegerNum(info.age)) {
      setError("Age must be an integer number.");
      return false;
    }
    if (!(info.gender === "male" || info.gender === "female")) {
      setError("Please select a valid gender.");
      return false;
    }
    if (!isIntegerNum(info.height)) {
      setError("Height must be an integer number.");
      return false;
    }
    if (!isIntegerNum(info.weight)) {
      setError("Weight must be an integer number.");
      return false;
    }
    if (!activityLevelOptions.includes(info.activitylevel)) {
      setError("Please select a valid activity level.");
      return false;
    }


    return true;
  }

  const fetchData = async (event) => {
    event.preventDefault();
    if (validationForm(info)) {
      try {
        setLoading(true);
        const responsee = await axios({
          method: "GET",
          url: "https://fitness-calculator.p.rapidapi.com/dailycalorie",
          headers: {
            "X-RapidAPI-Key":
              "47f4c893cemshf0974c486258b66p1ad651jsnc5044bc70078",
            "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
          },
          params: {
            age: info.age,
            gender: info.gender,
            height: info.height,
            weight: info.weight,
            activitylevel: info.activitylevel,
          },
        });
        setLoading(false);
        setResponse(responsee)
        console.log(responsee.data.data.goals);
      } catch (err) {
        setError(err)
        console.error(err);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full 
    bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700
     dark:to-blue-400">
      <div className="mt-5 lg:m-10 rounded-md bg-[#ffffff4f] w-10/12 lg:w-1/3">
        <form
          className="flex flex-col m-3 p-5 justify-center "
          onSubmit={fetchData}
        >
          <div className="flex flex-col justify-center">
            <label className="mx-3 mt-2 text-white p-2" htmlFor="age">
              <h4>Age:</h4>
            </label>
            <input
              className="pl-5 h-10 rounded-xl mb-3 mx-3 outline-none"
              required
              type="number"
              id="age"
              name="age"
              value={info.age}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col justify-center">
            <label className="mx-3 mt-2 text-white p-2" htmlFor="gender">
              <h4>Gender:</h4>
            </label>
            <select
              className="pl-5 h-10 rounded-xl mb-3 mx-3 outline-none"
              name="gender"
              id="gender"
              value={info.gender}
              onChange={handleInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

          </div>

          <div className="flex flex-col justify-center">
            <label className="mx-3 mt-2 text-white p-2" htmlFor="height">
              <h4>Height: (cm)</h4>
            </label>
            <input
              className="pl-5 h-10 rounded-xl mb-3 mx-3 outline-none"
              required
              type="number"
              id="height"
              name="height"
              value={info.height}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col justify-center">
            <label className="mx-3 mt-2 text-white p-2" htmlFor="weight">
              <h4>Weight: (kg)</h4>
            </label>
            <input
              className="pl-5 h-10 rounded-xl mb-3 mx-3 outline-none"
              required
              type="number"
              id="weight"
              name="weight"
              value={info.weight}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col justify-center">
            <label className="mx-3 mt-2 text-white p-2" htmlFor="activitylevel">
              <h4>Activity Level:</h4>
            </label>
            <select
              className="pl-5 h-10 rounded-xl mb-3 mx-3 outline-none"
              name="activitylevel"
              id="activitylevel"
              value={info.activitylevel}
              onChange={handleInput}
            >
              <option value="level_1">Sedentary: little or no exercise</option>
              <option value="level_2">Exercise 1-3 times/week</option>
              <option value="level_3">Exercise 4-5 times/week</option>
              <option value="level_4">
                Daily exercise or intense exercise 3-4 times/week
              </option>
              <option value="level_5">Intense exercise 6-7 times/week</option>
              <option value="level_6">
                {" "}
                Very intense exercise daily, or physical job
              </option>
            </select>
          </div>
          
          <div className="flex justify-between pl-2 m-3">
            <button
            disabled={loading}
              type="submit"
              className="drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2 m-5 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500">
              <span>{loading ? "Loading..." : "SUBMIT"}</span>
            </button>
            <button type="reset" onClick={handlereset} className="drop-shadow-xl text-white bg-gradient-to-r rounded-full px-4 py-3 m-5 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500 ">
              <FontAwesomeIcon icon={faRotateLeft} size="1x" /></button>
          </div>
          {error && <div><div class="bg-red-700 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
            <div className="border border-t-0 border-red-800 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{error}</p>
            </div></div>}
        </form>
      </div>
      {response &&
        <table className="text-white text-center m-10 rounded-md bg-[#ffffff4f]">
          <thead>
            <tr>
              <th><h2 className="m-3 sm:m-5">Goals</h2></th>
              <th><h2 className="m-3 sm:m-5">Calory</h2></th>
              <th><h2 className="m-3 sm:m-5">Weight</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Maintain weight:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["maintain weight"])}</h4></td>
              <td><h4>-</h4></td>
            </tr>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Weight loss:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["Weight loss"].calory)}</h4></td>
              <td><h4>-{response.data.data.goals["Weight loss"]["loss weight"]}</h4></td>
            </tr>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Weight gain:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["Weight gain"].calory)}</h4></td>
              <td><h4>+{response.data.data.goals["Weight gain"]["gain weight"]}</h4></td>
            </tr>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Mild weight loss:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["Mild weight loss"].calory)}</h4></td>
              <td><h4>-{response.data.data.goals["Mild weight loss"]["loss weight"]}</h4></td>
            </tr>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Mild weight gain:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["Mild weight gain"].calory)}</h4></td>
              <td><h4>+{response.data.data.goals["Mild weight gain"]["gain weight"]}</h4></td>
            </tr>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Extreme weight loss:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["Extreme weight loss"].calory)}</h4></td>
              <td><h4>-{response.data.data.goals["Extreme weight loss"]["loss weight"]}</h4></td>
            </tr>
            <tr>
              <td><h4 className="m-2 sm:m-3 text-left">Extreme weight gain:</h4></td>
              <td><h4>{Math.round(response.data.data.goals["Extreme weight gain"].calory)}</h4></td>
              <td><h4>+{response.data.data.goals["Extreme weight gain"]["gain weight"]}</h4></td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

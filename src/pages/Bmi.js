import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirstButton } from "../components/FirstButton";
import axios from "axios";

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
  const navigation = useNavigate();

  const handleInput = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  //validazione numero intero

  function isIntegerNum(num) {
    if (typeof parseInt(num) == "number" && num % 1 === 0) {
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
        const response = await axios({
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
        console.log(response.data.data);
        navigation("/bmi/results", { state: { data: response.data.data } });
      } catch (err) {
        setError(err)
        console.error(err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full 
    bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700
     dark:to-blue-400">
      <div className="p-2 m-3  rounded-sm">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={fetchData}
        >
          <label className="m-3 text-white p-2" htmlFor="age">
            Age:{" "}
            <input
              className="bg-[#ffffff4f] rounded-sm m-3"
              required
              type="number"
              id="age"
              name="age"
              value={info.age}
              onChange={handleInput}
            />
          </label>

          <label className="m-3 text-white p-2" htmlFor="gender">
            Gender:{" "}
            <select
              className="bg-[#ffffff4f] text-black rounded-sm m-3"
              name="gender"
              id="gender"
              value={info.gender}
              onChange={handleInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label className="m-3 text-white p-2" htmlFor="height">
            Height:{" "}
            <input
              className="bg-[#ffffff4f] rounded-sm m-3"
              required
              type="number"
              id="height"
              name="height"
              value={info.height}
              onChange={handleInput}
            />
          </label>

          <label className="m-3 text-white p-2" htmlFor="weight">
            Weight:{" "}
            <input
              className="bg-[#ffffff4f] rounded-sm m-3"
              required
              type="number"
              id="weight"
              name="weight"
              value={info.weight}
              onChange={handleInput}
            />
          </label>

          <label className="m-3 text-white p-2" htmlFor="activitylevel">
            Activity Level:
            <select
              className="bg-[#ffffff4f] text-black rounded-sm m-3"
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
          </label>
          {loading && <p className="text-white">Loading...</p>}
          <FirstButton name={"SUBMIT"} />
          {error && <div ><div class="bg-red-700 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
            <div className="border border-t-0 border-red-800 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{error}</p>
            </div></div>}
        </form>
      </div>
    </div>
  );
}

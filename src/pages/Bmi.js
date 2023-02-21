import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirstButton } from "../components/FirstButton";

export default function Bmi() {
  const [info, setInfo] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activitylevel: "level_2",
  });
  const navigation = useNavigate();

  const handleInput = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${info.age}&gender=${info.gender}&height=${info.height}&weight=${info.weight}&activitylevel=${info.activitylevel}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "47f4c893cemshf0974c486258b66p1ad651jsnc5044bc70078",
            "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      navigation("/bmi/results", { state: { data: result.data } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <form
        className="w-full bg-gradient-to-tr drop-shadow-lg from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400 flex flex-col items-center justify-center h-full"
        onSubmit={fetchData}
      >
        <label className="m-3 text-white" htmlFor="age">
          Age:{" "}
          <input
            className="bg-[#ffffff4f] rounded-md m-3"
            required
            type="number"
            id="age"
            name="age"
            value={info.age}
            onChange={handleInput}
          />
        </label>

        <label className="m-3 text-white" htmlFor="gender">
          Gender:{" "}
          <select
            className="bg-[#ffffff4f] text-black rounded-md m-3"
            name="gender"
            id="gender"
            value={info.gender}
            onChange={handleInput}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label className="m-3 text-white" htmlFor="height">
          Height:{" "}
          <input
            className="bg-[#ffffff4f] rounded-md m-3"
            required
            type="number"
            id="height"
            name="height"
            value={info.height}
            onChange={handleInput}
          />
        </label>

        <label className="m-3 text-white" htmlFor="weight">
          Weight:{" "}
          <input
            className="bg-[#ffffff4f] rounded-md m-3"
            required
            type="number"
            id="weight"
            name="weight"
            value={info.weight}
            onChange={handleInput}
          />
        </label>

        <label className="m-3 text-white" htmlFor="activitylevel">
          Activity Level:
          <select
            className="bg-[#ffffff4f] text-black  rounded-md m-3"
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

        <FirstButton />
      </form>
    </div>
  );
}

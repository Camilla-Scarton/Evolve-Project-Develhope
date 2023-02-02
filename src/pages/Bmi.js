import { useState } from "react";
import { Link } from "react-router-dom";
import { FirstButton } from "../components/FirstButton";

export default function Bmi() {
    const [info, setInfo] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        activitylevel: "level_2",
    });
    const [data, setData] = useState(null);


    const handleInput = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value,
        });
    }

    const fetchData = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${info.age}&gender=${info.gender}&height=${info.height}&weight=${info.weight}&activitylevel=${info.activitylevel}`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '47f4c893cemshf0974c486258b66p1ad651jsnc5044bc70078',
                        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
                    }
                });
            const result = await response.json();
            setData(result.data);
            console.log(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="w-full bg-gradient-to-tr drop-shadow-lg from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700 dark:to-blue-400 flex flex-col items-center justify-center" onSubmit={fetchData} >
                <label className="m-3 text-white" htmlFor="age">Age: <input className="bg-[#ffffff4f] rounded-md m-3" required type="text" id="age" name="age" value={info.age} onChange={handleInput} /></label>

                <br></br>
                <label className="m-3 text-white" htmlFor="gender">Gender: <input className="bg-[#ffffff4f] rounded-md m-3" id="gender" name="gender" value={info.gender} onChange={handleInput} /></label>

                <br></br>
                <label className="m-3 text-white" htmlFor="height">Height: <input className="bg-[#ffffff4f] rounded-md m-3" required type="text" id="height" name="height" value={info.height} onChange={handleInput} /></label>

                <br></br>
                <label className="m-3 text-white" htmlFor="weight">Weight: <input className="bg-[#ffffff4f] rounded-md m-3" required type="text" id="weight" name="weight" value={info.weight} onChange={handleInput} /></label>

                <br></br>
                <label className="m-3 text-white" htmlFor="activitylevel">Activity Level:</label>
                <select className="bg-[#ffffff4f]  rounded-md m-3" name="activitylevel" id="activitylevel" value={info.activitylevel} onChange={handleInput}>
                    <option value="level_1">Sedentary: little or no exercise</option>
                    <option value="level_2">Exercise 1-3 times/week</option>
                    <option value="level_3">Exercise 4-5 times/week</option>
                    <option value="level_4">Daily exercise or intense exercise 3-4 times/week</option>
                    <option value="level_5">Intense exercise 6-7 times/week</option>
                    <option value="level_6">Very intense exercise daily, or physical job</option>
                </select>
                <br></br>
                <FirstButton />
                {data && <Link to="/bmi/results" state={{data: data}}> <button className="drop-shadow-xl text-white bg-gradient-to-r  rounded-md px-10 py-2 m-5  from-blue-900 to-purple-800 hover:from-purple-800 hover:to-blue-900  dark:hover:from-blue-400 dark:hover:to-violet-500 hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)] dark:to-blue-400 dark:from-violet-500"><span>Results</span></button></Link>}
            </form>

        </div>)

}
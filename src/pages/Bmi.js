import { useState } from "react";

import { FirstButton } from "../components/FirstButton";

export default function Bmi() {
    const [info, setInfo] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        activitylevel: "level_2",
    });

    const handleInput = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value,
        });
    }

    async function fetchData(event) {
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
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }


    return <div>
        <form className="bg-gradient-to-tr drop-shadow-lg m-5 from-blue-300 via-blue-900 to-purple-400 sm:max-w-sm max-w-[240px] rounded-md overflow-hidden" onSubmit={fetchData} >
            <label htmlFor="age">Age:</label>
            <input className="bg-purple-400 mx-5 my-3 sm:max-w-sm rounded-md overflow-hidden" required type="text" id="age" name="age" value={info.age} onChange={handleInput}></input>
            <br></br>
            <label htmlFor="gender">Gender:</label>
            <select className="bg-purple-400 mx-5 my-3 sm:max-w-sm rounded-md overflow-hidden" id="gender" name="gender" value={info.gender} onChange={handleInput}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br></br>
            <label htmlFor="height">Height:</label>
            <input className="bg-purple-400 mx-5 my-3 sm:max-w-sm rounded-md overflow-hidden" required type="text" id="height" name="height" value={info.height} onChange={handleInput}></input>
            <br></br>
            <label htmlFor="weight">Weight:</label>
            <input className="bg-purple-400 mx-5 my-3 sm:max-w-sm rounded-md overflow-hidden" required type="text" id="weight" name="weight" value={info.weight} onChange={handleInput}></input>
            <br></br>
            <label htmlFor="activitylevel">Activity Level:</label>
            <select className="bg-purple-400 mx-5 my-3 sm:max-w-sm rounded-md overflow-hidden" name="activitylevel" id="activitylevel" value={info.activitylevel} onChange={handleInput}>
                <option value="level_1">Sedentary: little or no exercise</option>
                <option value="level_2">Exercise 1-3 times/week</option>
                <option value="level_3">Exercise 4-5 times/week</option>
                <option value="level_4">Daily exercise or intense exercise 3-4 times/week</option>
                <option value="level_5">Intense exercise 6-7 times/week</option>
                <option value="level_6">Very intense exercise daily, or physical job</option>
            </select>
            <br></br>
            <FirstButton/>
        </form>
    </div>
}
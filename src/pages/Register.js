import { Link } from "react-router-dom"
import { useState } from "react"

export function Register() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    function handleInputChange(event){
        const {name, value} = event.target
        setData(data =>{
            return{
                ...data,
                [name]: value
            }
        })
        console.log(data)
    }


    return (
        <div className=" flex justify-center items-center w-full h-full bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700
        dark:to-blue-400">
            <div className=" bg-white w-[28rem] h-[40rem] drop-shadow-lg shadow-lg hover:shadow-xl dark:shadow-slate-600 dark:hover:shadow-slate-600 rounded-md">
                <div className="flex justify-center p-14">
                    <h1>Register</h1>
                </div>
                <div>
                    <form className="flex flex-col px-14 gap-4 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-[2.85rem] w-6 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[14.85rem] w-6 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[8.85rem] w-6 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>



                        <label for="email">
                            <span>Username</span>
                        </label>
                        <input className=" pl-7 border-b-2 focus:outline-none h-10" onChange={handleInputChange} value={data.username} type="text" name="username" placeholder="Type your Username" />
                        <label for="email">
                            <span>E-mail</span>
                        </label>
                        <input className=" pl-7 border-b-2 focus:outline-none h-10" onChange={handleInputChange} value={data.email} type="email" name="email" placeholder="Type your E-mail" />
                        <label for="password">
                            <span>Password</span>
                        </label>
                        <input className="pl-7 border-b-2 focus:outline-none h-10" onChange={handleInputChange} value={data.password} type="password" name="password" placeholder="Type your Password" />
                    </form>
                </div>
                <div className="flex justify-center mt-7">
                    <button className="drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2  
            from-blue-900 to-purple-700 hover:from-purple-700 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 w-80  transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500" type="submit">Register</button>
                </div>
                <div className="flex justify-center mt-28">
                    <small>Sei già registrato? <Link to="/login"><span className=" text-blue-800">Clicca qui</span></Link></small>
                </div>
            </div>
        </div>
    )
}
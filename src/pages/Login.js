import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pb from "../lib/pocketbase";
import { Profile } from "./Profile";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = data;

    setLoading(true);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);

    if (pb.authStore.isValid) {
      navigate("/profile", { replace: true });
      window.location.reload(false);
    }
  }

  return (
    <>
      {pb.authStore.isValid ? (
        <Profile />
      ) : (
        <div
          className=" flex justify-center items-center w-full h-full bg-gradient-to-tr from-blue-300 via-blue-900 to-purple-400 dark:from-purple-300 dark:via-purple-700
        dark:to-blue-400"
        >
          <form
            onSubmit={handleSubmit}
            className=" bg-white w-[28rem] h-[40rem] drop-shadow-lg shadow-lg hover:shadow-xl dark:shadow-slate-600 dark:hover:shadow-slate-600 rounded-md"
          >
            <div className="flex justify-center p-14">
              <h1>Login</h1>
            </div>
            <div>
              <div className="flex flex-col px-14 gap-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-[2.85rem] text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-[8.85rem] text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <label htmlFor="email">
                  <span>E-mail</span>
                </label>
                <input
                  required
                  className=" pl-7 border-b-2 focus:outline-none h-10"
                  onChange={handleInputChange}
                  value={data.email}
                  type="email"
                  name="email"
                  placeholder="Type your E-mail"
                />
                <label htmlFor="password">
                  <span>Password</span>
                </label>
                <input
                  required
                  className="pl-7 border-b-2 focus:outline-none h-10"
                  onChange={handleInputChange}
                  value={data.password}
                  type="password"
                  name="password"
                  placeholder="Type your Password"
                />
              </div>
            </div>
            <div className="flex justify-center mt-7">
              <button
                className="drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2  
            from-blue-900 to-purple-700 hover:from-purple-700 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 w-80  transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="flex justify-center mt-52">
              <small>
                Not registered yet?{" "}
                <Link to="/register">
                  <span className=" text-blue-800"> Click here!</span>
                </Link>
              </small>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

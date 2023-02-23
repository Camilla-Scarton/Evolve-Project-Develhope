/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      transition: {tutte:"transition: background-image 0.3s"},
      height:{
        "128": "36rem",
        "67" : "47rem"
      },
    },
  },
  plugins: [],
}

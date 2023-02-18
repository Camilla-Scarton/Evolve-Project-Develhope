/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      transition: {tutte:"transition: background-image 0.3s"},
      height:{
        "128": "42rem",
        "67" : "67rem"
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      transition: {tutte:"transition: background-image 0.3s"},
      height:{
        "41": "41rem",
        "67" : "45rem"

      },
      width:{
        "128": "28rem"
      }
    },
  },
  plugins: [],
}

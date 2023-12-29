/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red" : "#FF4500", 
        "green" : "#00FF00",
        "secondary" : "#555",
        "primaryBG" : "#FCFCFC"
      },
      fontFamily: {
        "primary" : ['Inter','sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}


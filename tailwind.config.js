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
        "green" : "#3CB371",
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


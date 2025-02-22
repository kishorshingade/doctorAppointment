/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        buttonBgColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irishBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        primaryColor: "rgb(151,113,255)"
      },

      boxShadow :{
        panelShadow : "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      }
    },
  },
  plugins: [],
}


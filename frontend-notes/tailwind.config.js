/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "imagen-bg": "url('/src/auth/assets/img/Street Life - Head Gear.svg')"
      }
      ,
      colors:{
        "color-bg":"#0A0F14",
        "color-secondary":"#FAFAFA",

        "color-button":"#2383E2",
        "color-border":"#bdbdbd",

        "color-bg-aside":"#ededed",

        "color-bg-main":"#f7f7f7",



      }
    },
  },
  plugins: [],
}

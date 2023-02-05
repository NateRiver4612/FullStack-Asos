/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        //font-family: 'Pacifico', cursive;
        //'Raleway', sans-serif font-family: 'Playfair Display SC', serif;
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        sevillana: ["Sevillana", "cursive"],
        playfair: ["Playfair Display SC", "serif"],
      },
    },
  },
  variants: {
    borderColor: ["group-hover"],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tw-elements/dist/plugin"),
  ],
};

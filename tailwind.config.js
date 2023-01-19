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
    extend: {},
  },
  variants: {
    borderColor: ["group-hover"],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tw-elements/dist/plugin"),
  ],
};

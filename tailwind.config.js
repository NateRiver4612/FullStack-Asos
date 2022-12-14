/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    borderColor: ["group-hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

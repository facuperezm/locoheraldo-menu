/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Passion: ["Passion One", ...defaultTheme.fontFamily.sans],
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "back-image": "url('../public/images/background.jpg')",
      },
    },
  },
  plugins: [],
};

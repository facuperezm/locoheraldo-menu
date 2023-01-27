/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        serif: ["var(--font-passion)"],
      },
      backgroundImage: {
        "back-image": "url('../public/images/background.jpg')",
      },
      colors: {
        greenLoco: "#554219",
        borderLoco: "#dbb8b8",
      },
    },
  },
  plugins: [],
};

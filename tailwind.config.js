/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      monts: ["Montserrat", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}

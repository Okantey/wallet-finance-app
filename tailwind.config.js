/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5771F9",
        secondary: "#7A7AFD",
        shade: "#151940",
        white: "#F8F9FB",
        gray: "#E9ECF1"

      }
    },
  },
  plugins: [],
}


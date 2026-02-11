/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b2c3f",
        slate: "#48596B",
        steel: "#7A90A7",
        sky: "#AFCAE8",
        cocoa: "#5C4935",
        sand: "#A78A6A",
        beige: "#D8CDBB",
        cream: "#EFEAE4",
      },
      fontFamily: {
        title: ['"Yeseva One"', "serif"],
        body: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

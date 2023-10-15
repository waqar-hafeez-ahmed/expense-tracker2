/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42224A",
        secondary: "#4F215A",
        tertiary: "#8F659A",
        contrast: "#EF8767",
        natural: "#666666",
      },
      fontFamily: {
        baloo: ["Baloo Bhaina 2", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

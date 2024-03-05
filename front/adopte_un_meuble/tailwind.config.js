/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMode: {
          background: "#FDFDFC",
          text: "#21201C",
          secondarytext: "#63635E",
        },
        darkMode: {
          background: "#191918",
          text: "#EEEEEC",
          secondarytext: "#B5B3AD",
        },
      },
    },
  },
  plugins: [],
};

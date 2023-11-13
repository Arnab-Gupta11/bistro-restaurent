/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        goldenYelow: "#BB8506",
      },
      fontFamily: {
        cinzel: "'Cinzel', serif",
        inter: "'Inter', sans-serif",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
};

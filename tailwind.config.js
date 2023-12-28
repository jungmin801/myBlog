/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#9781c4",
        "red-color": "#28303f",
        "black-color": "#222222",
        "gray-color": "#767676",
        "border-color": "#ddd",
        "bg-main": "#f5f5f5",
        "bg-light": "#f9f9f9",
        "gray-font": "#6f6f6f",
      },
    },
  },
  plugins: [],
};

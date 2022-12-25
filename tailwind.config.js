/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      "50p": "50px",
      "34p": "34px",
      "5p": "5px",
      "10p": "10px",
    },
    extend: {
      objectPosition: {
        "center-bottom": "50% 0%",
      },
    },
  },
  plugins: [],
};

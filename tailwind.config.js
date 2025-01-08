/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004788",
        gold: "#D29622",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

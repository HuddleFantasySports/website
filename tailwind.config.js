/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"], // default sans stack
      },
      animation: {
        "gradient-x": "gradient-x 1s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};

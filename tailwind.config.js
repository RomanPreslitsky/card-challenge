/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      boxShadow: {
        default: "8px 8px black",
        hover: "16px 16px black",
      },
    },
  },
  plugins: [],
};

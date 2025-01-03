
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: "#000",
        secondary: "#173B45",
        "sky-blue": "#B43F3F",
        gray: "#F8EDED",
        gold: "#FFD700", // Gold color
        silver: "#C0C0C0", // Silver color
        palladium: "#E6E6E6", // Palladium color
        bronze: "#CD7F32", // Bronze color
        platinum: "#E5E4E2", // Platinum color
       
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

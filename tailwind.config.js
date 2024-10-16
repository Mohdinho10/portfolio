/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
        secondaryColor: "red",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        move: {
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        scaleAnimation: "move 3s linear infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          md: "30px",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};

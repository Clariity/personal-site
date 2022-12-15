/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#60b0f4",
      primaryhover: "#4c8ec7",
      primarylight: "#60b0f488",
      secondary: "#ffffff",
      secondaryhover: "#dfdfdf",
      yellow: "#e3b341",
    },
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        slideInLeft: "slideInLeft .5s ease-in-out",
        slideInRight: "slideInRight .5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(10%)",
            "-webkit-transform": "translatey(10%)",
          },

          "50%": {
            transform: "translatey(0%)",
            "-webkit-transform": "translatey(0%)",
          },

          "100%": {
            transform: "translatey(10%)",
            "-webkit-transform": "translatey(10%)",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translatex(-30%)",
            "-webkit-transform": "translatex(-30%)",
            opacity: "0%",
          },
          "60%": {
            transform: "translatex(3%)",
            "-webkit-transform": "translatex(3%)",
            opacity: "80%",
          },
          "100%": {
            transform: "translatex(0%)",
            "-webkit-transform": "translatex(0%)",
            opacity: "100%",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translatex(30%)",
            "-webkit-transform": "translatex(30%)",
            opacity: "0%",
          },
          "60%": {
            transform: "translatex(-3%)",
            "-webkit-transform": "translatex(-3%)",
            opacity: "80%",
          },
          "100%": {
            transform: "translatex(0%)",
            "-webkit-transform": "translatex(0%)",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};

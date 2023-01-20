/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000",
      coolBlack: "#363638",
      white: "#fff",
      darkYellow: "#ffe373",
      saphhire: "#173068",
      iron: "#ced4da",
      marine: "#173068",
      pineGreen: "#007F80",
      ashGray: " #ADB5BD",
    },
    fontFamily: {
      campfire: ['Roboto Slab', 'serif'],
      visby: ['Sofia Sans', 'sans - serif'],
    },
    screens: {
      xs: '480px',
      sm: "640px",
      md: "768px",
      mdl: "976px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {

    },
  },
  plugins: [],
}

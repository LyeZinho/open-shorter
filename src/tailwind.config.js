// module.exports = {
//   mode: 'jit',
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

    /*
    'picton-blue': {
        '50': '#f1f9fe',
        '100': '#e2f3fc',
        '200': '#bfe6f8',
        '300': '#87d3f2',
        '400': '#53c1ea',
        '500': '#20a5d7',
        '600': '#1285b7',
        '700': '#106a94',
        '800': '#115a7b',
        '900': '#144b66',
        '950': '#0d3044',
    },
    */ 

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: {
        50: "#f1f9fe",
        100: "#e2f3fc",
        200: "#bfe6f8",
        300: "#87d3f2",
        400: "#53c1ea",
        500: "#20a5d7",
        600: "#1285b7",
        700: "#106a94",
        800: "#115a7b",
        900: "#144b66",
        950: "#0d3044",
      }
    },
  },
  plugins: [],
});


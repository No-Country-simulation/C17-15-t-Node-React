const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#B671FF",
        "secondary": "#E985C1",
        "third": "#193e5a",
        "four": "#29bcc7",
        "amarillo": "#fcdc59",
        "dorado": "#efb810",
        "azul1": "#43CEDE",
        "azul2": "#436CDE",
        "azul3": "#4A43DE"
      },
      screens: {
        "cellphone": "360px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px"
      }
    },
  },
  plugins: [],
});

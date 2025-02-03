/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "900px",
        br: "1125px",
      },
      backgroundImage: {
        boxGradientTransparent:
          "linear-gradient(140deg, rgba(0,150,119,1) 0%, rgba(80,184,72,0.11) 100%)",
        boxGradient:
          "linear-gradient(140deg, rgba(0,150,119,1) 0%, rgba(80,184,72,1) 0%)",
        boxGradientTransparentPink:
          "linear-gradient(140deg, rgba(237,21,128,1) 0%, rgba(241,112,33,0.11) 100%)",
        boxGradientPink:
          "linear-gradient(140deg, rgba(237,21,128,1) 0%, rgba(241,112,33,1) 0%)",
        hoverGradientBluePink:
          "linear-gradient(160deg, rgba(54,136,231,1) 0%, rgba(233,21,130,1) 100%)",
        hoverGradientGreen:
          "linear-gradient(160deg, rgba(21,151,120,1) 0%, rgba(96,184,73,1) 100%)",
      },
      colors: {
        primaryGreen: "#009677",
        secondaryGreen: "#50B848",
        bodyBackground: "#F7F7F7",
        textGrey: "#282828",
        textGreyAlt: "#363636",
        textLightGrey: "#9D9D9D",
        brandGrey: "#E4E4E4",
        brandGreen: "#8DC63F",
        brandBlue: "#00C0E8",
        brandOrange: "#F37021",
        brandPink: "#ED0080",
        brandPinkAlt: "#E81582",
      },
      boxShadow: {
        radioButton: "0px 0px 5px 1px",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "1024px",
      lg: "1440px",
    },
    colors: {
      primary: {
        100: "#3772FF",
        200: "#9757D7",
        300: "#EF466F",
        400: "#45B26B",
      },
      secondary: {
        100: "#4BC9F0",
        200: "#E4D7CF",
        300: "#FFD166",
        400: "#CDB4DB",
      },
      neutrals: {
        100: "#FCFCFD",
        200: "#F4F5F6",
        300: "#E6E8EC",
        400: "#B1B5C3",
        500: "#777E90",
        600: "#353945",
        700: "#23262F",
        800: "#141416",
      },
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", "20px"],
      sm: ["14px", "24px"],
      lg: ["16px", "24px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["40px", "48px"],
      "4xl": ["48px", "56px"],
      "5xl": ["64px", "64px"],
      "6xl": ["96px", "96px"],
    },
  },
  plugins: [],
};

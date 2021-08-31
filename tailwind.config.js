module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#04001B",
        secondary: "#FF005C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Barlow", "Fraunces", "ui-sans-serif", "system-ui"]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};

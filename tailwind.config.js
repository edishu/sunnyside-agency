module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      barlow: ["Barlow", "ui-sans-serif", "system-ui"],
      fraunces: ["Fraunces", "ui-sans-serif", "system-ui"]
    },
    extend: {
      colors: {
        footerCyan: "rgb(144, 212, 197)",
        footerTxt: "rgb(44, 115, 99)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

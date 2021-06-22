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
        footerTxt: "rgb(44, 115, 99)",
        testimonialCream: "rgb(255, 251, 248)",
        grayBlue: "hsl(210, 4%, 67%)",
        drkGrayBlue: "hsl(213, 9%, 39%)",
        grayisBlue: "hsl(232, 10%, 55%)",
        desatBlue: "hsl(212, 27%, 19%)",
        drkBlue: "hsl(198, 62%, 26%)",
        desatCayn: "hsl(167, 40%, 24%)",
        softRed: "hsl(7, 99%, 70%)",
        brndYellow: "hsl(51, 100%, 49%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

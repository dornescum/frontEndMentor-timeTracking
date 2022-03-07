module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'rubik': ['"Rubik"', 'sans-serif'],
      },
      colors:{
        lightRedWork:"#ff8c66",
        lightRedStudy:"#ff5c7c",
        softBlue:"#56c2e6",
        limeGreen:"#4acf81",
        violet:"#7536d3",
        softOrange:"#f1c65b",
        myBlue:{
          100:"#0f1424",
          200:"#1c1f4a",
          300:"#5847eb",
          400:"#6f76c8",
          500:"#bdc1ff"
        }
      },
    },
  },
  plugins: [],
}

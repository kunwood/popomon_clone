/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        my_flex: "1 0 100%",
      },
      gridAutoColumns: {
        my_col: "minmax(0, 3fr",
      },
      gridAutoRows: {
        my_rows: "minmax(15rem, auto)",
      },
      translate: {
        px70: "-70rem",
        px96: "-96rem",
        px144: "-144rem",
      },
      fontSize: {
        rem2_5: ["2.5rem"],
        rem2_0: ["2rem"],
        rem3_0: ["3rem"],
        rem1_8: ["1.8rem"],
        rem1_2: ["1.2rem"],
        rem1_1: ["1.1rem"],
        rem1_3: ["1.3rem"],
        rem1_5: ["1.5rem"],
      },
      height: {
        calc: "calc(100vh - 2rem);",
        rem25_4: "25.4rem",
        rem1_7: "17rem",
        rem1_6: "16rem",
      },
      width: {
        rem71_0: "71rem",
        rem34_0: "340rem",
        rem2_0: "20rem",
        rem1_8: "18rem",
        rem1_0: "12rem",
      },
      colors: {
        main_color: "#8467fd",
        back_color: "#ededed",
        border_text_color: "#8a8a8a",
      },
    },
  },
  plugins: [],
};

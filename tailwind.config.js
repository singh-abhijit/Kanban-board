/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: `'Inter', sans-serif`,
      },
      colors: {
        primary: {
          gray: "#787486",
          heading: "#0D062D",
        },
        notification: {
          dot: "#D8727D",
        },
        border: {
          primary: "DBDBDB",
        },
        bg: {
          light: "#F5F5F5",
        },
        copyright: "#98A2B3",
        cardBlue: "#175CD3",
        "ghost-white": "#FCFCFD",
      },
    },
  },
  plugins: [],
};

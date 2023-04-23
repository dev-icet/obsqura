/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        nicebg:
          "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),rgba(146, 148, 155, 0.5) , transparent 50%)",
        ...theme,
      }),
      background: {
        hoverBg: "linear-gradient(90.73deg, #484A54 -86.18%, #25262B 101.37%)",
      },
      colors: {
        woodsmoke: {
          50: "#f6f6f7",
          100: "#e0e2e7",
          200: "#c0c6cf",
          300: "#99a1af",
          400: "#747b8d",
          500: "#5a6072",
          600: "#464c5b",
          700: "#3b3f4a",
          800: "#32343d",
          900: "#2c2f35",
          950: "#111216",
        },
        white: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
          1000: "#ffffff",
        },
        shark: {
          50: "#f4f5f7",
          100: "#e3e5ea",
          200: "#caced7",
          300: "#a6aeba",
          400: "#798497",
          500: "#5e687c",
          600: "#515869",
          700: "#464b58",
          800: "#3e424c",
          900: "#2d2f36",
          950: "#22242a",
        },
        green: {
          50: "#e9ffe6",
          100: "#d0fec9",
          200: "#a5fc9a",
          300: "#6cf75f",
          400: "#3dec2f",
          500: "#1fea12",
          600: "#0fa808",
          700: "#0d800b",
          800: "#10650f",
          900: "#125512",
          950: "#042f05",
        },
        monza: {
          50: "#fff0f1",
          100: "#ffdddf",
          200: "#ffc1c5",
          300: "#ff969d",
          400: "#ff5a65",
          500: "#ff2736",
          600: "#fb0717",
          700: "#e00110",
          800: "#af0510",
          900: "#900c15",
          950: "#4f0005",
        },
        "blue-ribbon": {
          50: "#edf9ff",
          100: "#d6f0ff",
          200: "#b5e6ff",
          300: "#83d8ff",
          400: "#48c0ff",
          500: "#1e9fff",
          600: "#0680ff",
          700: "#0063eb",
          800: "#0852c5",
          900: "#0d499b",
          950: "#0e2d5d",
        },
        california: {
          50: "#fffceb",
          100: "#fff6c6",
          200: "#ffeb88",
          300: "#ffda4a",
          400: "#fec921",
          500: "#eea006",
          600: "#dc7f03",
          700: "#b75906",
          800: "#94440c",
          900: "#7a390d",
          950: "#461c02",
        },
        yellow: {
          50: "#fcffe7",
          100: "#f5ffc1",
          200: "#efff86",
          300: "#efff41",
          400: "#f6ff0d",
          500: "#fffb00",
          600: "#d1bc00",
          700: "#a68802",
          800: "#896a0a",
          900: "#74560f",
          950: "#442f04",
        },
      },
    },
  },
  plugins: [],
};

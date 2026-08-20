/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EE",
        panel: "#FFFFFF",
        ink: "#1B1B1E",
        navy: {
          DEFAULT: "#12213D",
          light: "#1B3054",
          dim: "#3A4A66",
        },
        oxblood: {
          DEFAULT: "#7A2A2A",
          light: "#8F3535",
          dark: "#5C1F1F",
        },
        brass: "#A9823C",
        slate: {
          DEFAULT: "#5B6472",
          light: "#8890A0",
        },
        line: "#E4E0D5",
      },
      fontFamily: {
        display: ["'Source Serif 4'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        laid: "repeating-linear-gradient(180deg, rgba(18,33,61,0.025) 0px, rgba(18,33,61,0.025) 1px, transparent 1px, transparent 3px)",
      },
    },
  },
  plugins: [],
};

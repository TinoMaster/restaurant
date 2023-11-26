import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#D6B57D",
        primaryLight: "#404040",
        secondary: "#C6834C",
        darkMode: "#262626",
        lightDarkMode: "#404040",
      },
      maxWidth: {
        "1080p": "1920px",
        "720p": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;

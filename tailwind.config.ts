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
        secondary: "#ec4749",
        darkMode: "#262626",
        lightDarkMode: "#404040",
        primaryPal: {
          "50": "#faf7f2",
          "100": "#f3eee1",
          "200": "#e6dcc2",
          "300": "#d5c49c",
          "400": "#c3a673",
          "500": "#b79158",
          "600": "#a97d4d",
          "700": "#8d6541",
          "800": "#72523a",
          "900": "#5d4431",
          "950": "#322318",
        },
        secondaryPal: {
          "50": "#fef2f2",
          "100": "#fde3e3",
          "200": "#fdcbcc",
          "300": "#faa7a8",
          "400": "#f57476",
          "500": "#ec4749",
          "600": "#d82a2c",
          "700": "#b61f21",
          "800": "#971d1f",
          "900": "#611819",
          "950": "#440b0c",
        },
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

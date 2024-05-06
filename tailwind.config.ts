import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
    },
    container: {
      center: true,
      padding: "8px",
    },
    colors: {
      "black-900": "#141414",
      "black-800": "#1F1D1D",
      "white": "#FFFFFF",
      "grey-100": "#F0F0F0",
      "grey-200": "#E6E6E6",
      "grey-300": "#C6C4C2",
      "grey-400": "#424141",
      "orange": "#F2890F",
      "transparent": "transparent",
    },
    fontFamily: {
      raleway : ["var(--font-raleway)"],
    },
    fontSize: {
      "h1": ["92px", {
        lineHeight: "87px",
        fontWeight: "900",
      }],
      "h2": ["64px", {
        lineHeight: "70px",
        fontWeight: "800",
      }],
      "h3": ["32px", {
        lineHeight: "38px",
        fontWeight: "800",
      }],
      "h4": ["24px", {
        lineHeight: "28px",
        fontWeight: "700",
      }],
      "12": ["12px", {
        lineHeight: "16px",
      }],
      "14": ["14px", {
        lineHeight: "20px",
      }],
      "15": ["15px", {
        lineHeight: "22px",
        fontWeight: "500",
      }],
    },
  },
  plugins: [],
};
export default config;

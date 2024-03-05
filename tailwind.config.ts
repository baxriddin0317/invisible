import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Mont"],
        helvetica: ["Helvetica Neue"],
      },
      maxWidth: {
        xxl: "87rem",
      },
      colors: {
        brand: {
          backwall: "#f1f2fb",
          black: "#202327",
          purple: "#F9F5FF",
          violet: "#f0e8ff",
          blue: {
            50: "#f6f9fc",
            100: "#06aff8",
            200: "#1f203e",
            300: "#22223e7a",
            400: "#28278c",
            500: "#635bff",
          },
          gray: {
            50: "#f5f5f8",
            100: "#f6f6f6",
            200: "#78757f",
            300: "#a9a9aa",
            400: "#b2abc3",
            500: "#dfdbe8",
            600: "#4a4062",
          },
          btn: {
            DEFAULT: '#00A690',
            hover: "#0A2540"
          }
        },
      },
      boxShadow: {
        xs: "0 5px 13px rgba(0, 0, 0, .14)",
        case: "0 20px 48px rgba(32, 35, 39, .24)",
        card: "0px 18px 36px -18px rgba(0,0,0,0.1),0px 30px 45px -30px rgba(50,50,93,0.25)",
      },
      backgroundImage: {
        // "customer-bg": "url('/public/assets/images/customer-bg.png')",
        // "state-bg": "url('./public/assets/images/state-bg.webp')",
        "feature-gr": "linear-gradient(rgba(255, 255, 255, 0), #f1f2fb)",
      },
      height: {
        17: "17rem",
        xl: "36rem",
      },
    },
  },
  plugins: [],
};
export default config;

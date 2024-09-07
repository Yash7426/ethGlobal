import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary-font": ["var(--font-primary)", "sans-sarif"],
      },
      colors: {
        primary: {
          "50": "#e4e9ff",
          "100": "#cfd6ff",
          "200": "#a8b2ff",
          "300": "#747fff",
          "400": "#443eff",
          "500": "#3013ff",
          "600": "#2600ff",
          "700": "#2600ff",
          "800": "#2200e4",
          "900": "#2000b0",
          "950": "#040013",
        },
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s",
        shimmer: "shimmer 2s linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

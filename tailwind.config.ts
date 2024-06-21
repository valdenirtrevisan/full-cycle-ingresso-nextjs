import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(24, 30, 36, 1)",
        secondary: "#2a323c",
        input: "#1d232a",
        "btn-primary": "#7480FF",
      },
      textColor: {
        default: "#a6adbb",
        "btn-primary": "#050617",
      },
      gridTemplateColumns: {
        "auto-fit-cards": "repeat(auto-fit, minmax(277px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;

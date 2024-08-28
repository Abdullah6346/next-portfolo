import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      laptop: { max: "768px" },
      slaptop: "768px",
      llaptop: { max: "1024px" },
      sslaptop: "1024px",
      desktop: "1042px",
      mdesktop: { max: "1042px" },
      ldesktop: "1520px",
      xldesktop: "1820px",
      smobile: { max: "500px" },
      lmobile: { max: "425px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

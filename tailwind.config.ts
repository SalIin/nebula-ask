import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { 200: "#E0E0E0", 500: "#EAEEF7" },
      },
      dropShadow: {
        base: "2px 2px 6px 0px rgba(84, 60, 151, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

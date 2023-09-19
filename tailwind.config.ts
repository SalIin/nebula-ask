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
      boxShadow: {
        base: "2px 2px 6px 0px rgba(84, 60, 151, 0.25)",
        dark: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        base: "linear-gradient(to bottom, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A1 74.96%)",
      },
    },
  },
  plugins: [],
};
export default config;

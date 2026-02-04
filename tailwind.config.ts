import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101113",
        sand: "#F7F3EE",
        clay: "#D9C7B8",
        rosewood: "#5B3A2E",
        sea: "#D8E9F0",
        olive: "#3C4A3E"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16,17,19,0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;

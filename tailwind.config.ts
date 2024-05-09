import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-high-contrast": "#18181b"
      },
      colors: {
        "dark-high-contrast": "rgba(244 244 245)"
      }
    }
  },
  plugins: [],
};
export default config;

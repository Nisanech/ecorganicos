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
        "eco-white": "var(--white)",
        "eco-black": "var(--black)",
        "light-gray": "var(--light-gray)",
        "medium-gray": "var(--medium-gray)",
        "dark-gray": "var(--dark-gray)",
        "light-green": "var(--light-green)",
        "medium-green": "var(--medium-green)",
        "dark-green": "var(--dark-green)",
        "darker-green": "var(--darker-green)",
        "neon-green": "var(--neon-green)",
      },
      fontFamily: {
        "kumbh-sans": ["KumbhSansFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        "light-yellow": "var(--light-yellow)",
        "dark-orange": "var(--dark-orange)",
      },
      fontFamily: {
        'kumbh-sans': ['KumbhSansFont', ...fontFamily.sans],
        'koulen': ['KoulenFont', ...fontFamily.sans],
        'jaldi': ['JaldiFont', ...fontFamily.sans],
        'lalezar': ['LalezarFont', ...fontFamily.sans],
        'langar': ['LangarFont', ...fontFamily.sans],
        'lemon': ['LemonFont', ...fontFamily.sans],
        'merienda': ['MeriendaFont', ...fontFamily.sans],
        'mervale-script': ['MervaleScriptFont', ...fontFamily.sans],
        'metal': ['MetalFont', ...fontFamily.sans],
        'pacifico': ['PacificoFont', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;

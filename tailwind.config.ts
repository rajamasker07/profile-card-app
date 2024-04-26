import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/*.{svg,j*g,j**g}",
  ],
  theme: {
    extend: {
      fontSize: {
        'normal': '18px'
      },
      colors: {
        'dark-cyan': 'var(--primary-dark-cyan)',
        'dark-blue': 'var(--primary-very-dark-desaturated-blue)',
        'dark-grayish-blue': 'var(--primary-dark-grayish-blue)',
        'neutral-dark-grey': 'var(--neutral-dark-gray)'
      },
      backgroundImage: {
        'pattern-card': 'url(/assets/bg-pattern-card.svg)',
      },
    },
  },
  plugins: [],
};
export default config;

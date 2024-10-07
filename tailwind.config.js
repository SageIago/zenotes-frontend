/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2B2B2B",
        "secondary": "#3B3B3B",
        "primary-100": "#A259FF",
        "primary-200": "",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        fontMono: ["Space Mono", "mono-space"]
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      }
    },
  },
  plugins: [],
}


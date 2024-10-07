
---

# Zenotes Frontend
This is the frontend UI configuration of the Zenotes Project done by Abdiel Wilson, and the rest of Team Zenote.....

## Tailwind Configuration

This project utilizes a custom [`tailwind.config.js`](./tailwind.config.js) file to manage Tailwind CSS configurations. This configuration file defines custom themes, colors, spacing, and responsive breakpoints used throughout the project.

### Copying the Tailwind Configuration

```javascript
// tailwind.config.js
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

## Then Copy All The Styling from the Components Area



---

The `./tailwind.config.js` link will work as long as the `README.md` and `tailwind.config.js` file are in the same directory.
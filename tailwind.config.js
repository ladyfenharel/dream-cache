/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dreamPurple: "#A855F7", // DreamVerse purple
        background: "#141221", // dark background example
        accent: "#9333EA", // optional: a brighter accent
        //bg
        primary: "#0F0D1A",   // use with bg-primary

        card: "#1A1829",      // use with bg-card
        elevated: "#2D2B3E",  // use with bg-elevated

        
      },
    },
  },
  plugins: [],
};


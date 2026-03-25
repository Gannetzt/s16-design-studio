/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryBackground: "#0A0A0A",
        secondaryBackground: "#111111",
        accentGold: "#D4AF37",
        textPrimary: "#F5F5F5",
        hoverAccent: "#C8A96A",
        lightBackground: "#FFFFFF",
        lightText: "#1A1A1A",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-softBlue": "hsl(215, 51%, 70%)",
        "c-cyan": "hsl(178, 100%, 50%)",
        "c-blueMain": "hsl(217, 54%, 11%)",
        "c-blueCard": "hsl(216, 50%, 16%)",
        "c-blueLine": "hsl(215, 32%, 27%)"
      }
    },
  },
  plugins: [],
}


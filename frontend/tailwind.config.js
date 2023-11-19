/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('./src/assets/banner.png')",
        'dotted-pattern': "url('./src/assets/dottedpattern.png')"
      },
      colors: {
        'moksha-black': '#131623',
        'moksha-blue': '#2686CE',
        'moksha-orange': '#FF7B1A',
        'moksha-red': '#FF5858',
        'moksha-dark-blue': '#171B2B',
        'moksha-gray': '#F2F2F2'
      }
    },
  },
  plugins: [require("daisyui")],
}


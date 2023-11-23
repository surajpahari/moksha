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
        'moksha-blue-mutant': '#19293F',
        'moksha-orange': '#FF7B1A',
        'moksha-red': '#FF5858',
        'moksha-mid-blue': '#1E4A78',
        'moksha-dark-blue': '#171B2B',
        'moksha-gray': '#F2F2F2',
        'moksha-white': '#D9D9D9'

      }
    },
  },
  plugins: [require("daisyui")],
}


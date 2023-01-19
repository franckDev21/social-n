const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px', // extra small
        ...defaultTheme.screens,
      },
      colors: {
        'primary': '#d8b138', // yellow
        'primary-light': '#fccc37', // yellow light
        'secondary': '#191919', // dark gray
      },
      fontFamily: {
        title: ['Montserrat'],
        body: ['Roboto']
      },
    },
  },
  plugins: [],
}

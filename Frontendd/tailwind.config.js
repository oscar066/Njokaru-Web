/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGray: '#f8f9fa',
        customGreen: '#1c6204',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}
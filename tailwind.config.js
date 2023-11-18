const { withMaterialColors } = require('tailwind-material-colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
      }
    },
  },
  plugins: [],
}

module.exports = withMaterialColors(config, {
  primary: '#0CAED6',
})


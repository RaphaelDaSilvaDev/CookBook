/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    'src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Oxygen, sans-serif'
      },
      dropShadow: {
        'app': '4px 8px 4px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        red: {
          100: '#FF8785',
          500: '#CC0300'
        },
        gray: {
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#AAAAAA',
          400: '#292929',
        }
      }
    },
  },
  plugins: [],
}

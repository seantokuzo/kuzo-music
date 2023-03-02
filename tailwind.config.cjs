/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kuzoPurp: '#b077ba',
        kuzoOrange: '#ffad61'
      },
      fontSize: {
        xxxs: '0.45rem',
        xxs: '0.6rem'
      }
    }
  },
  plugins: []
}

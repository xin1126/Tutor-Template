/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自訂顏色
      colors: {
        primary: '#2D2D2D',
        secondary: '#62DB54',
        gradual: '#09ACF5',
        dark: '#202020',
        gray: '#969696',
      },
    },
    container: {
      center: true,
      screens: {
        '2xl': '1300px',
      },
      padding: {
        DEFAULT: '12px',
      },
    },
    fontFamily: {
      'azeret': ['Azeret Mono', 'monospace',]
    }
  },
  plugins: [],
}

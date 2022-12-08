/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自訂顏色
      colors: {
        primary: '#155e75',
        secondary: '#6b21a8',
        success: '#065f46',
        warning: '#d97706',
        danger: '#991b1b',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xss: '320px',
      xs: '375px',
      sm: '480px',
      smd: '510px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        bgColor: '#524F4F'
      },
      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      },
      dropShadow: {
        'light': ['0px 0px 10px rgb(183, 245, 239)']
      }
    },
  },
  plugins: [],
}

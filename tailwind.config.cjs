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
        bgColor: '#524F4F',
        textColor: '#E2E2E2'
      },
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],
        'taipei': ['Taipei', 'sans-serif']
      },
      dropShadow: {
        'light': ['0px 0px 10px rgb(183, 245, 239)']
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate') }
      )
    })
  ],
}

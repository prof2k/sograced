module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      'xs': { 'max': '400px' },

      'xxs': { 'max': '300px' },

      'xxxs': { 'max': '200px' },

      'hdb': { 'max': '1100px' },
    },
    extend: {
      colors: {
        'theme-red': '#BC3838',
        'theme-green': '#285238'
      }
    },
  },
  plugins: [],
}

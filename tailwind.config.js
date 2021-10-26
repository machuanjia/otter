/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 11:49:57
 * @LastEditTime: 2021-10-26 15:20:30
 * @FilePath: /otter/tailwind.config.js
 * @Description:
 */
const colors = require('./colors')
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  darkMode: 'class', //false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        blue: colors.blue,
        blueGray: colors.blueGray,
        green: colors.green,
        yellow: colors.yellow,
        orange: colors.orange,
        red: colors.red,
      },
    },
    backgroundColor: {
      white: 'var(--color-bg-white)',
      main: 'var(--color-bg-main)',
      input: 'var(--color-bg-input)',
      disable: 'var(--color-bg-disable)',
      primary: 'var(--color-bg-primary)',
      hover: 'var(--color-bg-hover)',
      active: 'var(--color-bg-active)'
    },
    textColor: {
      white: 'var(--color-text-white)',
      main: 'var(--color-text-main)',
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      placeholder: 'var(--color-text-placeholder)',
      icon: 'var(--color-icon)',
    },
    borderColor: {
      divider: 'var(--color-divider)',
      primary: 'var(--color-divider-primary)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss({
      content: ['./layouts/**/*.html', './src/**/*.tsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}

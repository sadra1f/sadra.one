/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "jakarta-sans": [
        "Plus Jakarta Sans",
        "Helvetica",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [],
}

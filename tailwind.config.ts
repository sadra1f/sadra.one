import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
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
} satisfies Config

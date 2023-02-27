// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [],
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "language", content: "English" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      noscript: [],
      script: [],
      style: [],
    },
  },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      strict: false,
    },
  },
  ssr: true,
  telemetry: false,
})

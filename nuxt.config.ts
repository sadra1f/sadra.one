// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;700&display=swap",
          rel: "stylesheet",
        },
      ],
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
      title: "Sadra Saderi",
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

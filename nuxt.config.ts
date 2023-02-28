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
      titleTemplate: "%siteName",
    },
  },
  css: ["@/assets/css/main.css"],
  extends: ["nuxt-seo-kit"],
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
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://sadra.one",
      siteName: "Sadra Saderi",
      siteDescription: "Web Developer / Computer Engineering Student",
      language: "en",
      trailingSlash: true,
    },
    inindexable: true,
  },
  ssr: true,
  telemetry: false,
})

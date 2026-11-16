import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint", //
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@vueuse/nuxt/module",
  ],
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
      title: "Sadra Saderi",
      titleTemplate: "%siteName",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  components: [
    // TODO: There is a bug in Nuxt (or current config) that includes paths
    //       in parenthesis in the component name. Remove this part after fix.
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css"],
  fonts: {
    provider: "local",
  },
  ui: {
    colorMode: false,
  },
  vite: {
    plugins: [tailwindcss()],
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
    indexable: true,
  },
  ssr: true,
  telemetry: false,
});

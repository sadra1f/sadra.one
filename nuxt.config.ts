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
      title: "Sadra Saderi",
      titleTemplate: "%s — %siteName",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://sadra.one",
    name: "Sadra Saderi",
    description: "Web Developer / Computer Engineering Student",
    defaultLocale: "en",
    trailingSlash: true,
  },
  seo: {
    // Preserve route casing and omit query parameters from canonical URLs.
    canonicalLowercase: false,
    canonicalQueryWhitelist: [],
  },
  ogImage: {
    componentDirs: ["seo"],
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
    providers: {
      adobe: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      google: false,
      googleicons: false,
    },
    npm: { remote: false },
    families: [
      { name: "Inter Variable", provider: "npm", global: true },
      { name: "Libre Baskerville Variable", provider: "npm", global: true },
    ],
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
  ssr: true,
  telemetry: false,
});

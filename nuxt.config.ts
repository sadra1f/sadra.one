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
    meta: {
      ogImage: "/images/portrait.webp",
      ogImageAlt: "Sadra Saderi",
      ogImageWidth: 1100,
      ogImageHeight: 1200,
      ogImageType: "image/webp",
      twitterCard: "summary_large_image",
      twitterImage: "/images/portrait.webp",
      twitterImageAlt: "Sadra Saderi",
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
  ssr: true,
  telemetry: false,
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    '@vueuse/nuxt',
    "@nuxt/content",
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: "2024-08-24",
})
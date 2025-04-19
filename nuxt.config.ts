// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'], // Ensure proper string quoting and syntax
  css: [
    '~/assets/css/main.css',
    '~/assets/css/styles.css',
    '~/assets/css/skill.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
export default {
  // Target for static site generation
  target: 'static',

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700]
    }
  },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Plugins
  plugins: [],

  // Build configuration
  build: {},

  compatibilityDate: '2025-04-19'
};
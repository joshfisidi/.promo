export default defineNuxtConfig({
  // Alias configurations
  alias: {
    assets: "/<rootDir>/assets",
    // previous way to resolve a path
    // "@": resolve(__dirname, "/"),
  },

  // CSS configurations
  css: ["~/assets/main.scss"],

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxtjs/google-fonts',
  ],

  // Google Fonts (assuming you are using @nuxtjs/google-fonts)
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      // other font families you wish to add
    },
  },

  // PostCSS configurations
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Page transition
  app: {
    pageTransition: { name: 'Github', mode: 'out-in'}
  },
});

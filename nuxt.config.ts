export default defineNuxtConfig({
  // Alias configurations
  alias: {
    assets: "/assets",
    icons: '/favicon.ico'
  },
  
  // CSS configurations
  css: ["~/assets/main.scss", "~/assets/Josh.scss"],

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxtjs/google-fonts',
    'nuxt-icons',
    [
      'nuxt-viewport', {
        // Viewport options can be added here
      }
    ],
  ],

  // Google Fonts (assuming you are using @nuxtjs/google-fonts)
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      // Add other font families if needed
    },
  },

  // PostCSS configurations
  postcss: {
    plugins: {
      'postcss-nested': {},  // or 'postcss-nested': {}
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },

  // Page transition
  app: {
    // You can configure page transitions here
  },

  // Environment Variables Configuration
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    // Add any other environment variables you need
  },
});

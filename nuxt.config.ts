export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
    /// previous way to resolve a pass
    /// "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

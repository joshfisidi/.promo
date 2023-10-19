<script setup lang="ts">
// Example in a TypeScript file (e.g., ts file in your Nuxt project)
const supabaseUrl: string | undefined = process.env.SUPABASE_URL;
const supabaseKey: string | undefined = process.env.SUPABASE_KEY;


useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
    ]
  });
  
</script>

<template>
  <div class="App bg-slate-900 h-screen text-white">
    <NuxtLayout>
      <NuxtPage />
      <Footer/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>
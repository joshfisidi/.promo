<template>
  <div class="description-card mt-2 pt-1 pb-14 bg-gradient-to-r shadow-lg rounded-lg overflow-hidden p-5">
    <h1 class="fade-text font-bold text-white">Musician/Developer</h1>
    <p class=" text-gray-200 text-sm">Toronto, Canada</p>
  </div>
</template>

<script setup lang="ts">
// TypeScript script block
</script>

<style scoped lang="scss">
.description-card {
  // Custom SCSS styles if needed
  .fade-text {
    @apply opacity-90 hover:opacity-100 transition-opacity duration-300;
  }
}

</style>

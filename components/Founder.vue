<template>
    <div class="Founder-Footer flex z-10 justify-center text-center flex-grid px-4 mx-7 sm:p-2 2xl:py-0 p-2 text-black font-bold mby-2">
    <div class="founder">
        Fisidi Inc.
    </div>
</div>
  </template>
  
  <script setup lang="ts">
  // TypeScript setup (if needed)
  </script>
  
  <style scoped lang="scss">
  @import 'tailwindcss/utilities';
  
  .Founder-Footer .founder {
    @apply w-full text-center py-2 bg-black;
    font-size: 0.875rem; // 14px
  
    @media (min-width: theme('screens.sm')) {
      font-size: 1rem; // 16px for sm screens and larger
    }
  
    @media (min-width: theme('screens.md')) {
      font-size: 1.125rem; // 18px for md screens and larger
    }
  
    @media (min-width: theme('screens.lg')) {
      font-size: 1.25rem; // 20px for lg screens and larger
    }
    @media (min-width: theme('screens.xl')) {
        font-size: 2.25rem;
        flex: hidden; // 20px for lg screens and larger
      }
      @media (min-width: theme('screens.2xl')) {
       flex: hidden; // 20px for lg screens and larger
      }
  
    // Additional responsive font sizes can be added here if necessary
  }
  </style>
  
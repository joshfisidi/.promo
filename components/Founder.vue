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

  @media (min-width: 640px) { /* sm */
    font-size: 1rem; // 16px
  }

  @media (min-width: 768px) { /* md */
    font-size: 1.125rem; // 18px
  }

  @media (min-width: 1024px) { /* lg */
    font-size: 1.25rem; // 20px
  }

  @media (min-width: 1280px) { /* xl */
    font-size: 2.25rem;
  }

  @media (min-width: 1536px) { /* 2xl */
    // No specific style needed for 2xl in your code snippet
  }
}
</style>

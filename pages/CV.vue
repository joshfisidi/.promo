<template>
    <div class="flex justify-center flex-wrap gap-4">
      <div v-for="n in 3" :key="n" class="flex flex-col gap-4">
        <div v-for="m in 3" :key="m" class="card" :class="{'rounded-lg': m !== 2, 'odd-shape': m === 2}">
          <div class="content">
            Card {{ n }}-{{ m }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Component logic here
  };
  </script>
  
  <style scoped>
  .card {
    @apply bg-white shadow-md p-4 w-64 h-48;
  }
  
  .odd-shape {
    @apply rounded-tl-3xl rounded-br-3xl; /* Example of a different shape */
  }
  
  .content {
    @apply text-center;
  }
  
  @media (max-width: 640px) { /* Example of a Tailwind breakpoint for small screens */
    .card {
      @apply w-full;
    }
  }
  </style>
  
<template>
    <div class="grid-container">
      <h1 class="h1 text-custom-red">Coin Collection</h1>

      <CircleCard v-for="item in circleItems" :key="item.id">
        {{ item.content }}
      </CircleCard>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import CircleCard from '~/components/CircleCard.vue';
  import type { CircleItem } from '~/interfaces/CircleItem'; // Adjust the import path as needed
  
  const circleItems = ref<CircleItem[]>([
    { id: 1, content: 'Eth' },
    { id: 2, content: 'ADA' },
    { id: 3, content: 'Coin' },
    
    // Add more items as needed
  ]);
  </script>
  
  <style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Adjust minmax as needed */
    gap: 20px; /* Space between items */
    justify-content: center;
    padding: 20px;
}
  /* ...your existing styles... */
  </style>
  
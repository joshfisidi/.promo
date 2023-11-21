<template>
    <div class="grid-container">
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
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
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
  
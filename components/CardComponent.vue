<template>
  <div class="relative w-full">
    <div class="absolute inset-0 flex justify-between">
      <Card title="Card 1" image="https://example.com/image1.jpg"/>
      <Card title="Pictures" image="https://example.com/image2.jpg"/>
      <Card title="Card 3" image="https://example.com/image3.jpg"/>
      <Card title="Card 4" image="https://example.com/image4.jpg"/>
    </div>
    <!-- ... Other components ... -->
  </div>
</template>

<script lang="ts" setup>
import Card from './Card.vue'; // Import the Card component

import { defineProps } from 'vue';
import type { CardData } from '@/interfaces/CardData';

const props = defineProps<{ data: CardData }>();
</script>

<style lang="scss" scoped>
.card {
  @apply bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow;
  .card-img {
    @apply w-full h-48 object-cover rounded-lg mb-4;
  }
  .card-body {
    .card-title {
      @apply text-lg font-semibold mb-2;
    }
    .card-text {
      @apply text-gray-600;
    }
  }
}
</style>

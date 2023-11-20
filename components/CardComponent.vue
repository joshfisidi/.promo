<template>
  <div class="card">
    <img :src="data.imageUrl" alt="Card Image" class="card-img"/>
    <div class="card-body">
      <h3 class="card-title">{{ data.title }}</h3>
      <p class="card-text">{{ data.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

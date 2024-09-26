<template>
    <div class="user-links">
      <div v-for="(link, index) in links" :key="index" class="mb-4 bg-slate-700 rounded-lg p-4">
        <div class="flex items-center justify-between">
          <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline text-lg">
            {{ link.title }}
          </a>
          <span class="text-gray-400 text-sm">{{ formatDate(link.date) }}</span>
        </div>
        <p class="text-gray-300 mt-2">{{ link.description }}</p>
        <div class="mt-2 flex items-center space-x-4">
          <span class="text-gray-400 text-sm">{{ link.views }} views</span>
          <span class="text-gray-400 text-sm">{{ link.likes }} likes</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    links: {
      type: Array,
      required: true,
    },
  });
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  </script>
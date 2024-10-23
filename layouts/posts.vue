<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="h-screen text-yellow-500 DefaultLayout bg-slate-800 flex">
    <div class="flex-1 bg-gray-900">
      <p class="text-white"><ContentDoc /></p>
    </div>
    <div class="flex-1 bg-gray-800">
      <p class="text-white">Div 2</p>
    </div>
    <div class="flex-1 bg-gray-700">
      <p class="text-white">Div 3</p>
    </div>
    <div class="flex-1 bg-gray-600">
      <p class="text-white">Div 4</p>
    </div>
  </div>
</template>

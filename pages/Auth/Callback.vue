<template>
    <div>Processing login...</div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import useMagic from '~/composables/useMagic';

  const { handleLoginSuccess } = useMagic();

  onMounted(async () => {
    await handleLoginSuccess();
  });
  </script>
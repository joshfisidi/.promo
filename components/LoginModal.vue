<template>

</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const login = async () => {
  try {
    await loginWithMagicLink(email.value);
    console.log('Login successful');
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>

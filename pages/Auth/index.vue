<template>
  <div class="auth-page bg-black min-h-screen flex items-center justify-center">
    <Auth />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Auth from '~/components/Auth/index.vue';
import useMagic from '~/composables/useMagic';

const router = useRouter();
const { checkLoginStatus } = useMagic();

onMounted(async () => {
  const isLoggedIn = await checkLoginStatus();
  if (isLoggedIn) {
    router.push('/home');
  }
});
</script>
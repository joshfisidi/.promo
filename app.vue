<template>
  <div class="App bg-slate-900 min-h-screen text-white cursor-pointer">
    <NuxtLayout>
      <Header />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useMagic from '~/composables/useMagic';

const router = useRouter();
const { checkLoginStatus } = useMagic();
const isLoggedIn = ref(false);

const checkAuth = async () => {
  isLoggedIn.value = await checkLoginStatus();
  if (!isLoggedIn.value && router.currentRoute.value.path !== '/auth') {
    router.push('/auth');
  }
};

const logout = async () => {
  // Implement logout logic here
  isLoggedIn.value = false;
  router.push('/auth');
};

onMounted(checkAuth);

router.beforeEach(async (to, from, next) => {
  await checkAuth();
  if (to.path !== '/auth' && !isLoggedIn.value) {
    next('/auth');
  } else {
    next();
  }
});

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
  ]
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>

<template>
  <nuxt-link
    @touchstart="isActive = true"
    @touchend="isActive = false"
    :class="{ 'scale-90': isActive }"
    class="Alert flex justify-center text-center flex-col bg-gradient-animation bg-slate-900 rounded px-2 py-1 mx-7 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 cursor-pointer"
    style="
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    "
    to="/Backstory"
  >
    Backstory
  </nuxt-link>
</template>

<script>
import { ref } from "vue";

const isActive = ref(false);
</script>

<style scoped>
@keyframes gradient-animation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.bg-gradient-animation {
  background: linear-gradient(0deg, #ff01bf, #00ffbf);
  background-size: 100% 200%;
  animation: gradient-animation 3s linear infinite alternate-reverse;
}

.scale-90 {
  transform: scale(0.9);
}
</style>

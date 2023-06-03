<template>
  <div 
    @touchstart="isActive = true"
    @touchend="isActive = false"
    :class="{ 'scale-90': isActive }"
    class="Alert flex justify-center text-center flex-col bg-cyan-500 rounded px-2 py-1 mx-7 lg:mx-20 my-4 text-black font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 cursor-pointer"
    style="-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"
  >
    Apple Music
  </div>
</template>

<script>
import { ref } from 'vue';

const isActive = ref(false);
</script>

<style scoped>
.scale-90 {
  transform: scale(0.90);
}
</style>

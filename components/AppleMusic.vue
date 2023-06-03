<template>
  <div 
    @touchstart="isActive = true"
    @touchend="isActive = false"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'scale-90': isActive, 'animate-pulse': isHovered }"
    class="Alert flex justify-center text-center flex-col bg-cyan-500 rounded px-2 py-1 mx-7 lg:mx-20 my-4 text-black font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 cursor-pointer">
    Apple Music
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isActive = ref(false);
    const isHovered = ref(false);

    return {
      isActive,
      isHovered
    };
  }
}
</script>

<style scoped>
.scale-90 {
  transform: scale(0.90);
}

.animate-pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>

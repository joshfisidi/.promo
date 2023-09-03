<!-- In your page component -->
<template>
  <transition name="fade">
    <nuxt-link
      @touchstart="isActive = true"
      @touchend="isActive = false"
      :class="{ 'scale-90': isActive }"
      class="Alert flex justify-center text-center flex-col bg-slate-900 rounded px-4 py-2 mx-7 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 cursor-pointer"
      style="
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      "
      to="/Code"
    >
      Code
    </nuxt-link>
  </transition>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(false);

    return {
      isActive,
    };
  },
};
</script>

<style scoped>
.scale-90 {
  transform: scale(0.9);
}
</style>

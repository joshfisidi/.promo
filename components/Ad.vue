<template>

  <div class="flex justify-center" style="margin-bottom: 0px;border-bottom-width: 0px;padding-top: 0px;padding-bottom: 5px;">
    <!-- Ad Video -->
    <a href="https://replacethis.com" target="_blank" class="link-wrapper">
      <div
        class="ad bg-slate-900 rounded-lg px-4 py-3 mx-2 my-1 p-8 justify-items-center text-white font-bold text-xs transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
        @touchstart="isActiveAd = true"
        @touchend="isActiveAd = false"
        :class="{ 'scale-90': isActiveAd }"
      >
        <div class="iframe-container">
          <iframe
            class="w-full h-full p3 rounded"
            src="https://www.youtube.com/embed/YAmt4qNq3X4"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </a>

    <!-- Twitter Video -->
    <a href="https://twitter.com" target="_blank" class="link-wrapper">
      <div
        class="ad bg-slate-900 rounded-lg px-4 py-3 mx-2 my-1 text-white transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
        @touchstart="isActiveTwitter = true"
        @touchend="isActiveTwitter = false"
        :class="{ 'scale-90': isActiveTwitter }"
      >
        <div class="iframe-container">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/WkXJpoC1Me0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isActiveAd = ref(false);
const isActiveTwitter = ref(false);
</script>

<style scoped lang="scss">
.ad {
  @apply hover:scale-105;
  width: 44vw; // Default width for mobile
  height: 20vh; // Default height for mobile

  @media (min-width: theme('screens.sm')) {
    // Styles for sm screens and larger
  }

  @media (min-width: theme('screens.md')) {
    // Styles for md screens and larger
    width: 39.5vw;
    height: 18.2vw;
  }

  @media (min-width: theme('screens.lg')) {
    // Styles for lg screens and larger
    width: 20vw;
  }

  @media (min-width: theme('screens.xl')) {
    // Styles for xl screens and larger
    width: 14.5vw;
    height: 13.5vw;
  }

  @media (min-width: theme('screens.2xl')) {
    // Styles for 2xl screens and larger
    width: 20px; 
    height: 40px;
    margin: 18px;
  }

  @media (min-width: theme('screens.3xl')) {
    // Styles for 3xl screens and larger
    width: 14.2vw; 
    height: 16.2dvh;
    margin-bottom: 10vh;
  }


  // Extra small devices (phones) - Specific range
  @media (width <= 650px) and (max-width: 750px){
    width: 41.2svw;
    height: 30svh;
    a .ad {
      width: 10vw;
    } 
    height: 18vh;
  }

  // Orientation specific styles
  @media (orientation: portrait) {
    // Styles for portrait mode
  }

  @media (orientation: landscape) {
    // Styles for landscape mode
  }
}

.iframe-container {
  @apply w-full h-full rounded-lg overflow-hidden relative;
}

iframe {
  @apply absolute top-0 left-0 w-full h-full;
}

.link-wrapper {
  @apply no-underline;
}
</style>

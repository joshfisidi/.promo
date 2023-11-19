<template>
  <div class="flex justify-center">
    <!-- Ad Video -->
    <a href="https://replacethis.com" target="_blank" class="link-wrapper">
      <div
        class="ad bg-slate-900 rounded-lg px-4 py-3 mx-2 my-1 text-white font-bold text-xs transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
        @touchstart="isActiveAd = true"
        @touchend="isActiveAd = false"
        :class="{ 'scale-90': isActiveAd }"
      >
        <div class="iframe-container">
          <iframe
            class="w-full h-full"
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
  width: 44vw; // Default width
  height: 20vh; // Default height

  @media (min-width: theme('screens.lg')) {
    width: 20vw;
  }

  @media (min-width: theme('screens.xl')) {
    width: 14.5vw;
    height: 9.2vw;
  }

  @media (max-width: theme('screens.md')) {
    width: 39.5vw;
    height: 25.2vw;
  }

  @media (max-width: theme('screens.sm')) {
    width: 43.3vw;
    height: 24.2vw;
    margin-bottom: 4rem;
  }

  @media (min-width: theme('screens.2xl')) {
    width: 20px; 
    height: 40px;
    margin: 18px;
    padding-inline: 1px;
  }


  // Extra small devices (phones)
  @media (min-width: 768px) {
    width: 41vw;
    a .ad {
      width: 10vw;
    }
    height: 18vh;
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

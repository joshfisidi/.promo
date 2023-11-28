<template>
  <div class="scroll-container">
    <div class="flex justify-start overflow-x-auto">
      <a v-for="card in cards" :key="card.id" :href="card.link" target="_blank" class="link-wrapper">
        <div
          class="ad bg-slate-900 rounded-lg px-4 py-3 -pb-8 mx-2 my-1 p-8 justify-items-center text-white font-bold text-xs transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
          @touchstart="() => card.isActive = true"
          @touchend="() => card.isActive = false"
          :class="{ 'scale-90': card.isActive }"
        >
          <div class="iframe-container">
            <iframe
              class="w-full h-full p3 rounded"
              :src="card.iframeSrc"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";

interface Card {
  id: number;
  link: string;
  iframeSrc: string;
  isActive: boolean;
}

const cards = ref<Card[]>([
  {
    id: 1,
    link: 'https://replacethis.com',
    iframeSrc: 'https://www.youtube.com/embed/YAmt4qNq3X4',
    isActive: false
  },
  {
    id: 2,
    link: 'https://twitter.com',
    iframeSrc: 'https://www.youtube.com/embed/WkXJpoC1Me0',
    isActive: false
  },
  {
    id: 2,
    link: 'https://twitter.com',
    iframeSrc: 'https://www.youtube.com/embed/WkXJpoC1Me0',
    isActive: false
  },
  {
    id: 2,
    link: 'https://twitter.com',
    iframeSrc: 'https://www.youtube.com/embed/WkXJpoC1Me0',
    isActive: false
  },
  {
    id: 2,
    link: 'https://twitter.com',
    iframeSrc: 'https://www.youtube.com/embed/WkXJpoC1Me0',
    isActive: false
  },
  {
    id: 2,
    link: 'https://twitter.com',
    iframeSrc: 'https://www.youtube.com/embed/WkXJpoC1Me0',
    isActive: false
  },
  {
    id: 2,
    link: 'https://twitter.com',
    iframeSrc: 'https://www.youtube.com/embed/WkXJpoC1Me0',
    isActive: false
  },
  // Add more cards as needed
]);
</script>
<style scoped lang="scss">

.scroll-container {
  @apply w-full;
  margin-bottom: 0;
  border-bottom-width: 0;
  padding-top: 0;
  padding-bottom: 5px;
}


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
    margin: 16.2px;
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

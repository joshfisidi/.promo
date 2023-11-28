<template>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="card in cards" :key="card.id">
        <a :href="card.link" target="_blank" class="link-wrapper">
          <div
            class="ad bg-slate-900 rounded-lg px-4 py-3 mx-2 my-1 p-8 justify-items-center text-white font-bold text-xs transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
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
      </swiper-slide>
    </swiper>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  
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
      id: 1,
      link: 'https://replacethis.com',
      iframeSrc: 'https://www.youtube.com/embed/YAmt4qNq3X4',
      isActive: false
    },
    {
      id: 1,
      link: 'https://replacethis.com',
      iframeSrc: 'https://www.youtube.com/embed/YAmt4qNq3X4',
      isActive: false
    },
    {
      id: 1,
      link: 'https://replacethis.com',
      iframeSrc: 'https://www.youtube.com/embed/YAmt4qNq3X4',
      isActive: false
    },
    // ... more cards
  ]);
  
  const swiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  </script>
  
  <style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .ad {
    display: inline-flex; /* Changed to inline-flex for proper alignment */
    width: 44vw;
    height: 20vh;
    
  
    @media (max-width: 650px) {
      width: 80vw; /* Adjust for smaller screens */
      height: auto;
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
  
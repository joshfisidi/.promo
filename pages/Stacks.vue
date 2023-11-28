<template>
    <div class="flex justify-center items-center h-screen bg-black">
      <Swiper
        :modules="[Navigation, Pagination, EffectCards]"
        :centeredSlides="true" 
        :slidesPerView="1" 
        :spaceBetween="30"
        :pagination="{ clickable: true, el: '.swiper-pagination' }"
        :loop="true" 
        effect="cards"
        class="w-full max-w-4xl"
      >
        <SwiperSlide v-for="(card, index) in cards" :key="index">
          <div class="card bg-slate-900 rounded-lg">
            <h3 class="text-white text-lg">{{ card.title }}</h3>
            <p class="text-gray-300">{{ card.description }}</p>
          </div>
        </SwiperSlide>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-cards';
  import { Navigation, Pagination, EffectCards } from 'swiper/modules';
  
  const cards = ref([
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
    { title: 'Card 4', description: 'Description for card 4' },
    // ... more cards
  ]);
  </script>
  
  <style scoped>
  .swiper {
    width: 100%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    width: 63.5mm; /* Approximate width of a baseball/Pokémon card */
    height: 88.9mm; /* Approximate height of a baseball/Pokémon card */
    padding: 10px; /* Adjust padding as needed */
    margin: 0 auto;
    background: bg-slate-900; /* Card background color */
    border-radius: 10px; /* Rounded corners */
    /* Removed box-shadow for no shadow effect */
  }
  
  .swiper-pagination {
    bottom: 10px;
  }
  </style>
  
  
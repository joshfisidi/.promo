<template>
  <div class="flex flex-col justify-center items-center h-screen bg-black">
    <transition name="fade">
      <h2 v-if="currentCardTitle" class="current-title text-white text-2xl mb-5">{{ currentCardTitle }}</h2>
    </transition>
    <Swiper
      :modules="[Navigation, Pagination, EffectCards]"
      :centeredSlides="true"
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{ clickable: true, el: '.swiper-pagination' }"
      :loop="true"
      effect="cards"
      class="w-full swiper-container"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(card, index) in cards" :key="index">
        <div class="card bg-slate-900 rounded-md">
          <img :src="card.imageUrl" alt="Card Image" class="card-image rounded-md mb-2">
          <p class="text-gray-300">{{ card.description }}</p>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';

const cards = ref([
  { title: 'HemoSync', description: 'A blockchain bloodtype databank with aritificial intelligent analysis', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/HemoSync.gif' },
  { title: 'Tortoise', description: 'Description for card 2', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Spuntu.gif' },
  { title: 'Eyekaline', description: 'Description for card 3', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/rezarac.gif' },
  { title: 'Biome', description: 'Description for card 4', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Serbump.gif' },
  { title: 'Terve', description: 'Description for card 5', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Crystilite.gif' },
  // ... more cards
]);

const currentSlideIndex = ref(0);

const currentCardTitle = computed(() => cards.value[currentSlideIndex.value].title);

const onSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.realIndex;
};
</script>

<style scoped>
.swiper-container {
  max-width: 400px; /* Adjust to fit the actual card size */
  margin: auto;
  margin-top: 10vh;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 250px; /* Adjusted card width in pixels */
  height: 350px; /* Adjusted card height in pixels */
  padding: 10px;
  margin: 0 auto;
  background-color: #1e293b;
  border-radius: 10px;
}

.swiper-pagination {
  bottom: 10px;
}

.swiper-pagination-bullet {
  background: white;
}

.swiper-pagination-bullet-active {
  background: white;
}

.current-title {
  text-align: center;
  transition: opacity 0.5s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
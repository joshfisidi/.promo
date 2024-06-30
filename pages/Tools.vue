<template>
  <div class="flex justify-center items-center h-screen bg-black">
    <Swiper
      :modules="[Navigation, Pagination, EffectCoverflow]"
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{ clickable: true, el: '.swiper-pagination' }"
      effect="coverflow"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      class="w-full max-w-4xl"
    >
      <SwiperSlide v-for="(card, index) in cards" :key="index">
        <div class="card bg-slate-900 rounded-lg">
          <img :src="card.image" alt="Card Image" class="card-image" />
        </div>
        <h3 class="card-title text-white text-lg">{{ card.title }}</h3>
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
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const cards = ref([
  { title: 'Hold Up', description: 'Description for card 1', image: 'joshjgomes2023.jpg' },
  { title: 'Kingdom Come', description: 'Description for card 2', image: 'url-to-image-2.jpg' },
  { title: 'Gone', description: 'Description for card 3', image: 'url-to-image-3.jpg' },
  { title: 'Puddle', description: 'Description for card 4', image: 'url-to-image-4.jpg' },
  // ... more cards
]);
</script>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.card {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  position: relative;
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.card-title {
  margin-top: 10px; /* Space between the card and the title */
}

.swiper-pagination {
  bottom: 10px;
}
</style>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-black">
    <transition name="fade">
      <h2 v-if="currentCardTitle" class="current-title text-white mb-5">{{ currentCardTitle }}</h2>
    </transition>
    
    <Swiper
      :modules="[Navigation, Pagination, EffectCards, Mousewheel]"
      :centeredSlides="true"
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{ clickable: true, el: '.swiper-pagination' }"
      :loop="true"
      effect="cards"
      mousewheel
      :speed="500"
      class="swiper-container"
      @slideChange="onSlideChange"
    >
    
      <SwiperSlide v-for="(card, index) in cards" :key="index">
        <div class="card rounded-md">
          <Icon v-if="card.platform === 'web'" icon="bi-steam" style="color:white" class="platform-icon" />
          <Icon v-if="card.platform === 'ios'" icon="logos:apple-app-store"  style="color:white" class="platform-icon" />
          <Icon v-if="card.platform === 'psn'" icon="logo-playstation"  style="color:black" class="platform-icon" />
          <Icon v-if="card.platform === 'android'" icon="logos:chrome-web-store" style="color:green" class="platform-icon" />
          <Icon v-if="card.platform === 'win'" icon="logos:microsoft-icon" style="color:green" class="platform-icon" />
          <Icon v-if="card.platform === 'play'" icon="logos:google-play-icon" style="color:black" class="platform-icon" />
          
          <img :src="card.imageUrl" alt="Card Image" class="card-image rounded-md mb-2">
          <p class="text-gray-300">{{ card.description }}</p>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
    <div class="card-button-container flex flex-grid gap-14 mb-15">
    <button class="card-button">Button 1</button>
    <button class="card-button">Button 2</button>
  </div>
  </div>
  
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Mousewheel, Navigation, Pagination, EffectCards } from 'swiper/modules';
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const cards = ref([
  {
    title: 'HemoSync',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/HemoSync.gif',
    platform: 'ios'
  },
  {
    title: 'Spantu',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Spuntu.gif',
    platform: 'ios'
  },
  {
    title: 'Rezarac',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/rezarac.gif',
    platform: 'android'
  },
  {
    title: 'Serbump',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Serbump.gif',
    platform: 'web'
  },
  {
    title: 'PSN',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Serbump.gif',
    platform: 'psn'
  },
  {
    title: 'Seien',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Serbump.gif',
    platform: 'win'
  },
  {
    title: 'Seien',
    description: 'A blockchain bloodtype databank with aritificial intelligent analysis',
    imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Serbump.gif',
    platform: 'play'
  },
  // ... more cards with platform field
]);

const currentSlideIndex = ref(0);
const currentCardTitle = computed(() => cards.value[currentSlideIndex.value].title);

const onSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.realIndex;
};
</script>

<style scoped>
.swiper-container {
  max-width: 400px;
  margin: auto;
  margin-top: 10vh;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 250px;
  height: 350px;
  padding: 10px;
  margin: 0 auto;
  background-color: #1e293b;
  border-radius: 10px;
  position: relative;
}

.platform-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 24px;
  background-color: #1e293b;
  border-radius: 3px;
  padding: 4px;
  color: white;
  font-size: 40px; /* Adjust this value to change the size */
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

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.card-button {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #334155;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #475569;
  }
  .card-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 45vh;
    gap: 3.5rem;
    margin-bottom: 3.75rem;
}
}
</style>

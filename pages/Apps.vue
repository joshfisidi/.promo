<template>
  <swiper
    class="swiper-container"
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="(image, index) in images"
      :key="index"
      class="swiper-slide"
    >
      <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full">
    </swiper-slide>

    <!-- Add Pagination, Navigation, etc. here if needed -->
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';

// Example dataset
const images = ref([
  { src: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', alt: 'Image 1' },
  { src: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', alt: 'Image 2' },
  { src: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', alt: 'Image 3' },
  // ... more images
]);

const onSwiper = (swiper) => {
  console.log('Swiper instance:', swiper);
};

const onSlideChange = () => {
  console.log('Slide changed');
};
</script>

<style scoped>
/* Tailwind CSS classes can be used here */
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

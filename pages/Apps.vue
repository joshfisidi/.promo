
<template>
  <main>
    <slot>
  <div class="carousel-container" ref="carouselRef">
  <div class="container">
    <div class="carousel-card">
      <div class="carousel" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <img :src="image.path" class="carousel-image" />
        </div>
      </div>
    </div>
    <div class="arrow-container">
      
    </div>
  </div>
</div>
</slot>
</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useScrollControl } from '@/composables/useScrollControl'; // adjust the import path as needed
useScrollControl();

const images = ref([
  { path: '/blirce-fisidi-music-dao.PNG' },
  { path: '/jOsh-j0sh.JPG' },
  { path: '/jOshjGomes2023.jpg' },
]);

const currentSlide = ref(0);
let touchStartX = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchEnd = (event: TouchEvent) => {
  const touchEndX = event.changedTouches[0].clientX;
  const touchDistance = touchEndX - touchStartX;

  if (touchDistance > 50) {
    if (currentSlide.value > 0) currentSlide.value--;
  } else if (touchDistance < -50) {
    if (currentSlide.value < images.value.length - 1) currentSlide.value++;
  }
};

</script>



<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #000000;
}

.carousel-card {
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 150ms linear;
}

.page-left-enter-from, .page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to, .page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to, .page-right-enter-to {
  transform: translateX(0);
}
</style>

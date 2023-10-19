<template>
  <div class="carousel-container">
    <div class="container">
      <div class="carousel-card">
        <div class="carousel" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="carousel-item"
            :style="isSwiping ? { transform: `perspective(1000px) rotateY(${currentSlide * -45}deg)` } : { transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <img :src="image.path" class="carousel-image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
  { path: '/blirce-fisidi-music-dao.PNG' },
  { path: '/jOsh-j0sh.JPG' },
  { path: '/jOshjGomes2023.jpg' },
]);

const currentSlide = ref(0);
const isSwiping = ref(false);  // New variable to track swiping
let touchStartX = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
  isSwiping.value = true;  // Set to true when touch starts
};

const handleTouchEnd = (event: TouchEvent) => {
  const touchEndX = event.changedTouches[0].clientX;
  const touchDistance = touchEndX - touchStartX;

  if (touchDistance > 50) {
    if (currentSlide.value > 0) currentSlide.value--;
  } else if (touchDistance < -50) {
    if (currentSlide.value < images.value.length - 1) currentSlide.value++;
  }

  isSwiping.value = false;  // Set to false when touch ends
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
}

.carousel-card {
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.carousel-item {
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-image {
  border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.hover-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-item:hover .hover-info {
  opacity: 1;
}

.title,
.description {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>

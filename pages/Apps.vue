<template>
  <div class="carousel-container">
    <div class="carousel-card">
      <div class="carousel" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <img :src="image.path" class="carousel-image" loading="lazy" />
          
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  <div>  <p class="swipe-instruction">Swipe Left</p></div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
  { path: '/blirce-fisidi-music-dao.PNG' },
  { path: '/jOsh-j0sh.JPG' },
  { path: '/jOshjGomes2023.jpg' },
]);

const currentSlide = ref(0);
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchEnd = (event: TouchEvent) => {
  touchEndX = event.changedTouches[0].clientX;
  const touchDistance = touchEndX - touchStartX;

  if (touchDistance > 50 && currentSlide.value > 0) {
    currentSlide.value--;
  } else if (touchDistance < -50 && currentSlide.value < images.value.length - 1) {
    currentSlide.value++;
  }
};
</script>

<style scoped lang="scss">

.swipe-instruction {
  text-align: center;
  color: #fff; /* White color for the instruction text */
  font-size: 1rem;
  margin-top: 1rem; /* Spacing between the carousel card and the instruction text */
  opacity: 0; /* Start with the text invisible */
  animation: fadeInOut 3s infinite; /* Apply the animation */
}

/* Keyframes for the fade-in and fade-out animation */
@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .swipe-instruction {
    font-size: 0.8rem; /* Smaller text on smaller screens */
  }
}
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem; /* Add padding around the carousel for smaller screens */
}

.carousel-card {
  width: 100%; /* Set width to 100% for base responsiveness */
  max-width: 300px; /* Maximum width of the card */
  height: auto; /* Adjust height automatically based on content */
  background-color: #1c008b; /* Dark blue background color */
  border: 2px solid #27008b; /* Dark blue border */
  border-radius: 20px; /* Rounded edges */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex; /* Use flexbox for internal alignment */
  flex-direction: column; /* Stack children vertically */
  flex-grow: 1; /* Allow the card to grow to fill the space */
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-out;
}

.carousel-item {
  min-width: 100%; /* Ensure each item takes full width */
  transition: transform 0.5s ease-out;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block; /* Remove default image inline behavior */
  object-fit: cover;
  border-radius: 20px; /* Rounded edges for images */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-card {
    margin: 0 auto; /* Center the card on smaller screens */
  }
}
</style>

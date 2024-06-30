<template>
  <div class="user-card pt-1 -mb-16 overflow-hidden">
    <div class="top-container flex items-start justify-center relative">
      
      <div
        class="coin transition-all duration-500 ease-in-out transform active:scale-90 cursor-pointer"
        @click="flipCoinAndAddPoint"
        :class="{ heads: isHeads, tails: isTails }"
      >
        <img class="object-cover rounded-full" :src="image" :alt="title" />
      </div>
      <span v-for="(point, index) in points" :key="point.id" class="points" 
      :style="{ top: point.position + 'px', fontSize: point.size + 'rem', opacity: point.opacity }">+1</span>

      <!-- Display posts or skeleton loaders -->
      <div v-for="post in posts" :key="post.id" class="post-card">
        <div v-if="isLoading" class="skeleton-loader"></div>
        <div v-else>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const isHeads = ref(false);
const isTails = ref(false);
const image = ref('https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/yashgumaeternal-2.png');
const points = ref([]);

const flipCoinAndAddPoint = () => {
  flipCoin();
  addPoint();
};

const flipCoin = () => {
  isHeads.value = false;
  isTails.value = false;

  const flipResult = Math.random();
  setTimeout(() => {
    if (flipResult <= 0.5) {
      isHeads.value = true;
    } else {
      isTails.value = true;
    }
  }, 100);
};

const addPoint = () => {
  const newPoint = {
    id: Date.now(),
    position: -20,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.5
  };
  points.value.push(newPoint);

  const movePointUpward = setInterval(() => {
    newPoint.position -= 1;
  }, 10);

  setTimeout(() => {
    clearInterval(movePointUpward);
    points.value = points.value.filter(point => point.id !== newPoint.id);
  }, 1000);
};

// Prevent downloading or saving the image
onMounted(() => {
  const imageElement = document.querySelector('.coin img');
  if (imageElement) {
    imageElement.addEventListener('contextmenu', preventDownload);
    imageElement.addEventListener('touchstart', handleTouchStart, { passive: false });
    imageElement.addEventListener('touchend', handleTouchEnd, { passive: false });
  }
});

const preventDownload = (event) => {
  event.preventDefault();
};

let touchStartTime = 0;
const handleTouchStart = (event) => {
  touchStartTime = new Date().getTime();
};

const handleTouchEnd = (event) => {
  const touchEndTime = new Date().getTime();
  if (touchEndTime - touchStartTime > 500) {
    event.preventDefault();
  }
};
</script>


<style scoped lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

  
  .user-card {
    @apply overflow-visible z-50;
    padding-bottom: 2rem; // Adjust padding to ensure there's space for the animation
  
    // Tailwind's 2xl breakpoint
    @media (min-width: theme('screens.2xl')) {
      height: 25vh;
     @apply p-1 px-1; // Custom styles for 2xl screens go here
 
    }
  }

.points {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeOut 1s ease-out forwards;
  color: rgb(253, 253, 252);
  font-weight: bold;
  z-index: 1000;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes pointMoveUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-80px);
  }
}

@keyframes flip-heads {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(1800deg); }
}

@keyframes flip-tails {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(-1800deg); }
}

.top-container {
  
  
  position: relative; // Ensuring relative positioning for absolute children
  min-height: 10rem; // Ensure enough space for the spinning coin and the animation
  
}



  .coin {
    // Increase the width and height to make the spinner larger
    width: 33vw; // Adjusted width
    height: 26.5vh; // Adjusted height
    min-height: 15vh; // Adjusted minimum height
    padding-top: 0rem;
    padding-bottom: 13vh;

    @media (min-width: theme('screens.xl')) {
      height: 15vh;
      width: 15vw;
      padding-bottom: 10rem;
    }
    @media (min-width: theme('screens.lg')) {
      height: 10vh;
      width: 19vw;
      padding-bottom: 14rem;
    }
  
    &.heads, &.tails {
      transform-style: preserve-3d;
      position: relative;
    }
  
    &.heads {
      animation: flip-heads 2s forwards;
    }
  
    &.tails {
      animation: flip-tails 2s forwards;
    }
    
    // Image inside the coin
    img {
      width: 100%; // Make image take up the full width of the coin
      height: auto; // Keep the aspect ratio of the image
      border-radius: 50%; // Rounded image
    }
  }
</style>

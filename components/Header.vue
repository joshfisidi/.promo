<template>
  <div class="flex mb-4">
    <div class="bg-slate-900 flex-1 h-7">
      <div class="marquee font-mono text-1xl text-center">
        <div class="tracking-in-expand">
          <div class="animated-text-container">
            <span class="animated-text" v-if="isVisible">{{
              currentText
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const texts = [
  "BitWire",
  "Temple Renew",
  "RedPill",
  "Blirce",
  "BrainWash",
  "Tracer",
];
const shuffledTexts = shuffleArray(texts);
const currentText = ref(shuffledTexts[0]);
let index = 0;

// Shuffle the array of texts
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to cycle through shuffled texts
const cycleThroughTexts = () => {
  index = (index + 1) % shuffledTexts.length;
  currentText.value = shuffledTexts[index];
};

// Hide and show the animation after a delay
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
    cycleThroughTexts();
    setInterval(cycleThroughTexts, 3000); // Cycle every 3 seconds
  }, 3000); // Delay the animation by 3 seconds
});

const isVisible = ref(false);
</script>

<style lang="scss" scoped>
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.marquee {
  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

.animated-text-container {
  display: inline-block;
}

.animated-text {
  display: inline-block;
  animation: fadeInUp 1.5s ease-in-out infinite alternate;
  color: white; /* Change the color to black */
  font-weight: bold; /* Add font weight */
}

@keyframes fadeInUp {
  0% {
    transform: translateY(0.5rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

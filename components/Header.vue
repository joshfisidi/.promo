<template>
  <div class="flex mb-4 relative">
    <div class="bg-slate-900 flex-1 h-7 bg-transparent">
      <div class="marquee font-mono text-1xl text-center">
        <div class="tracking-in-expand">
          <div class="animated-text-container">
            <span class="animated-text" v-if="isVisible">
              {{ currentText }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <button @click="toggleBellAnimation" class="bell-icon absolute top-1/2 right-4 transform -translate-y-1/2" :class="{ 'animate-bell': animateBell }">
      <Icon :icon="bellIcon" class="text-white"></Icon>
    </button>
    <div v-if="isModalVisible" class="modal">
      <div class="modal-background" @click="isModalVisible = false"></div>
      <div class="modal-content">
        <header class="modal-header">
          <p class="modal-title">Subscribed</p>
          <button class="close-modal" @click="isModalVisible = false">X</button>
        </header>
        <section class="modal-body">
          Thank you for subscribing!
        </section>
        <footer class="modal-footer">
          <button class="close-button" @click="isModalVisible = false">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import bellIcon from '@iconify/icons-mdi/bell';

const texts = ["BitWire", "Temple Renew", "RedPill", "Blirce", "BrainWash", "Tracer"];
const shuffledTexts = shuffleArray(texts);
const currentText = ref(shuffledTexts[0]);
let index = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const cycleThroughTexts = () => {
  index = (index + 1) % shuffledTexts.length;
  currentText.value = shuffledTexts[index];
};

const isVisible = ref(false);
const animateBell = ref(false);
const isModalVisible = ref(false);

const toggleBellAnimation = () => {
  animateBell.value = !animateBell.value;
  isModalVisible.value = true; // Show modal when bell is clicked
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
    cycleThroughTexts();
    setInterval(cycleThroughTexts, 3000);
  }, 3000);
});
</script>


<style lang="scss" scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 500px;
  width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-weight: bold;
}

.close-modal {
  background: none;
  border: none;
  cursor: pointer;
}

.modal-body {
  margin-top: 1rem;
}

.modal-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.close-button {
  cursor: pointer;
}

.bell-icon {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.1rem;
}

.animate-bell {
  animation: bellShake 0.2s ease-in-out;
}

@keyframes bellShake {
  0% { transform: translateY(-50%) rotate(0deg); }
  25% { transform: translateY(-50%) rotate(-10deg); }
  50% { transform: translateY(-50%) rotate(10deg); }
  75% { transform: translateY(-50%) rotate(-10deg); }
  100% { transform: translateY(-50%) rotate(0deg); }
}

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
  color: white;
  font-weight: bold;
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
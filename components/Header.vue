<template>
  <div class="flex mb-4 relative">
    
    <!-- Marquee text area -->
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
  <!-- NuxtLink for Promo Text -->
  <NuxtLink to="/" class="promo-text absolute top-1/2 left-4 transform -translate-y-1/2">
    .promo
  </NuxtLink>
    <!-- Bell icon for subscribing, which toggles the subscription modal -->
    <button 
    @mouseenter="startShake"
    @mouseleave="stopShake"
    @click="toggleModal" class="bell-icon absolute top-1/2 right-4 transform -translate-y-1/2" 
    :class="{ 'animate-bell': animateBell, 'shake': isShaking }">

      <Icon :icon="bellIcon" class="text-white" />
    </button>
    <!-- Subscription Modal -->
    <div v-if="isModalVisible" class="modal">
      
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <header class="modal-header">
          <p class="modal-title">Subscribe for updates</p>
          <button class="hover:bg-slate-800 p-0 px-1 hover:rounded-full hover:text-white text-black text-sm font-bold" @click="closeModal">X</button>
        </header>
        <section class="modal-body ">
          <form @submit.prevent="submitSubscription">
            <input type="text" v-model="contactInfo" placeholder="Enter your email or phone" class="input-field" required>
            <button type="submit" class="submit-button">Subscribe</button>
          </form>
        </section>
        <footer class="modal-footer">
          <button class="close-button font-bold text-base text-white" @click="closeModal">ⓘ</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import bellIcon from '@iconify/icons-mdi/bell';

const contactInfo = ref('');
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

const isVisible = ref(false);
const animateBell = ref(false);
const isModalVisible = ref(false);
const isShaking = ref(false);
const startShake = () => {
  isShaking.value = true;
}
const stopShake = () => {
  isShaking.value = false;
};

const toggleModal = () => {
  animateBell.value = !animateBell.value;
  isModalVisible.value = !isModalVisible.value;
};

const closeModal = () => {
  animateBell.value = false;
  isModalVisible.value = false;
  contactInfo.value = '';
};

const submitSubscription = () => {
  console.log(`Subscribing with contact info: ${contactInfo.value}`);
  contactInfo.value = '';
  closeModal();
};

function cycleThroughTexts() {
  index = (index + 1) % texts.length;
  currentText.value = shuffledTexts[index];
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
    cycleThroughTexts();
    setInterval(cycleThroughTexts, 3000);
  }, 3000);
});
</script>




<style scoped lang="scss">
.promo-text {
  @apply text-white font-bold cursor-pointer; // Added cursor-pointer for better UX
  // Add more styling properties here if needed
}


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
  //blur it
  @apply fixed inset-0 bg-black bg-opacity-50; // Full-screen overlay with semi-transparent black background
  backdrop-filter: blur(5px); // Blurring effect
}

.modal-content {
  position: relative;
  background-color: rgb(252, 252, 252);
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


.input-field {
  width: 100%; // Full width to fit the modal
  padding: 10px 15px; // Padding for comfortable text entry
  margin-bottom: 1rem; // Spacing between form elements
  font-size: 1rem; // Readable text size
  border: 2px solid #e2e8f0; // A light border color from the Tailwind CSS palette
  border-radius: 0.375rem; // Slightly rounded borders for a modern look
  transition: border-color 0.3s, box-shadow 0.3s; // Smooth transitions for interactions

  &:focus {
    border-color: #93c5fd; // Highlight color when focused
    box-shadow: 0 0 0 1px #93c5fd; // Adding a shadow to emulate a glow effect
    outline: none; // Remove default focus outline
  }

  &::placeholder {
    color: #a0aec0; // A medium-gray placeholder color
  }
}

/* Submit button styling */
.submit-button {
  display: block; // Display block for full-width
  width: 100%; // Full width to match input fields
  padding: 10px 15px; // Padding for a taller, more clickable button
  margin-top: 1rem; // Margin on top to separate from the input field
  background-color: #000000; // A nice blue from the Tailwind CSS palette
  color: #ffffff; // White text for contrast
  border: none; // No border for a flat design
  border-radius: 0.375rem; // Matching border radius to the input field
  cursor: pointer; // Cursor to indicate clickability
  font-size: 1rem; // Matching font size to the input field
  font-weight: 600; // A bit of weight for text inside the button
  line-height: 1.25; // Line height for any text wrapping cases
  transition: background-color 0.3s; // Smooth background color transition

  &:hover {
    background-color: #343548; // A slightly darker blue on hover
  }
};
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
  z-index: 4;
}

.animate-bell {
  animation: bellShake 0.2s ease-in-out;
}


@keyframes shake {
  0%, 100% { transform: translate(-50%, -50%) rotate(0); }
  10%, 30%, 50%, 70%, 90% { transform: translate(-50%, -50%) rotate(-10deg); }
  20%, 40%, 60%, 80% { transform: translate(-50%, -50%) rotate(10deg); }
}

.shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
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



iPhone 14 Pro Max
430 x 932
3

<template>
  <div>
    <!-- Your existing layout content here -->

    <!-- Footer buttons -->
     
    <div 
    class="fixed bottom-0 w-full" 
    :class="{ hidden: !showElement }"
    ref="footerRef"
  >
    <div class="fixed bottom-0 w-full" :class="{ hidden: !showElement }">
      <div class="px-7">
        <div class="flex -mx-2 justify-center">
          <div class="w-1/3 px-2">
            <nuxt-link to="/tools">
              <button
                class="w-full bg-slate-900 h-12 rounded-md text-white transition duration-500 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
              >
                Tools
              </button>
            </nuxt-link>
          </div>
          <div class="w-1/3 px-2">
            <nuxt-link to="/papers">
              <button
                class="w-full bg-slate-900 h-12 rounded-md text-white transition duration-500 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
              >
                Papers
              </button>
            </nuxt-link>
          </div>
          <div class="w-1/3 px-2">
            <nuxt-link to="/books">
              <button
                class="w-full bg-slate-900 h-12 rounded-md text-white transition duration-500 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
              >
                Books
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showElement = ref(true);
const footerRef = ref<HTMLElement | null>(null);
let lastScrollPosition = 0;
const scrollThreshold = 10; // Set the threshold to 10 pixels

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  // Scrolling up
  if (currentScrollPosition < lastScrollPosition && (lastScrollPosition - currentScrollPosition) > scrollThreshold) {
    showElement.value = false;
  }
  // Scrolling down
  else if (currentScrollPosition > lastScrollPosition) {
    showElement.value = true;
  }

  lastScrollPosition = currentScrollPosition;
};

const handleTouchStart = (event: TouchEvent) => {
  if (footerRef.value && !footerRef.value.contains(event.target as Node)) {
    showElement.value = false;
  }
};
</script>


<style scoped lang="scss">
.hidden {
  display: none;
}

/* Assuming your TailwindCSS breakpoints are as follows:
   'sm': '640px', 'md': '768px', 'lg': '1024px', 'xl': '1280px', '2xl': '1536px' */

/* Styles for lg screens and above */
@media (min-width: 1024px) {
  .footer-button {
    @apply hover:scale-105;
    width: 20vw;
    padding-top: 10ch;
    /* Other styles for lg screens */
  }
}

/* Styles for xl screens and above */
@media (min-width: 1280px) {
  .footer-button {
    width: 14.5vw;
    height: 9.2vw;
    /* Other styles for xl screens */
  }
}

/* Styles for screens smaller than md */
@media (max-width: 767px) {
  .footer-button {
    width: 39.5vw;
    height: 25.2vw;
    /* Other styles for screens smaller than md */
  }
}

/* Styles for screens smaller than sm */
@media (max-width: 639px) {
  .footer-button {
    width: 43.3vw;
    height: 24.2vw;
    margin-bottom: 4rem;
    /* Other styles for screens smaller than sm */
  }
}

/* Styles for 2xl screens and above */
@media (min-width: 1536px) {
  .footer-button {
    width: 20px;
    height: 40px;
    margin: 18px;
    padding-inline: 1px;
    /* Other styles for 2xl screens and above */
  }
}

/* Extra small devices (phones) */
@media (min-width: 768px) {
  .footer-button {
    width: 41vw;
    height: 18vh;
    /* Other styles for extra small devices */
  }
}

/* Add other styles as needed... */
</style>

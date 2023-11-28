<template>

  <footer>
  <div>
    <!-- Your existing layout content here -->

    <!-- Footer buttons -->
 
      <div class="w-full fixed bottom-0 mb-2" :class="{ hidden: !showElement }">
        <div class="px-7">
          <div class="flex -mx-2 justify-center">
            <div class="w-1/2 px-2 bottom-66">
              <nuxt-link to="/tools">
                <button
                  class="border border-slate-700 w-full hover:mt-1 duration-300 bg-gray-900 h-10 rounded-md text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
                >
                  Utils
                </button>
              </nuxt-link>
            </div>
            <div class="w-1/2 px-0">
              <nuxt-link to="/papers">
                <button
                  class="border border-slate-700 w-full hover:mt-1 duration-300 bg-gray-900 h-10 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
                >
                  Team
                </button>
              </nuxt-link>
            </div>
            <div class="w-1/2 px-2">
              <nuxt-link to="/books">
                <button
                  class="border border-slate-700 w-full hover:mt-1 duration-300 bg-gray-900 h-10 rounded-md text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
                >
                  Books
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
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

.fixed-footer {
  position: fixed;
  bottom: 50px; /* Push up by 50px */
  width: 100%;
  /* Other necessary styling */
}
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

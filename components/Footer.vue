
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


<style lang="scss" scoped>
/* Add your existing styles here */

.hidden {
  display: none;
}


/* Styles for screens with a minimum width of 2048px */
@media (min-width: 2048px) {
  /* Styles specific to this viewport size */
  .footer-container {
    padding-bottom: 45vw;

    /* Example: Adjust the padding or layout of the footer */
    padding: 20rem;
    /* Additional styles as needed */
  }

  /* You can target other elements within your component as well */
}

/* Safari-specific styles */
body, html, #app {
  height: -webkit-fill-available;
}


</style>
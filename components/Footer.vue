<template>
  <div>
    <!-- Your content here -->

    <!-- Footer buttons -->
    <div class="fixed bottom-0 w-full" :class="{ hidden: !showFooter }">
      <div class="px-2">
        <div class="flex -mx-2 justify-center">
          <div class="w-1/3 px-2">
            <nuxt-link to="/books">
              <button
                class="w-full bg-slate-900 h-12 rounded-md text-white transition duration-500 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
              >
                Team
              </button>
            </nuxt-link>
          </div>
          <div class="w-1/3 px-2">
            <nuxt-link to="/books">
              <button
                class="w-full bg-slate-900 h-12 rounded-md text-white transition duration-500 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-700"
              >
                Papers
              </button>
            </nuxt-link>
          </div>
          <div class="w-1/3 px-2">
            <!-- Use nuxt-link to navigate to the Books page -->
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showFooter = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    showFooter.value = true;
  } else {
    showFooter.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
/* Add your existing styles here */

.hidden {
  display: none;
}
</style>

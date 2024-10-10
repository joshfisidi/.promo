<!-- pages/index.vue -->

<template>
  <div class="min-h-screen bg-gradient-to-br from-red-500 to-pink-600 p-4 sm:p-8">
    <div class="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
      <div class="p-6 sm:p-8">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">Billy Bob</h1>
        
        <!-- User avatar -->
        <div class="mb-6 flex justify-center">
          <div class="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
            <div class="text-white font-bold text-4xl">
              {{ userInitial }}
            </div>
          </div>
        </div>

        <!-- Bio -->
        <p class="text-white text-center mb-8">If you are reading this you are probably a developer. If you want to contribute to ENS.PROMO please open an issue or submit a pull request.</p>

        <!-- Links -->
        <div class="space-y-4">
          <a v-for="link in links" :key="link.url" 
             :href="link.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="block w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center"
          >
            {{ link.title }}
          </a>
        </div>

        <!-- Social icons -->
        <div class="flex justify-center mt-8 space-x-4">
          <a v-for="social in socials" :key="social.url" 
             :href="social.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-white hover:text-yellow-400 transition duration-300"
          >
            <i :class="social.icon" class="text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';

const userName = ref('John Doe');
const userInitial = computed(() => userName.value.charAt(0).toUpperCase());

const links = ref([
  { title: 'Music', url: 'https://example.com' },
  { title: 'My Blog', url: 'https://blog.example.com' },
  { title: 'My YouTube Channel', url: 'https://youtube.com/user/example' },
  { title: 'My Latest Project', url: 'https://project.example.com' },
]);

const socials = ref([
  { icon: 'fab fa-twitter', url: 'https://twitter.com/example' },
  { icon: 'fab fa-instagram', url: 'https://instagram.com/example' },
  { icon: 'fab fa-github', url: 'https://github.com/example' },
  { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/example' },
]);
</script>
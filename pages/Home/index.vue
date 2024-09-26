<template>
    <div class="bg-slate-900 min-h-screen text-white">
      <div class="container mx-auto px-4 py-8">
        <!-- Post input area -->
        <div class="flex items-center mb-8">
          <div 
            @click="goToProfile"
            class="w-12 h-12 rounded-full bg-gray-700 mr-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          ></div>
          <input 
            type="text" 
            v-model="newPost" 
            @keyup.enter="addPost"
            placeholder="Share a link..."
            class="flex-grow bg-slate-800 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>
  
        <!-- Scrolling feed -->
        <div class="space-y-6">
          <div v-for="(post, index) in posts" :key="index" class="bg-slate-800 rounded-lg p-4 flex items-start">
            <div 
              @click="goToProfile"
              class="w-10 h-10 rounded-full bg-gray-700 mr-4 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            ></div>
            <div>
              <p class="font-bold">User {{ index + 1 }}</p>
              <a :href="post.link" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">
                {{ post.link }}
              </a>
            </div>
          </div>
        </div>
  
        <!-- Load more button -->
        <div class="mt-8 text-center">
          <button @click="loadMorePosts" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const newPost = ref('');
  const posts = ref([
    { link: 'https://example.com/1' },
    { link: 'https://example.com/2' },
    { link: 'https://example.com/3' },
    // Add more initial posts here
  ]);
  
  const addPost = () => {
    if (newPost.value.trim()) {
      posts.value.unshift({ link: newPost.value });
      newPost.value = '';
    }
  };
  
  const loadMorePosts = () => {
    // Simulate loading more posts
    const newPosts = [
      { link: `https://example.com/${posts.value.length + 1}` },
      { link: `https://example.com/${posts.value.length + 2}` },
      { link: `https://example.com/${posts.value.length + 3}` },
    ];
    posts.value.push(...newPosts);
  };
  
  const goToProfile = () => {
    router.push('/profile');
  };
  </script>
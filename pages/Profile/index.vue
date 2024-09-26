<template>
  <div class="bg-slate-900 min-h-screen text-white">
    <div class="container mx-auto px-4 py-8">
      <!-- Profile header -->
      <div class="bg-slate-800 rounded-lg p-6 mb-4">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <div class="w-24 h-24 rounded-full bg-gray-700 mr-6"></div>
            <div>
              <h1 class="text-2xl font-bold">User Name</h1>
              <p class="text-blue-400">@ens-name.eth</p>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
        <div class="mb-4">
          <p class="text-gray-300">This is a brief description about the user. It can be multiple lines long and provide some information about their interests or activities.</p>
        </div>
        <div class="flex justify-between items-center text-sm text-gray-400">
          <div class="flex space-x-4">
            <span>Joined: Jan 1, 2023</span>
            <span>Followers: 1,234</span>
          </div>
          <div>
            <span>ETH: 10.5</span>
          </div>
        </div>
      </div>

      <!-- Sub-menu tabs -->
      <div class="bg-slate-800 rounded-lg mb-8">
        <div class="flex">
          <button 
            v-for="tab in tabs" 
            :key="tab"
            @click="currentTab = tab"
            class="flex-1 py-3 px-4 text-center transition-colors duration-200"
            :class="currentTab === tab ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-slate-700'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Content area -->
      <div class="bg-slate-800 rounded-lg p-6">
        <div v-if="currentTab === 'Links'">
          <UserLinks :links="userLinks" />
        </div>
        <div v-else-if="currentTab === 'Videos'">
          <!-- Videos content -->
          <p>Video content goes here</p>
        </div>
        <div v-else-if="currentTab === 'Mini Games'">
          <!-- Mini Games content -->
          <p>Mini Games content goes here</p>
        </div>
        <div v-else>
          <!-- About content -->
          <p>Additional information about the user goes here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserLinks from '~/components/Links/userLinks.vue';

const tabs = ['Links', 'Videos', 'Mini Games', 'About'];
const currentTab = ref('Links');

const userLinks = ref([
  {
    title: 'Example Link 1',
    url: 'https://example.com/1',
    date: '2023-05-01',
    description: 'This is an example link description.',
    views: 100,
    likes: 10,
  },
  {
    title: 'Example Link 2',
    url: 'https://example.com/2',
    date: '2023-05-02',
    description: 'Another example link description.',
    views: 200,
    likes: 20,
  },
  {
    title: 'Example Link 3',
    url: 'https://example.com/3',
    date: '2023-05-03',
    description: 'Yet another example link description.',
    views: 300,
    likes: 30,
  },
]);

// You can add more data and methods here as needed
</script>
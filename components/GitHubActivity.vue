<template>
  <div class="activity-page">
    <div v-if="loading" class="loading-container">
      <div class="loading-text">Loading...</div>
    </div>
    <div v-else>
      <h1>GitHub Activity</h1>
      <div class="github-events">
        <ul>
          <li v-for="(event, index) in githubActivity" :key="index">
            <strong>{{ event.type }}</strong> - {{ event.repo.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const loading = ref(true);
const githubActivity = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/joshjgomes/events"
    );
    githubActivity.value = response.data;
    loading.value = false;
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    loading.value = false;
  }
});
</script>

<style scoped>
.activity-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.loading-container {
  text-align: center;
}

.loading-text {
  font-size: 18px;
}

.github-events {
  margin-top: 20px;
}
</style>

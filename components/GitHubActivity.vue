<template>
  <div class="activity-page">
    <div v-if="loading" class="loading-container">
      <div class="loading-text">Fisidi...</div>
    </div>
    <div v-else>
      <h1>Git Activity</h1>
      <div class="github-events">
        <ul>
          <li  v-for="(event, index) in githubActivity.slice(0, 90)" :key="index">
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

<style scoped lang="scss">
.activity-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.activity-page h1 {
  color: white;
}
.loading-container {
  text-align: center;
  background-color: #000000; /* Add a background color */
  padding: 20px;
  border-radius: 10px;
}

.loading-text {
  font-size: 18px;
}

.github-events {
  margin-top: 20px;
  font-size: 3vw;
  /* Move this line inside .github-events to set the font color to white */
  color: white;
}

.github-activity-card {
  /* ...existing styles */
  overflow-y: auto; /* Add scroll if content overflows */

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
</style>


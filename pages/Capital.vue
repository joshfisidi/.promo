<template>
  <div class="github-activity-container">
    <div class="github-activity-card">
      <GitHubActivity />
    </div>
  </div>
</template>

<script>
import GitHubActivity from "@/components/GitHubActivity.vue";

export default {
  components: {
    GitHubActivity,
  },
};
</script>

<style scoped>
.github-activity-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.github-activity-card {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px; /* Adjust the maximum width as needed */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

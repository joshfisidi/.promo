<template>
  <div>
    <div id="tsparticles"></div>
    <div class="github-activity-container">
      <div class="github-activity-card">
        <h1 class="white-text">{{ userName }}</h1>
        <GitHubActivity />
      </div>
    </div>
    <div class="card-container">
      <a href="https://github.com/joshjgomes" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"> 

      </a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a> 
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <a href="https://github.com/user1" target="_blank" class="card card1"></a>
      <!-- Add more card links as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GitHubActivity from "@/components/GitHubActivity.vue";
import axios from "axios";

const userName = ref("Swipe Down");

onMounted(async () => {
  try {
    const response = await axios.get("https://api.github.com/users/joshjgomes");
    userName.value = response.data.name || "Git Activity";
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
  }
  particlesJS('particles-js', {
      // Your particles.js configuration
    });
});

</script>

<style scoped lang="scss">

.white-text {
  color: white;
}
.card-container {
  display: grid;
  gap: 5px;
  padding-inline: 1vw;
  row-gap: 15px;
  grid-template-columns: repeat(4, 1fr); /* Create 4 columns */
  align-items: center;

  .card {
    flex: 1;
    height: 10vh;
    position: flex-wrap;
    background-color: #1b2b4e80;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(255, 255, 255);
    transition: transform 0.3s ease; /* Smooth transition for hover effect */

    margin-top: 5vh;
    
    /* Add card background-image styles as needed */
  }
}

.card:hover {
  transform: scale(1.05); /* Scale up card to 105% when hovered */
}

.github-activity-container {
  display: flex;
  align-self: flex-start;
  overflow-wrap: max;
}

.github-activity-card {
  background-color: #1b2b4e80;
  font-weight: 900;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  width: 94%;
  justify-content: center;
  max-height: 10vh;
  max-width: 100vw;
  box-shadow: 0 0 10px rgba(213, 210, 210, 0.1);
  overflow-y: auto;
  align-self: flex-start;
}

/* Media query for screens wider than 768px */
@media (min-width: 768px) {
  .github-activity-container {
    justify-content: center;
  }
  
  .github-activity-card {
    width: 94%;
  }
}
</style>

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
      <a
        v-for="(image, index) in cardImages"
        :key="index"
        :href="'https://github.com/user' + (index + 1)"
        target="_blank"
        class="card card1"
        :style="{ backgroundImage: `url(${image})`, backgroundColor: '#1b2b4e80' }"
      >
        <p class="card-title">{{ cardTitles[index] }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GitHubActivity from "@/components/GitHubActivity.vue";
import axios from "axios";

const userName = ref("Swipe Down");

const cardImages = [
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Myrlin.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/HemoSync.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/rezarac.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Vibrance.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Super.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SolNode.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Byome.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Trifecta.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Serbump.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Crystilite.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/OmniStore.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SineSig.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/ColdAuth.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Alteritor.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Spuntu.gif",
  "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Terve.gif",
  // Add more image URLs as needed
];

const cardTitles = [
  "Myrlin",
  "HemoSync",
  "Rezarac",
  "Vibrance",
  "Super",
  "SolNode",
  "Byome",
  "Trifecta",
  "SerBump",
  "Crystilite",
  "OmniStore",
  "SineSig",
  "ColdAuth",
  "Alteritor",
  "TinCoil",
  "Terve",



  // Add more titles as needed
];

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
    padding-bottom: 20px; /* Add padding at the bottom for the title */
    background-position: center center; /* Center the background image */
    background-size: cover; /* Ensure the image covers the card */
    /* Add card background-image styles as needed */
  }
  

  .card1 {
    background-color: #1b2b4e80; /* Card background color */
  }

  .card-title {
    color: white;
    font-size: 16px;
    padding-top: 17vh;
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

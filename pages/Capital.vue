<template>
  <div>
    <!-- 3D Component -->
    <Fisidi3d />

    <!-- Chart Canvas -->
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
import Fisidi3d from "@/components/Fisidi3d.vue"; // Import the 3D component
import { onMounted } from "vue";
import axios from "axios";
import Chart from "chart.js/auto";

onMounted(async () => {
  const apiKey = process.env.VUE_APP_COINMARKETCAP_API_KEY;

  try {
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey
      }
    });

    // ... rest of your code remains unchanged
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
</script>

<style scoped lang="scss">
/* You can add some CSS styles here if needed */
</style>

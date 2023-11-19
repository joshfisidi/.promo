<template>
    <div class="chart-container">
      <canvas id="activityChart" ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  import axios from 'axios';
  
  // Register the necessary components from Chart.js
  Chart.register(...registerables);
  
  // Set up a reference to the canvas element
  const canvasRef = ref(null);
  
  // Fetch data from the API
  const fetchData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get('https://api.example.com/data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; // Handle the error appropriately
    }
  };
  
  onMounted(async () => {
    const chartData = await fetchData();
    
    if (chartData) {
      // Create the chart using the canvas context
      const ctx = canvasRef.value.getContext('2d');
      new Chart(ctx, {
        type: 'line', // or 'radar', 'bar', etc.
        data: chartData,
        options: {
          responsive: true,
          // other options
        },
      });
    }
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    max-width: 600px; /* You can adjust the max-width as needed */
    margin: auto;
  }
  
  /* Additional styles can be added here */
  </style>
  
<template>
  <div>
    <h2>Select Cryptocurrency</h2>
    <select v-model="selectedCoin" @change="updateWebSocket">
      <option v-for="coin in coins" :key="coin" :value="coin">{{ coin }}</option>
    </select>

    <div class="chart-container">
      <canvas id="priceChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const prices = ref({}); // Reactive prices object
const selectedCoin = ref('ethereum'); // Default selected coin
const coins = ['bitcoin', 'ethereum', 'litecoin', 'maker', 'dogecoin', 'stellar', 'algorand', 'basic-attention-coin', 'compound', 'celo']; // Available coins

let socket = null; // WebSocket connection

const createWebSocket = (coin) => {
  if (socket) socket.close(); // Close any existing connection before creating a new one
  socket = new WebSocket(`wss://ws.coincap.io/prices?assets=${coin}`);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    Object.keys(data).forEach((ticker) => {
      prices.value[ticker] = parseFloat(data[ticker]);
    });
    updateChart(priceChart);
  };
};

const updateWebSocket = () => {
  createWebSocket(selectedCoin.value); // Create new WebSocket based on selected coin
};

let priceChart;

onMounted(() => {
  const ctx = document.getElementById('priceChart').getContext('2d');

  // Create initial chart
  priceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // Labels (cryptocurrency names)
      datasets: [
        {
          label: 'Price (USD)',
          data: [], // Price data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          tension: 0.4, // Smoothing the line for better appearance on mobile
        },
      ],
    },
    options: {
      responsive: true, // Make chart responsive
      maintainAspectRatio: false, // Full height/width of the container
      scales: {
        y: {
          beginAtZero: true, // Start Y-axis at zero
        },
      },
    },
  });

  // Initialize WebSocket with default coin
  updateWebSocket();

  // Update chart every 2 seconds to reflect new data
  setInterval(() => {
    updateChart(priceChart);
  }, 2000);
});

function updateChart(chart) {
  chart.data.labels = Object.keys(prices.value); // Update labels
  chart.data.datasets[0].data = Object.values(prices.value); // Update price data
  chart.update(); // Refresh chart
}

</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 100%;
  height: 400px; /* Desktop */
  @media (max-width: 600px) {
    height: 300px; /* Mobile */
  }
}

canvas {
  width: 100% !important;
  height: 100% !important;
}

select {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
}
</style>

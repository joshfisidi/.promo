<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import { ref, Ref, onMounted } from 'vue';
import axios from 'axios';
import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale);

export default {
  name: 'CryptoChart',
  setup() {
    const chartCanvas: Ref<HTMLCanvasElement | null> = ref(null);

    onMounted(async () => {
      // ... rest of your code remains unchanged ...
    });

    return {
      chartCanvas
    };
  }
}
</script>


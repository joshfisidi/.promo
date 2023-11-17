<template>
    <div class="chart-area">
      <line-chart
        :chart-data="chartData"
        :gradient-colors="gradientColors"
        :gradient-stops="gradientStops"
        :extra-options="extraOptions"
        :height="200"
      />
    </div>
  </template>
  
  <script setup>
  import { Line } from 'vue-chartjs';
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps({
    chartData: Object,
    gradientColors: Array,
    gradientStops: Array,
    extraOptions: Object
  });
  
  const chartRef = ref(null);
  
  watchEffect(() => {
    if (chartRef.value && props.chartData) {
      chartRef.value.renderChart(props.chartData, props.extraOptions);
    }
  });
  
  defineExpose({ chartRef });
  </script>
  
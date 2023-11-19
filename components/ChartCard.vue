<template>
  <h1 class="Title text-slate-50">GitHub Activity</h1>
  <n-button class="card hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" :class="{ 'expanded': isExpanded }" @click="isExpanded = !isExpanded">
    <div class="content">
      <canvas id="myCanvas"></canvas>
    </div>
  </n-button>
</template>



<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { NButton } from 'naive-ui';
import Chart from 'chart.js/auto';

export default defineComponent({
  components: {
    NButton
  },
  setup() {
    const isExpanded = ref(false);

    onMounted(() => {
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'line', // Chart type
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'Sample Data',
                data: [0, 20, 40, 25, 50, 30, 60], // Placeholder data
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            },
            options: {
              plugins: {
                legend: {
                  display: false // Hide the legend
                }
              },
              scales: {
                x: {
                  display: false // Hide X-axis labels
                },
                y: {
                  display: false // Hide Y-axis labels
                }
              },
              elements: {
                point:{
                  radius: 0 // Hide points on the line
                }
              },
              layout: {
                padding: 10 // Adjust padding as needed
              }
            }
          });
        }
      }
    });

    return { isExpanded };
  }
});
</script>


<style lang="scss" scoped>
@import '/assets/mixin.scss';

.card {
  @apply bg-slate-950 rounded-lg p-4 m-2;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
    }
  }

  &.expanded {
    @apply w-full h-full absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }

  @media (min-width: 640px) { 
    @apply w-1/2;
  }
  @media (min-width: 768px) { 
    @apply w-1/3;
  }
  @media (min-width: 1024px) { 
    @apply w-1/4;
  }
}

@media (max-width: 900px) {
  .card {
    width: 90%;
    height: 8vh;
    max-width: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 0.001rem;
  }
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

#myCanvas {
  max-width: 100vw;
  max-height: 9vh;
}

@keyframes borderAnim {
  to {
    transform: rotate(1turn);
  }
}
</style>

<!-- pages/index.vue -->
<template>
    <div>
      <h1>Multiple Cards Example</h1>
      <div class="card-container">
        <!-- Loop through your array and create cards -->
        <Card v-for="(item, index) in cardData" :key="index">
          <!-- Card content goes here -->
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </Card>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '~/components/Card.vue';
  
  export default {
    components: {
      Card,
    },
    data() {
      return {
        cardData: [
          { title: 'Card 1', description: 'This is the first card.' },
          { title: 'Card 2', description: 'This is the second card.' },
          // Add more card data as needed
        ],
      };
    },
  };
  </script>
  
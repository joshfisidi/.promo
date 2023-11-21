<!-- components/CardGrid.vue -->
<template>
    <div class="card-grid">
      <!-- Create 10 cards using a v-for loop -->
      <div v-for="index in 10" :key="index" class="card">
        <div class="card-content">
          <!-- Card content goes here -->
          <h2>Card {{ index }}</h2>
          <p>This is the content of Card {{ index }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Add styles for the card grid and cards */
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Adjust the gap between cards as needed */
  }
  
  .card {
    flex: 1;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
  }
  
  /* Customize card styles as needed */
  .card-content {
    /* Add your card content styles here */
  }
  </style>
  
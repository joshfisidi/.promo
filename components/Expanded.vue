<template>
    <div class="container mx-auto p-4">
      <div class="flex justify-between space-x-4">
        <!-- Left Column -->
        <div class="flex-1">
          <div class="card p-4 bg-gray-200 mb-4">Card 1</div>
          <div class="card p-4 bg-gray-200">Card 2</div>
        </div>
  
        <!-- Middle Column (Blank) -->
        <div class="flex-1"></div>
  
        <!-- Right Column -->
        <div class="flex-1">
          <div class="card p-4 bg-gray-200 mb-4">Card 3</div>
          <div class="card p-4 bg-gray-200">Card 4</div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  /* Adjust the margins of the container to align with other components */
  .container {
    margin-top: 1rem; /* Adjust as needed */
    margin-bottom: 1rem; /* Adjust as needed */
  }
  
  @media (min-width: 768px) { /* Adjust for tablet screens */
    .container {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  @media (min-width: 1024px) { /* Adjust for desktop screens */
    .container {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
  
  /* Add other styles as needed */
  </style>
  
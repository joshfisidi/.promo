<!-- components/Card.vue -->
<template>
    <div class="card">
      <div class="card-header">
        <!-- Card header content -->
      </div>
      <div class="card-body">
        <!-- Card body content -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
  };
  </script>
  
  <style scoped>
  /* Card styles (customize as needed) */
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
  }
  
  .card-header {
    /* Header styles */
  }
  
  .card-body {
    /* Body styles */
  }
  </style>
  
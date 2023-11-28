<template>
    <div class="relative w-full">
      <!-- Card container will be full width and height to position the cards -->
      <div class="absolute inset-0 flex justify-between">
        <div class="card hidden md:flex">Card 1</div>
        <div class="card hidden md:flex">Pictures</div>
        <div class="card hidden md:flex">Card 3</div>
        <div class="card hidden md:flex">Card 4</div>
      </div>
      <!-- ... Other components ... -->
    </div>
  </template>
  
  <script setup>
  // Script logic if needed
  </script>
  
  <style scoped>
  .card {
    @apply bg-white text-white shadow-md p-4 h-48 absolute;
    width: calc(50% - 0.5rem); /* Each card takes up half the parent's width minus the gap */
  }
  
  /* First and second card to the left */
  .card:nth-child(1), .card:nth-child(2) {
    @apply bg-slate-900 left-0 rounded-lg transition-all duration-200 ease-in-out transform active:scale-90 hover:bg-slate-800 cursor-pointer;
    width: 32.4vw;
    border-left-width: 1.1vw;
    border-color: black;
    height: 37.4vh;
    margin-left: 20px;
  }
  
  /* Third and fourth card to the right */
  .card:nth-child(3), .card:nth-child(4) {
    @apply bg-slate-900 right-0 rounded-lg transition-all duration-200 ease-in-out transform active:scale-90 hover:bg-slate-800 cursor-pointer;
    width: 32.4vw;
    border-right-width: 1vw;
    border-color: black;
    height: 37.4vh;
    margin-right: 20px;
  }
  </style>
  
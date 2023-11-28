<template>
    <div class="relative w-full">
      <!-- Card container will be full width and height to position the cards -->
      <div class="absolute inset-0 flex justify-between">
        <div class="card hidden md:flex">
          <img src="https://via.placeholder.com/150" alt="Card 1 Image" class="object-cover rounded-lg w-full h-full"/>
          Card 1
        </div>
        <div class="card hidden md:flex">
          <img src="https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/HemoSync.gif" alt="Pictures Image" class="object-cover rounded-lg w-full h-full"/>
        </div>
        <div class="card hidden md:flex">
          <img src="https://via.placeholder.com/150" alt="Card 3 Image" class="object-cover rounded-lg w-full h-full"/>
          Card 3
        </div>
        <div class="card hidden md:flex">
          <img src="https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SolNode.gif" alt="Card 4 Image" class="object-cover rounded-lg w-full h-full"/>
          
        </div>
      </div>
      <!-- ... Other components ... -->
    </div>
  </template>
  
  <script setup>
  // Script logic if needed
  </script>
  
  <style scoped>
  .card {
    @apply bg-white text-white shadow-md p-4 h-48 absolute rounded-lg;
    width: calc(50% - 0.5rem); /* Each card takes up half the parent's width minus the gap */
    overflow: hidden; /* Ensure the image is contained within the card */
  }
  
  /* First and second card to the left */
  .card:nth-child(1), .card:nth-child(2) {
    @apply bg-slate-900 left-0 transition-all duration-200 ease-in-out transform active:scale-90 hover:bg-slate-800 cursor-pointer;
    width: 32.4vw;
    border-left-width: 1.1vw;
    border-color: black;
    height: 37.4vh;
    margin-left: 20px;
  }
  
  /* Third and fourth card to the right */
  .card:nth-child(3), .card:nth-child(4) {
    @apply bg-slate-900 right-0 transition-all duration-200 ease-in-out transform active:scale-90 hover:bg-slate-800 cursor-pointer;
    width: 32.4vw;
    border-right-width: 1vw;
    border-color: black;
    height: 37.4vh;
    margin-right: 20px;
  }
  </style>
  
<template>
  <container class="circle-card-container flex flex-col peer-hover: cursor-pointer">
  <div class="circle-card">
    <slot></slot>
  </div>
</container>
</template>

<script setup>
// Your existing script setup
</script>

<style scoped>
.circle-card {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Grows the card on hover */
    }
}
</style>

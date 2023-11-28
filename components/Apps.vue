<template>

    <!-- Nuxt Link (Existing Element) -->
    <nuxt-link
      @touchstart="isActive = true"
      @touchend="isActive = false"
      :class="{ 'scale-90': isActive }"
      class="Apps flex z-10 justify-center text-center flex-grid bg-slate-900 rounded px-4 py-2 mx-7 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 hover:scale-105 cursor-pointer"
      style="
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      "
      to="/Apps"
    >
      Apps
    </nuxt-link>
  
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    return {
      isActive,
    };
  },
};
</script>

<style scoped lang="scss">

.card-style {

  @media (min-width: theme('screens.2xl')) {
    height: 27vh;
}
}
.scale-90 {
  transform: scale(0.9);
}

.card-style {
  height: 30px;
  width: 50%; /* Adjust to match the Nuxt Link card */
  max-width: 30vw; /* Match the Nuxt Link card */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
   /* Choose a background color */
  color: white; /* Choose a text color */
  @apply hidden lg:flex;
   /* Hide by default, show on lg and larger screens */
}

@media (min-width: 1280px) {
  .card-style {
    height: 300px;
    /* Additional styles for larger screens */
  }
}

@media (min-width: 1280px) {
  .Apps {
    width: 50%; /* Adjust this percentage to control the width */
    max-width: 30vw; /* Optional: You can set a max-width if needed */
    margin: auto; /* Centers the element horizontally */
    display: flex;
    justify-content: center; /* Centers items along the main axis */
    align-items: center; /* Centers items along the cross axis */
    flex-direction: column; /* Stacks flex items vertically */
    text-align: center; /* Centers text inside the element */
    padding: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
}
</style>

<template>
  <div class="code-container">
    <nuxt-link
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      :class="{ 'scale-90': isActive }"
      class="Code flex justify-center text-center flex-col bg-slate-900 rounded px-4 py-2 mx-7 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
      to="/Code"
    >
      <Matrix :class="{ 'is-visible': isHovered }" />
      <span class="button-text">Code</span>
    </nuxt-link>
  </div>
</template>

<script>
import { ref } from "vue";
import Matrix from './Matrix.vue';

export default {
  components: {
    Matrix,
  },
  setup() {
    const isActive = ref(false);
    const isHovered = ref(false);

    return { isActive, isHovered };
  },
};
</script>

<style scoped>
.matrix-background {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; /* Lower z-index for the background */
  /* Other styles remain the same */
}

.matrix-background.is-visible {
  display: block;
}

@media (min-width: 768px) {
  .matrix-background.is-visible {
    display: block;
  }
}

.matrix-background {
  display: none;
  /* ... other styles ... */
}
.Code {
  position: relative;
  overflow: hidden;
  z-index: 2; /* Higher z-index to ensure it's above the background */
  border: 2px solid transparent; /* Default border to maintain size on hover */
  transition: border-color 0.3s ease; /* Smooth transition for the border */
}

.Code:hover, .Code:focus {
  border-color: green; /* Green border on hover/focus */
}

.button-text {
  z-index: 3; /* Highest z-index to ensure the text is always on top */
  position: relative;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.bg-gradient-animation {
  background: linear-gradient(0deg, #ff01bf, #00ffbf);
  background-size: 100% 200%;
  animation: gradient-animation 3s linear infinite alternate-reverse;
}

.scale-90 {
  transform: scale(0.9);
}

.Code:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

@media (min-width: 1280px) {
  .Code {
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
/* Rest of your styles */
</style>

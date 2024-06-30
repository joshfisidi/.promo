<template>
  <nuxt-link
    @touchstart="isActive = true"
    @touchend="isActive = false"
    :class="{ 'scale-90': isActive }"
    class="Backstory flex justify-center text-center flex-col bg-gradient-animation bg-slate-900 rounded px-2 py-1 mx-7 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 cursor-pointer"
    style="
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    "
    to="/Backstory"
  >
    Backstory
  </nuxt-link>
</template>

<script>
import { ref } from "vue";

const isActive = ref(false);
</script>

<style scoped lang="scss">
@keyframes gradient-animation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.bg-gradient-animation {
  background: linear-gradient(0deg, #7d0808, #000000);
  background-size: 100% 200%;
  animation: gradient-animation 6s linear infinite alternate-reverse;
}

.scale-90 {
  transform: scale(0.9);
}

.Backstory:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

@media (min-width: 1280px) {
  .Backstory {
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

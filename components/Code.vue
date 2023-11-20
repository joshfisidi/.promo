<!-- In your page component -->
<template>
  <transition name="fade">
    <nuxt-link
      @touchstart="isActive = true"
      @touchend="isActive = false"
      :class="{ 'scale-90': isActive }"
      class="Code flex justify-center text-center flex-col bg-slate-900 rounded px-4 py-2 mx-7 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 hover:scale-105 cursor-pointer"
      style="
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      "
      to="/Code"
    >
      Code
    </nuxt-link>
  </transition>
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
.scale-90 {
  transform: scale(0.9);
  &:hover {
    background-color: #ff05ea; // A slightly darker blue on hover
  }
};


@media (min-width: 1280px) {
  .Code {
    width: 50%; /* Adjust this percentage to control the width */
    max-width: 400px; /* Optional: You can set a max-width if needed */
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

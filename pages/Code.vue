<template>
  <transition name="fade">
    <div class="Code flex justify-center text-center flex-col bg-slate-900 rounded px-4 py-2 mx-7 sm:mx-10 md:mx-16 lg:mx-20 my-4 text-white font-bold mby-2 transition-all duration-200 ease-in-out transform active:scale-90 hover:scale-105 cursor-pointer" @click="toggleModal">
      Code
    </div>
  </transition>

  <div v-if="isModalOpen" class="modal bg-slate-800">
    <div class="modal-content bg-slate-800 p-4 rounded-lg shadow-lg w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 max-w-4xl mx-auto">
      <!-- Flexbox Grid layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <!-- Example cards inside the grid -->
        <a href="https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/ColdAuth.gif" target="_blank" class="card bg-slate-800 rounded-lg p-3">
          <h3 class="card-title">Card 1</h3>
          <p>hey...</p>
          <img src="https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/ColdAuth.gif" alt="Card Image" class="w-full rounded-lg mt-2">
        </a>
        <!-- Repeat the card structure for other cards as needed -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isModalOpen = ref(false);

    const toggleModal = () => {
      isModalOpen.value = !isModalOpen.value;
    };

    return {
      isModalOpen,
      toggleModal,
    };
  },
};
</script>

<style scoped lang="scss">
.modal {
  @apply fixed inset-0 flex items-center justify-center bg-opacity-50 z-50;
}

.modal-content {
  @apply bg-slate-800 p-4 rounded-lg shadow-lg;
  width: 90%;
  max-width: 1000px; // Adjust based on your requirement
}

/* Removed the .grid class styles as they are not needed for Flexbox Grid */

.card {
  position: relative;
}

.scale-90 {
  transform: scale(0.9);
  &:hover {
    background-color: #ff05ea; // A slightly darker blue on hover
  }
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
</style>

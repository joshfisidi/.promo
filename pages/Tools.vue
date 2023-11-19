<template>
  <div class="card" @click="toggleExpansion">
    <div class="card-header rounded flex items-center shadow-md">
      <img src="/icon.png" alt="Icon" class="icon mr-2 rounded">
      <h2 class="card-title px-2">Using these tools</h2>
    </div>
    <div class="card-body" :class="{'hidden': !isExpanded}">
      <!-- Placeholder image -->
      <img src="https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif" alt="Card Image" class="card-image my-4">
      <p>Here's some more detailed information about the card. This section can contain more descriptive content, such as images, lists, or additional text.</p>
    </div>
    <div class="card-footer" :class="{'hidden': !isExpanded}">
      <button class="action-button">Blirce</button>
      <button class="action-button">Bitwire</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply max-w-md mx-auto bg-slate-800 text-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out;
  cursor: pointer;
  @apply sm:max-w-lg md:max-w-xl lg:max-w-2xl;

  &-header {
    @apply p-4 flex items-center shadow-md;
    .icon {
      @apply w-6 h-6;
      @apply md:w-8 md:h-8;
    }
    .card-title {
      @apply text-xl font-bold;
      @apply md:text-2xl;
    }
  }

  &-body {
    @apply p-4 border-t border-gray-700;
    .card-image {
      @apply w-full h-auto rounded-lg shadow-sm;
    }
  }

  &-footer {
    @apply p-4 border-t border-gray-700 flex justify-between;
    .action-button {
      @apply bg-slate-900 hover:bg-slate-700 transition duration-500 ease-in-out text-white font-bold py-2 px-8 rounded;
      &:hover {
        @apply transform scale-105;
      }
      @apply md:text-lg;
    }
  }
}
</style>

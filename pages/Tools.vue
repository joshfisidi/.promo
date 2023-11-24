<template>
  <div class="flex flex-col pb">
    <div v-for="card in cards" :key="card.id" class="card mb-4" @click="toggleExpansion(card)">
      <div class="card-header rounded flex items-center shadow-md">
        <img :src="card.iconUrl" alt="Icon" class="icon mr-2 rounded">
        <h2 class="card-title px-2">{{ card.title }}</h2>
      </div>
      <div class="card-body" :class="{'hidden': !card.isExpanded}">
        <img :src="card.imageUrl" alt="Card Image" class="card-image my-2">
        <p>{{ card.description }}</p>
      </div>
      <div class="card-footer" :class="{'hidden': !card.isExpanded}">
        <button class="action-button">Blirce</button>
        <button class="action-button">Bitwire</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Card {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  imageUrl: string;
  isExpanded: boolean;
}

export default defineComponent({
  setup() {
    const cards = ref<Card[]>([
      { id: 1, title: 'Using these tools', description: 'Glalypso', iconUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Myrlin.gif', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', isExpanded: false },
      { id: 1, title: 'Using these tools', description: 'Glalypso', iconUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Myrlin.gif', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', isExpanded: false },
      { id: 1, title: 'Using these tools', description: 'Glalypso', iconUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Myrlin.gif', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', isExpanded: false },
      { id: 1, title: 'Using these tools', description: 'Glalypso', iconUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Myrlin.gif', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', isExpanded: false },
      { id: 1, title: 'Using these tools', description: 'Glalypso', iconUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/Myrlin.gif', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', isExpanded: false },
      // Add more card objects here
    ]);

    function toggleExpansion(card: Card) {
      card.isExpanded = !card.isExpanded;
    }

    return { cards, toggleExpansion };
  },
});
</script>

<style lang="scss" scoped>
.card {
  background-color: #181818;
  border-radius: 15px;
  padding: 10px;
  width: 80vw; // Adjust the width as needed
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  @apply max-w-md mx-auto bg-slate-800 text-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out;
  @apply sm:max-w-lg md:max-w-xl p-1 m-11 lg:max-w-2xl;

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

    .card-container {
      display: flex;
      justify-content: center; // Centers horizontally
      align-items: center; // Centers vertically
  }

  &-body {
    @apply p-4 border-t border-gray-700;
    .card-image {
      @apply w-full h-auto rounded-3xl shadow-sm;
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

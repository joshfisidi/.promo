
<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-2 m-4">
    <div v-for="card in cards" :key="card.id" @click="openModal(card)" class="card flex flex-grid h-30">
      <img :src="card.imageUrl" alt="Card image" class="rounded-full">
    </div>
  </div>

  <div v-if="showModal" class="modal fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
    <div class="modal-content rounded-xl m-7 bg-white p-8 relative flex flex-col items-center">
      <!-- Exit button -->
      <button @click="closeModal()" class="exit-button absolute top-0 right-0 m-4 bg-slate-500 text-white rounded-full p-2">
     x
      </button>
      <div class="modal-content2 rounded-full p-8 m-9 bg-zinc-400 flex flex-row justify-center gap-4">
        <!-- Cards in a horizontal row within modal -->
        <div v-for="n in 3" :key="n" class="bg-zinc-400 rounded-full p-3 text-white cursor-pointer">
          Card {{ n }}
        </div>
      </div>
      <span class="close cursor-pointer" @click="closeModal()">&times;</span>
      <p>{{ selectedCard.title }}</p>
      <p>{{ selectedCard.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { CardData } from '@/interfaces/CardData';

export default {
  setup() {
    const cards = ref<CardData[]>([
  { id: 1, title: 'jOsh', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif' },
  // ... more cards
]);

    const showModal = ref(false);
    const selectedCard = ref({});

    const openModal = (card) => {
      selectedCard.value = card;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return { cards, showModal, selectedCard, openModal, closeModal };
  }
};
</script>

<style scoped>
.exit-button {
  @apply text-lg font-bold bg-slate-800 text-white rounded-full p-2;
}
.card {
  @apply bg-slate-400 rounded-full shadow-md hover:shadow-lg transition-shadow;
  width: 100%;
  height: 60%;

  position: relative;
}


.modal {
  /* Basic Modal Styling */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  height: 40%;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-content2 {
  background-color: #212222;
  margin: 100% auto;
  padding: 29px;
  border: 1px solid #888;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

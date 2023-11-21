<template>


  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-2 m-4">
    <Card class="card flex flex-grid h-30" v-for="card in cards" :key="card.id" :data="card" />

</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { CardData } from '@/interfaces/CardData';

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
</script>

<style setup="scss" scoped>
.card {
  @apply bg-slate-400 rounded-lg shadow-md hover:shadow-lg transition-shadow;
  width: 100%; 
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .card-content {
    @apply absolute top-0 left-0 w-full h-full;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%; 
      height: 100%; 
      object-fit: cover; 
      border-radius: inherit; 
    }
   
  
  }
}

</style>

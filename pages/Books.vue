<template>
  <div class="card-container mb-2 pb-12">
    <div class="card" @touchstart="expandCard(cards[0].id)" @touchend="collapseCard(cards[0].id)">
      <div class="card-content">
        <img :src="cards[0].image" alt="Card image" class="card-image"/>
        <h2>{{ cards[0].title }}</h2>
        {{ cards[0].content }}
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

const cards = [
  { id: 1, title: "BEFORE THE FALL", content: "FOOD AS POWER", image: "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Books/beforethefall-book1.png" },
  { id: 2, title: "Card 2", content: "Content of Card 2", image: "url-to-image-2.jpg" },
  { id: 3, title: "Card 3", content: "Content of Card 3", image: "url-to-image-3.jpg" },
  // Add more cards as needed
];

const expandedCard = ref(null);

function expandCard(cardId) {
  expandedCard.value = cardId;
}

function collapseCard(cardId) {
  if (expandedCard.value === cardId) {
    expandedCard.value = null;
  }
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .card {
    background-color: #181818;
    border-radius: 15px;
    padding: 10px;
    width: 80vw;
    height: 60vh; // Adjusted height
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    overflow: hidden;

    &:hover {
      transform: scale(1.05);
    }

    // ... other styles for .card-content, .card-image, h2
  }
}

// Media query for larger displays (e.g., iMacs)
@media (min-width: 1368px) {
  .card-container .card {
    padding: 20px;
    height: 70vh; // Adjusted height for larger displays
  }
}

// Media query for specific screen sizes (e.g., landscape tablets)
@media only screen 
and (min-device-width: 512px) 
and (max-device-width: 683px) 
and (-webkit-min-device-pixel-ratio: 2)
and (orientation: landscape) {
  .card-container .card {
    padding: 20px;
    height: 50vh; // Adjusted height for specific screen sizes
  }
}
</style>


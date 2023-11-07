<template>
  <div class="card-container">
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
    width: 80vw; // Take up entire screen width
    height: 50vh; // Adjust the height as needed
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    overflow: hidden; // This prevents child content from overflowing
    &:hover {
      transform: scale(1.05);
    }
    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%;
      background-color: rgb(37, 37, 37); // Adjusted background color
      border-radius: 10px; // Adjusted to apply rounded corners if needed
      font-size: 16px;
      padding-top: 10px;
      border-top: 1px solid #ccc;
      // Repeated styles can be removed in SCSS by not re-declaring them
    }
    .card-image {
      width: 100%; // Make image take up the full width of the card
      height: auto; // Keep the aspect ratio of the image
      border-radius: 10px; // Optional: if you want rounded corners on the image
      margin-bottom: 10px; // Space between image and text content
    }
    h2 {
      color: #fff;
      font-size: 24px;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
}

// Media query for mobile devices
@media (max-width: 768px) {
  .card-container .card {
    padding: 20px; // increased padding more mobile
  }
}
</style>


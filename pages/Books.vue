<template>
  <div class="card-container">
    <div class="card" @touchstart="expandCard(1)" @touchend="collapseCard(1)">
      <div class="card-content">
        <h2>{{ cards[0].title }}</h2>
        {{ cards[0].content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cards = [
  { id: 1, title: "Card 1", content: "Content of Card 1" },
  { id: 2, title: "Card 2", content: "Content of Card 2" },
  { id: 3, title: "Card 3", content: "Content of Card 3" },
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

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  width: 80vw; /* Take up entire screen width */
  height: 50vh; /* Adjust the height as needed */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

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
  }

  h2 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    font-size: 16px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
  }
}
</style>

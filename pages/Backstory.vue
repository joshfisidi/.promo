<template>
  <div class="biography-container">
    <a href="https://example.com" class="header-link">
      <img
        src="https://joshjgomes.github.io/assets/josh-joshjgomes-yashguma-fisidi.GIF"
        alt="Image"
        class="header-image"
      />
    </a>
    <div class="bio-content">
      <h2 class="section-title">The Remarkable Journey of jOsh</h2>
      <p class="section-description">
        A prodigious talent from the heart of the Amazon jungle, the serene
        islands of the Caribbean Sea, and the remote wilderness of the Canadian
        Arctic, Joshua Jerimiah Gomes, known as jOsh, has shattered expectations
        as a musical virtuoso, tech visionary, and explorer of diverse
        landscapes.
      </p>
    </div>
    <div class="card-container">
      <div v-for="card in cards" :key="card.id" class="card">
        <a href="#" class="card-link">
          <img
            src="https://via.placeholder.com/150"
            alt="Card Image"
            class="card-image"
          />
          <div class="card-content">
            {{ card.content }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, content: "A Symphony of Innovation" },
        { id: 2, content: "Harmonizing with Nature" },
        { id: 3, content: "Pioneering Technological Frontiers" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.biography-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.header-link {
  display: block;
  margin-bottom: 20px;
}

.header-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.bio-content {
  margin-bottom: 40px;
}

.section-title {
  font-size: 28px;
  margin-bottom: 20px;
}

.section-description {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  width: calc(50% - 20px); /* Two cards in one row */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  .card-link {
    display: block;
    text-decoration: none;
  }

  .card-image {
    width: 100%;
    height: 120px; /* Set the desired height for the image */
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    font-size: 16px;
    color: #fff;
    background-color: rgba(
      0,
      0,
      0,
      0.7
    ); /* Add transparent background for text */
    padding: 10px;
    border-radius: 0 0 10px 10px;
  }
}
</style>

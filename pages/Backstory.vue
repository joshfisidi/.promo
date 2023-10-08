<template>
  <div class="biography-container">
    <a href="https://example.com" class="header-link">
      <img
        src="@/jasonjoshuatashika-worldsgreatestminds.png"
        alt="Image"
        class="header-image"
      />
    </a>
    <div class="bio-content">
      <h2 class="section-title">The Unremarkable Story of jOsh</h2>
      <p class="section-description">
        write the summary of everything here then within the cards are more precise documentations,
It all starts when The Gomes Family fled Guyana due to greed and corruption within the government. Flying out just after jOsh's first birthday, eventually settling within Petite Valley, Trinidad and Tobago. This neighbourhood was built right on-top an abandoned Arawak graveyard; jOsh often quotes witnessing various paranormal activity as a young boy. Joshua and his family lived in cozy 4 bedroom bungalow with a large background. He spent most of his days outside,
      </p>
    </div>
    <div class="card-container">
      <div v-for="card in cards" :key="card.id" class="card">
        <a href="#" class="card-link">
          <!-- Updated this line to use card.image -->
          <img :src="`/backstory/${card.image}`" alt="Image" class="card-image" />
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
        { id: 1, content: "The Unlikely Birth", image: "theunlikelybirth-josh.jpg" },
        { id: 2, content: "The Haunted Child", image: "thehauntedchild-josh.jpg" },
        { id: 3, content: "A Tempted Toronto Teen", image: "atemptedtorontoteen-josh" },
        { id: 4, content: "What A Bloody Asshole", image: "whatabloodyasshole-josh.jpg" },
        { id: 6, content: "The Toothless Dragon Slayer", image: "thetoothlessdragonslayer-josh.jpg" },
        { id: 7, content: "F*$king Crypto Maniac", image: "fkingcryptomaniac-josh.jpg" },
        { id: 8, content: "Shadowy Loser Coder", image: "shadowylosercoder-josh.jpg" },
        { id: 9, content: "Music Is In My Blood", image: "musicisinmyblood-josh.jpg" },
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
  color: 666;
}

.header-link {
  display: block;
  margin-bottom: 20px;
}

.header-image {
  width: 100%;
  margin-top: 0.2vh;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  margin-top: 0.2vh;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.bio-content {
  margin-bottom: 40px;
}

.section-title,
.section-description {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  animation: wave 2s infinite;
}

/* Define the keyframes for the wave animation */
@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
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
  width: calc(50% - 20px);
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
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    font-size: 16px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 0 0 10px 10px;
  }
}
</style>

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
        Hailing from the serene islands of the Caribbean Sea, the remote wilderness of the Canadian Arctic, and the heart of the Amazon jungle, Joshua Jerimiah Gomes, known as jOsh, is a true autodidact deeply immersed in both the music and tech domains. He dons multiple hats, functioning as a rapper, singer, songwriter, producer, sound engineer, developer, and investor. His journey in both music and technology commenced as early as 2007, but it wasn't until 2014 that jOsh began to truly gain recognition with songs like "The Most" and "Change of Climate" on SoundCloud, earning early accolades from YouTuber Prince EA and catching the attention of DJ Skee. As he performed gigs across the city, his career was gaining momentum, and the future looked promising for this young artist.

        Nevertheless, life threw jOsh an unexpected curveball when he received a sudden chronic illness diagnosis. Despite this formidable setback, over the past five years, jOsh wholeheartedly immersed himself in a rigorous and solitary period of research and self-education. Throughout this time, he continued to create music behind closed doors while concurrently conducting experiments related to his health, extensive coding projects, and establishing a foothold in the fintech industry.

        Now, jOsh has triumphed over his health challenges and stands ready to unveil a series of singles in anticipation of his debut album, "Broke Boy." It marks the dawn of a new chapter in his remarkable journey.
      </p>
    </div>
    <div class="card-container">
      <div v-for="card in cards" :key="card.id" class="card">
        <a href="#" class="card-link">
          <img
        src="https://joshjgomes.github.io/assets/josh-joshjgomes-yashguma-fisidi.GIF"
        alt="Image"
        class="header-image"
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
        { id: 1, content: "Born in Guyana, South America" },
        { id: 2, content: "Childhood in Trinidad & Tobago" },
        { id: 3, content: "Teen years in Toronto, Canada" },
        { id: 4, content: "Toothless with a chronic illness" },
        { id: 5, content: "Cryptocurrency Maniac" },
        { id: 6, content: "Musical Comeback" },
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

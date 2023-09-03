<template>
  <div
    ref="buttonContainer"
    @click="handleClick"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    :class="[
      isActive ? 'expanded' : '',
      'CollapsibleButton',
      'flex',
      'justify-center',
      'text-center',
      'flex-col',
      'bg-slate-900',
      'rounded',
      'px-2',
      'py-1',
      'mx-7',
      'lg:mx-20',
      'my-4',
      'text-white',
      'font-bold',
      'mby-2',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'transform',
      'cursor-pointer',
    ]"
  >
    <span v-if="!isActive"> Music </span>
    <div v-else class="button-container">
      <a
        v-for="imageLink in imageLinks"
        :key="imageLink.url"
        :href="imageLink.url"
        target="_blank"
        rel="noopener noreferrer"
        class="button-link"
      >
        <img :src="imageLink.image" :alt="imageLink.alt" class="button-image" />
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    const buttonContainer = ref(null);
    let touchStartX = 0;

    const toggleExpand = () => {
      isActive.value = !isActive.value;
    };

    const handleClick = (event) => {
      if (
        buttonContainer.value &&
        buttonContainer.value.contains(event.target)
      ) {
        if (!event.target.classList.contains("button-image")) {
          toggleExpand();
        }
      }
    };

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const touchDistance = touchEndX - touchStartX;

      if (Math.abs(touchDistance) < 10) {
        toggleExpand();
      }
    };

    const handleDocumentClick = (event) => {
      if (
        isActive.value &&
        buttonContainer.value &&
        !buttonContainer.value.contains(event.target)
      ) {
        isActive.value = false;
      }
    };

    // ... (other imports and code)
    onMounted(() => {
      document.addEventListener("click", handleDocumentClick);
    });

    const imageLinks = [
      {
        url: "https://example.com/apple",
        image: "/AppleMusic_jOsh_fisidi.svg", // Relative path to your project's public directory
        alt: "Apple Music",
      },
      {
        url: "https://example.com/spotify",
        image: "/Spotify_jOsh_fisidi.png",
        alt: "Spotify",
      },
      {
        url: "https://example.com/spotify",
        image: "/Deezer_jOsh_fisidi.svg",
        alt: "Deezer Music",
      },
      {
        url: "https://example.com/spotify",
        image: "/tidal_jOsh_fisidi.png",
        alt: "Tidal",
      },
      {
        url: "https://example.com/spotify",
        image: "/AmazonMusic_jOsh_fisidi.png",
        alt: "Amazon Music",
      },
      {
        url: "https://example.com/spotify",
        image: "/YouTubeMusic_jOsh_fisidi.png",
        alt: "YouTube Music",
      },
      {
        url: "https://example.com/amazon",
        image: "/iTunesStore_jOsh_fisidi.png",
        alt: "iTunes Store",
      },

      // Add more image links with paths here
    ];

    return {
      isActive,
      toggleExpand,
      handleClick,
      handleTouchStart,
      handleTouchEnd,
      buttonContainer,
      imageLinks,
    };
    // ... (rest of your code)
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  },
};
</script>

<style scoped>
.expanded {
  height: auto;
  padding: 1rem; /* Adjust padding as needed */
}

.CollapsibleButton {
  transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
}

.button-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  flex-wrap: wrap; /* Wrap the buttons to the next line if needed */
  gap: 0.5rem; /* Adjust the margin between buttons */
}

.button-image {
  width: 32px; /* Adjust the width as needed */
  height: 32px; /* Adjust the height as needed */
  cursor: pointer;
  margin-left: 6px;
  transition: transform 0.2s ease-in-out;
}

.button-link {
  text-decoration: none;
}

.button-image:hover {
  transform: scale(1.1);
}
</style>

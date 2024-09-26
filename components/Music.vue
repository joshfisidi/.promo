<template>
  <div
    ref="buttonContainer"
    @click="handleClick"  
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    :class="[
      isActive ? 'expanded' : '',
      'Music',
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
      'hover:scale-105',
      'cursor-pointer'
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
      <img :src="imageLink.image" :alt="imageLink.alt" class="button-image" loading="lazy" />
    </a>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isActive = ref(false);

// Explicitly type buttonContainer as HTMLElement or null.
const buttonContainer = ref<HTMLElement | null>(null);

let touchStartX = 0;

const toggleExpand = () => {
  isActive.value = !isActive.value;
};

const handleClick = (event: MouseEvent) => {
  // Add a check for buttonContainer.value to ensure it's not null.
  if (buttonContainer.value && buttonContainer.value.contains(event.target as Node)) {
    if (!(event.target as HTMLElement).classList.contains('button-image')) {
      toggleExpand();
    }
  }
};

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchEnd = (event: TouchEvent) => {
  const touchEndX = event.changedTouches[0].clientX;
  const touchDistance = touchEndX - touchStartX;

  if (Math.abs(touchDistance) < 10 && !(event.target as HTMLElement).classList.contains('button-image')) {
    toggleExpand();
  }
};

const handleDocumentClick = (event: MouseEvent) => {
  // Add a check for buttonContainer.value to ensure it's not null.
  if (isActive.value && buttonContainer.value && !buttonContainer.value.contains(event.target as Node)) {
    isActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
});

const imageLinks = [
  {
    url: 'https://music.apple.com/ca/artist/josh/1537869034',
    image: '/AppleMusic_jOsh_fisidi.svg',
    alt: 'Apple Music',
  },
  {
    url: 'https://open.spotify.com/artist/5UwjIdMvTjgpLbNtsYri2r',
    image: '/Spotify_jOsh_fisidi.png',
    alt: 'Spotify',
  },
  {
    url: 'https://example.com/spotify',
    image: '/Deezer_jOsh_fisidi.svg',
    alt: 'Deezer Music',
  },
  {
    url: 'https://example.com/spotify',
    image: '/tidal_jOsh_fisidi.png',
    alt: 'Tidal',
  },
  {
    url: 'https://example.com/spotify',
    image: '/AmazonMusic_jOsh_fisidi.png',
    alt: 'Amazon Music',
  },
  {
    url: 'https://example.com/spotify',
    image: '/YouTubeMusic_jOsh_fisidi.png',
    alt: 'YouTube Music',
  },
  {
    url: 'https://example.com/amazon',
    image: '/iTunesStore_jOsh_fisidi.png',
    alt: 'iTunes Store',
  },
];

</script>

<style lang="scss" scoped>
.expanded {
  height: auto;
  padding: 1rem;
  animation-name: ease-in-out;
}

.CollapsibleButton:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}


.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.button-image {
  width: 32px;
  height: 32px;
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

@media (min-width: 1280px) {
  .Music {
    width: 50%; /* Adjust this percentage to control the width */
    max-width: 30vw; /* Optional: You can set a max-width if needed */
    margin: auto; /* Centers the element horizontally */
    display: flex;
    justify-content: center; /* Centers items along the main axis */
    align-items: center; /* Centers items along the cross axis */
    flex-direction: column; /* Stacks flex items vertically */
    text-align: center; /* Centers text inside the element */
    padding: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
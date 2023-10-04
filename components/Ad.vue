<template>
  <div class="flex justify-center">
    <!-- Ad Video -->
    <a href="https://replacethis.com" target="_blank" class="link-wrapper">
      <div
        class="Alert text-transparent bg-slate-900 rounded-lg px-4 py-3 mx-2 my text-white font-bold text-xs transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
        @touchstart="isActiveAd = true"
        @touchend="isActiveAd = false"
        :class="{ 'scale-90': isActiveAd }"
      >
        <div class="iframe-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YAmt4qNq3X4"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </a>

    <!-- Twitter Video -->
    <a href="https://twitter.com" target="_blank" class="link-wrapper">
      <div
        class="Alert text-transparent bg-slate-900 rounded-lg px-4 py-3 mx-2 my text-white transition-all duration-200 ease-in-out transform cursor-pointer button-mask"
        @touchstart="isActiveTwitter = true"
        @touchend="isActiveTwitter = false"
        :class="{ 'scale-90': isActiveTwitter }"
      >
        <div class="iframe-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WkXJpoC1Me0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.Alert {
  height: 15vh;
}

.iframe-container {
  width: 100%;
  height: 100%;
  border-radius: 10px; /* Rounded edges for the container */
  overflow: hidden; /* Clip the rounded edges */
  position: relative; /* Needed for positioning */
}

iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.link-wrapper {
  text-decoration: none; /* Remove the default underline on links */
}

/* Media queries for responsiveness */

/* Large screens (e.g., desktops) */
@media (min-width: 1280px) {
  a .Alert {
    width: 45.6vw;
  }
}

/* Medium screens (e.g., tablets) */
@media (min-width: 768px) and (max-width: 1279px) {
  a .Alert {
    width: 46vw;
  }
}

/* Small screens (e.g., phones) */
@media (max-width: 767px) {
  a .Alert {
    width: 41vw; /* Your initial setting */
  }
}
</style>

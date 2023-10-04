<template>
  <div class="Josh flex items-center justify-center">
    <div
      class="m-8 transition-all duration-200 ease-in-out transform active:scale-90 cursor-pointer"
      @contextmenu.prevent
      @mousedown.prevent
      @mouseup.prevent
      @mouseleave.prevent
      @touchstart.prevent
      @touchend.prevent
      :class="{ 'scale-90': isActive }"
    >
      <div class="flex flex-col items-center text-center">
        <div class="md:flex-shrink-0">
          <div class="w-24 h-24 md:w-24 md:h-24 flex items-center justify-center" @touchstart="isActive = true" @touchend="isActive = false">
            <img class="object-cover w-full h-full rounded-full" :src="image" :alt="title" />
          </div>
        </div>
        <div class="px-8 py-6">
          <div class="fade-text font-extrabold tracking-wide text-sm text-white">{{ title }}</div>
          <p class="mt-2 text-gray-300 text-base">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  props: {
    image: {
      type: String,
      required: true,
      default: "https://joshjgomes.github.io/assets/josh-joshjgomes-yashguma-fisidi.GIF" // This is a placeholder image
    },
    title: {
      type: String,
      required: true,
      default: "jOsh" // This is a placeholder title
    },
    description: {
      type: String,
      required: true,
      default: "Musician/Developer" // This is a placeholder description
    }
  }
};
</script>

<style lang="scss">

.scale-90 {
  transform: scale(0.90);
}
</style>

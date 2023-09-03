<template>
  <div>
    <div class="flex justify-center -mt-10 mb-6 -my">
      <template v-for="item in items" :key="item.index">
        <a
          :href="item.href"
          class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mx-6 circle"
          :class="{
            'bg-black': !isActive || (isActive && activeIndex === item.index),
            'bg-gray-500': isActive && activeIndex !== item.index,
            'rounded-full': true,
          }"
          @touchstart="activate(item.index)"
          @touchend="deactivate"
        >
          <div class="circle-mask">
            <img :src="item.imageSrc" class="circle-image" />
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    const activeIndex = ref(0);

    const items = [
      {
        index: 1,
        href: "https://instagram.com/joshjgomes",
        imageSrc:
          "https://github.com/joshjgomes/assets/blob/main/discord_logo.png?raw=true",
      },
      {
        index: 2,
        href: "https://instagram.com/joshjgomes",
        imageSrc:
          "https://github.com/joshjgomes/assets/blob/main/instagram_logo.png?raw=true",
      },
      {
        index: 3,
        href: "https://x.com/joshjgomes",
        imageSrc:
          "https://github.com/joshjgomes/assets/blob/main/x_logo.png?raw=true",
      },
      {
        index: 4,
        href: "https://t.snapchat.com/jBkudev5",
        imageSrc:
          "https://github.com/joshjgomes/assets/blob/main/snapchat_logo.png?raw=true",
      },
    ];

    const activate = (index) => {
      isActive.value = true;
      activeIndex.value = index;
    };

    const deactivate = () => {
      isActive.value = false;
    };

    return {
      isActive,
      activeIndex,
      items,
      activate,
      deactivate,
    };
  },
};
</script>

<style scoped>
.circle {
  border-radius: 50%;
}

.circle-mask {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
}

.circle:active .circle-mask {
  transform: scale(0.9);
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>

<template>
  <div>
    <div class="flex justify-center -mt-10 mb-6 -my">
      <template v-for="item in items" :key="item.index">
        <a
          :href="item.href"
          class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-12 lg:h-12 xl:w-8 xl:h-8 flex items-center justify-center mx-6 active:scale-90 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
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
          "/discord-ghost-logo.GIF",
      },
      {
        index: 2,
        href: "https://instagram.com/joshjgomes",
        imageSrc:
          "/instagram_logo.png",
      },
      {
        index: 3,
        href: "https://x.com/joshjgomes",
        imageSrc:
          "/x_logo.png",
      },
      {
        index: 4,
        href: "https://t.snapchat.com/jBkudev5",
        imageSrc:
          "/snapchat_logo.png",
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

<style scoped lang="scss">
.circle {
  @apply rounded-full;
  width: 12vw; 
  height: 4vh; 
  margin: 9 6px;

  @media (min-width: theme('screens.sm')) {
    @apply w-16 h-16;
  }

  @media (min-width: theme('screens.md')) {
    @apply w-20 h-20;
  }

  @media (min-width: theme('screens.lg')) {
    @apply w-24 h-24;
  }

  @media (min-width: theme('screens.xl')) {
    @apply w-28 h-28;
  }

  @media (min-width: theme('screens.2xl')) {
    width: 70px; 
    height: 40px;
    margin: 18px;
    padding-inline: 1px;
  }

}

.circle-mask {
  @apply w-full h-full flex items-center justify-center transition-transform duration-200 ease-in-out;
}

.circle:active .circle-mask {
  @apply scale-90;
}

.circle-image {
  @apply w-full h-full object-cover rounded-full;
}
</style>




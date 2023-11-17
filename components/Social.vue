<template>
  <div>
    <div class="flex justify-center -mt-10 mb-6 -my">
      <template v-for="item in items" :key="item.index">
        <a
          :href="item.href"
          class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mx-6 active:scale-90 hover:scale-105 cursor-pointer circle"
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

/* iPads in portrait mode */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
  .circle {
    width: 18px;
    height: 18px;
    margin: 0 10px;
  }
}

/* iPads in landscape mode */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  .circle {
    width: 22px;
    height: 22px;
    margin: 0 12px;
  }
}

/* Laptops */
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .circle {
    width: 24px;
    height: 24px;
    margin: 0 15px;
  }
}

/* Desktops */
@media only screen and (min-width: 1281px) {
  .circle {
    width: 40px;
    height: 40px;
    margin: 0 18px;
  }

  .circle-mask {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out; /* already existing */
  }
  
  .circle:active .circle-mask, .circle:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in-out; /* added for quick response */
  }
  
}
</style>


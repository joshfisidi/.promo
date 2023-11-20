<template>
  <div class="top-container flex items-start justify-center px-4">
    <div
      class="coin m-8 transition-all duration-500 ease-in-out transform active:scale-90 cursor-pointer" style="padding-bottom: 0px;padding-top: 0px;"
      @click="flipCoin"
      :class="{ heads: isHeads, tails: isTails }"
    >
      <div class="flex flex-col items-center text-center">
        <div class="md:flex-shrink-0">
          <div class="w-24 h-24 md:w-24 md:h-24 flex items-center justify-center">
            <img class="object-cover w-full h-full rounded-full" :src="image" :alt="title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isHeads: false,
      isTails: false,
      image: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif', // Replace with your image URL
    };
  },
  methods: {
    flipCoin() {
      this.isHeads = false;
      this.isTails = false;

      const flipResult = Math.random();
      setTimeout(() => {
        if (flipResult <= 0.5) {
          this.isHeads = true;
        } else {
          this.isTails = true;
        }
      }, 100);
    }
  }
};
</script>


<style scoped lang="scss">
@keyframes flip-heads {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(1800deg); }
}

@keyframes flip-tails {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(-1800deg); }
}

.top-container {
  min-height: 22vh;  // Full viewport height
  padding-top: 3px;  // Adjust the top padding as needed
  padding-bottom: 3vh;
  @media (max-width: 640px) { // Example breakpoint for mobile devices
    padding-top: 10px;
  }
  }

.coin {
  width: 3vw;
  height: 3vh;
  min-height: 10vh;  // Full viewport height
  padding-top: 2vh;  // Adjust the top padding as needed
  padding-bottom: 13vh;

  &.heads, &.tails {
    transform-style: preserve-3d;
    position: relative;
  }

  &.heads {
    animation: flip-heads 2s forwards;
  }

  &.tails {
    animation: flip-tails 2s forwards;
  }
  
}
</style>

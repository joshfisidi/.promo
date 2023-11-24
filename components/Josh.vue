<template>
  <div class="user-card pt-1 -mb-16 overflow-hidden">
    <div class="top-container flex items-start justify-center">
      <div
        class="coin transition-all duration-500 ease-in-out transform active:scale-90 cursor-pointer"
        @click="flipCoinAndAddPoint"
        :class="{ heads: isHeads, tails: isTails }"
      >
        <div class="flex flex-col items-center text-center">
          <div class="md:flex-shrink-0">
            <img class="object-cover rounded-full" :src="image" :alt="title" />
            <span v-if="showPoint" class="point-animation">+1</span>
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
      showPoint: false,
      image: 'https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif',
    };
  },
  methods: {
    flipCoinAndAddPoint() {
      this.flipCoin();
      this.addPoint();
    },
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
    },
    addPoint() {
      this.showPoint = true;
      setTimeout(() => {
        this.showPoint = false;
      }, 1000); // Duration of the point animation
    }
  },
};
</script>


<style scoped lang="scss">

.point-animation {
  position: absolute;
  top: -1px;
  right: 0;
  animation: pointMoveUp 1s ease-out forwards;
  color: rgb(253, 253, 252);
  font-weight: bold;
  font-size: 1.5rem; // Adjusted for visibility
  z-index: 1000;
}

@keyframes pointMoveUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}

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
    // Increase the width and height to make the spinner larger
    width: 33vw; // Adjusted width
    height: 26.5vh; // Adjusted height
    min-height: 15vh; // Adjusted minimum height
    padding-top: 2vh;
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
    
    // Image inside the coin
    img {
      width: 100%; // Make image take up the full width of the coin
      height: auto; // Keep the aspect ratio of the image
      border-radius: 50%; // Rounded image
    }
  }
</style>

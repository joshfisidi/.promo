<template>
  <div class="user-card pt-1 -mb-16 overflow-hidden">
    <div class="top-container flex flex-col items-center justify-center relative">
      <div
        class="coin transition-all duration-500 ease-in-out transform cursor-pointer"
        @click="flipCoinAndAddPoint"
        :class="{ heads: isHeads, tails: isTails }"
      >
        <img class="object-cover rounded-full" :src="image" :alt="title" />
      </div>
      <span
        v-for="point in points"
        :key="point.id"
        class="points"
        :style="getPointStyle(point)"
      >
        +1
      </span>

      <div class="post-container w-full max-w-md mt-4">
        <div v-for="post in posts" :key="post.id" class="post-card">
          <div v-if="isLoading" class="skeleton-loader"></div>
          <div v-else>
            <h3 class="text-lg font-semibold">{{ post.title }}</h3>
            <p class="text-sm">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isHeads = ref(false);
    const isTails = ref(false);
    const image = ref('https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/yashgumaeternal-2.png');
    const points = ref([]);
    const posts = ref([]);
    const isLoading = ref(true);
    const title = ref('Josh');

    const getPointStyle = (point) => ({
      top: point.position + 'px',
      fontSize: point.size + 'rem',
      opacity: point.opacity
    });

    const flipCoinAndAddPoint = () => {
      flipCoin();
      addPoint();
    };

    const flipCoin = () => {
      isHeads.value = false;
      isTails.value = false;

      setTimeout(() => {
        isHeads.value = Math.random() <= 0.5;
        isTails.value = !isHeads.value;
      }, 100);
    };

    const addPoint = () => {
      const newPoint = {
        id: Date.now(),
        position: -20,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5
      };
      points.value.push(newPoint);

      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed < 1000) {
          newPoint.position -= 1;
          requestAnimationFrame(animate);
        } else {
          points.value = points.value.filter(point => point.id !== newPoint.id);
        }
      };
      requestAnimationFrame(animate);
    };

    const preventDownload = (event) => event.preventDefault();

    const handleTouchStart = (event) => {
      event.target.dataset.touchStartTime = Date.now();
    };

    const handleTouchEnd = (event) => {
      const touchStartTime = parseInt(event.target.dataset.touchStartTime || '0', 10);
      if (Date.now() - touchStartTime > 500) {
        event.preventDefault();
      }
    };

    onMounted(() => {
      const imageElement = document.querySelector('.coin img');
      if (imageElement) {
        imageElement.addEventListener('contextmenu', preventDownload);
        imageElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        imageElement.addEventListener('touchend', handleTouchEnd, { passive: false });
      }

      setTimeout(() => {
        posts.value = [
          { id: 1, title: 'First Post', body: 'This is the first post content.' },
          { id: 2, title: 'Second Post', body: 'This is the second post content.' },
        ];
        isLoading.value = false;
      }, 2000);
    });

    return {
      isHeads,
      isTails,
      image,
      points,
      posts,
      isLoading,
      title,
      getPointStyle,
      flipCoinAndAddPoint
    };
  }
};
</script>

<style scoped>
.user-card {
  overflow: visible;
  z-index: 50;
  padding-bottom: 2rem;
}

.top-container {
  position: relative;
  min-height: 10rem;
}

.coin {
  width: 40vw;
  height: 40vw;
  max-width: 200px;
  max-height: 200px;
  padding: 0;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .coin {
    width: 30vw;
    height: 30vw;
  }
}

@media (min-width: 1024px) {
  .coin {
    width: 20vw;
    height: 20vw;
  }
}

.coin.heads, .coin.tails {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
}

.coin.heads {
  -webkit-animation: flip-heads 2s forwards;
  animation: flip-heads 2s forwards;
}

.coin.tails {
  -webkit-animation: flip-tails 2s forwards;
  animation: flip-tails 2s forwards;
}

.coin img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
}

.points {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-animation: fadeOut 1s ease-out forwards;
  animation: fadeOut 1s ease-out forwards;
  color: rgb(253, 253, 252);
  font-weight: bold;
  z-index: 1000;
}

.post-container {
  padding-left: 1rem;
  padding-right: 1rem;
}

.post-card {
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.skeleton-loader {
  background-color: #e2e8f0;
  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  height: 4rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

@-webkit-keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@-webkit-keyframes flip-heads {
  from { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }
  to { -webkit-transform: rotateY(1800deg); transform: rotateY(1800deg); }
}

@keyframes flip-heads {
  from { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }
  to { -webkit-transform: rotateY(1800deg); transform: rotateY(1800deg); }
}

@-webkit-keyframes flip-tails {
  from { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }
  to { -webkit-transform: rotateY(-1800deg); transform: rotateY(-1800deg); }
}

@keyframes flip-tails {
  from { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }
  to { -webkit-transform: rotateY(-1800deg); transform: rotateY(-1800deg); }
}

@-webkit-keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}
</style>

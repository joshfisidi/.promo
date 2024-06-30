<template>
  <div class="flex justify-center items-center min-h-screen bg-black p-10">
    <swiper
      :cssMode="true"
      :navigation="false"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="mySwiper"
    >
      <!-- Iterate over images array to create swiper slides -->
      <swiper-slide 
        class="image bg-slate-900 rounded-lg p-7 justify-items-center " 
        v-for="(image, index) in images" 
        :key="index"
      >
        <div class="flex justify-center items-center">
          <img :src="image" alt="Slide" class="max-w-full h-auto rounded-lg">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Array of image URLs
    const images = [
      "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SolNode.gif",
      "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SolNode.gif",
      "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SolNode.gif",
      "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Code/SolNode.gif",
      // Add more image URLs as needed
    ];

    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      images, // Make the images array available in the template
    };
  },
});
</script>

<style>
/* Ensure to import your main Tailwind CSS file if not globally imported */


/* Additional custom styles for Swiper (if needed) */
.mySwiper {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* Custom styles, if necessary */
}

.image {
  height: auto;
  max-height: 55vh;
  margin-bottom: 100px;
  justify-items: center;
   display: flex;
  justify-content: center;
  align-items: center;
}


.swiper-pagination-bullet {
  background-color: #fff;
}
</style>

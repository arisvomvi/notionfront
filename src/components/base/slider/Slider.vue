<template>
  <swiper
    :slides-per-view="auto"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="https://picsum.photos/400/300" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/401/300" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/402/300" /></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    name: 'Slider',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<style lang="scss">
.swiper {
  outline: 1px solid black;
  margin: 0 20px;;
  .swiper-slide {
    min-height: 200px;
    outline: 1px solid red;
  }
}
</style>
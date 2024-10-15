<template>
  <div class="slider">
    <gng-button icon="<-" />
    <swiper
      :navigation="true"
      :slides-per-view="'auto'"
      :pagination="true" :modules="modules"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><img src="https://picsum.photos/1200/600" /></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/1210/600" /></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/1220/600" /></swiper-slide>
    </swiper>
    <gng-button icon="->" />
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  // Import Swiper styles
  
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
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style lang="scss">
@import './slider.scss';


</style>
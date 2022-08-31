<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="img in imgList" :key="img" >
        <img :src="img" />
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
      ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
      ><swiper-slide>Slide 9</swiper-slide> -->
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

  // import required modules
  import { Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
    const imgList = ['../../src/assets/star.svg', '../../src/assets/atom.svg','../../src/assets/circle1.svg','../../src/assets/star.svg','../../src/assets/circle1.svg','../../src/assets/circle1.svg','../../src/assets/circle1.svg' ]
      return {
        modules: [Pagination, imgList],
      };
    },
  };
  </script>
  
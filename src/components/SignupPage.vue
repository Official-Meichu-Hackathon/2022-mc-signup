<template>
  <HeaderMd class="hidden md:block" ref="headerMd" name="headerMd" id="headerMd" />
  <div class="hidden md:block h-[99px] md:h-[100px] lg:h-[102px]"></div>

  <div class="w-screen bg-bgColor py-20">
    <!-- <PopupIntro class="w-[50%] m-auto mb-10 pop-window" /> -->
    <!-- <img src="../assets/test_main_img.svg" class="w-screen" /> -->
    <Topics />
    <Workshop />
    


    <Prospect class="hidden md:block" />
    <!-- <Information /> -->

    <HowToSignup />
    
    <Staff />
  </div>

  <SignupBtn class="" />
  
  <!-- <div class="h-[1000px]"></div>> -->
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import HeaderMd from './HeaderMd.vue';
import SignupBtn from './SignupBtn.vue';
import Prospect from './Prospect.vue';
import Information from './Information.vue'
import HowToSignup from './HowToSignup.vue'
import Workshop from './Workshop.vue';
import Topics from './Topics.vue';
import Staff from './Staff.vue'
import PopupIntro from './PopupIntro.vue';

// onMounted(() => window.addEventListener('resize', getHeaderHeight))

// function getHeaderHeight() {
//   // let headerHeight = document.getElementsByName('headerMd').clientHeight;
//   let headerHeight = ('#headerMd').clientHeight;
//   console.log("height: ", headerHeight)
// }

</script>

<style>

</style>
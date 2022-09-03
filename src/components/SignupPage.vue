<template>
  <HeaderMd 
    class="hidden md:block" 
    ref="headerMd" 
    name="headerMd" 
    id="headerMd" 
    @jumpTo = "GoToPage($event)"
  />
  <Footer />
  <div class="hidden md:block"></div>

  <div class="w-screen bg-bgColor py-20" id="home">
    <div class="h-[300px]"></div>
    <HomeMd /> 
    <!-- <PopupIntro class="w-[50%] m-auto mb-10 pop-window" /> -->
    <!-- <img src="../assets/test_main_img.svg" class="w-screen" /> -->
    <Prospect id="block0" />
    <Information id="block1" />
    <GroupIntro id="block2" />
    <HowToSignup id="block3" />
    <Workshop id="block4" />
    <Award id="block5" />
    <Topics id="block6" />
    <Sponsor id="block7" />
    <Staff id="block8" />
    
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
import Footer from './Footer.vue';
import GroupIntro from './GroupIntro.vue';
import Sponsor from './Sponsor.vue';
import Award from './Award.vue'
import HomeMd from './HomeMd.vue';
// onMounted(() => window.addEventListener('resize', getHeaderHeight))

// function getHeaderHeight() {
//   // let headerHeight = document.getElementsByName('headerMd').clientHeight;
//   let headerHeight = ('#headerMd').clientHeight;
//   console.log("height: ", headerHeight)
// }



const GoToPage = (id) => {
  console.log("id: ", id)
  const element = document.getElementById("block" + id)
  const headerOffset = 150
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  console.log("elementPosition: ", elementPosition)
  window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
}
// const GoToPage = (index) => {
//   scroll("block" + index)
// }

</script>

<style>

</style>
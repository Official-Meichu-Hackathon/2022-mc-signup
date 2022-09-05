<template>
  <HeaderMd 
    class="hidden md:block" 
    ref="headerMd" 
    name="headerMd" 
    id="headerMd" 
    @jumpTo = "GoToPage($event)"
  />
  <Footer />

  <div class="w-screen bg-bgColor py-0 md:py-20 overflow-x-hidden" id="home">
    <!-- <div class="h-[300px]"></div> -->
    <Home /> 
    <Prospect id="block0" />
    <Information />
    <GroupIntro />
    <HowToSignup id="block3" />
    <Workshop id="block4" />
    <Award />
    <Topics />
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
import Home from './Home.vue';

const GoToPage = (id) => {
  const element = document.getElementById("block" + id)
  const headerOffset = 100
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
}
const refresh = () => {
  if (location.href.indexOf("#reloaded") == -1) {
    console.log("refresh!")
    location.href = location.href + "#reloaded";
    location.reload();
  }
}

setTimeout('refresh()',3000);
</script>

<style>

</style>
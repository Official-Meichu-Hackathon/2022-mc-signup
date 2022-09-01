<template>
  <!-- md -->
  <div class="hidden md:block relative w-screen aspect-[1440/1024] mx-auto">
    <p 
      class="absolute title top-[5.4%] right-[10.9%] text-3xl lg:text-5xl xl:text-6xl "
    >
      比賽資訊&lt;&lt;&lt;
    </p>
    <img 
      src="../assets/info_timeline.svg"
      class="absolute w-full aspect-[1440/1024]"  
    />
    <img 
      src="../assets/global.svg"
      class="global"
    />
  </div>

  <!-- sm -->
  <div class="block md:hidden flex flex-col w-[90%] mx-auto">
    <p class="title text-2xl ml-auto">
      比賽資訊&lt;&lt;&lt;
    </p>
    <img src="../assets/info_timeline_sm.svg" class="translate-x-[22%] xs:translate-x-[28%] w-[95%] xs:w-[80%]" />
  </div>

</template>

<script setup>

window.addEventListener('scroll', () => {
  const scrollPositionY = window.pageYOffset / 1.5

  const global = document.querySelector('.global')
  const globalMoveSpeed = -0.7
  global.dataset.speed = globalMoveSpeed
  global.style.transform = `translateY(${scrollPositionY * globalMoveSpeed}px)`;
})

</script>

<style>
.global {
  width: 15%;
  position: absolute;
  transform: rotate(17.21deg);
  margin-top: 100%;
  right: 2.2%;
  top: 0%;

}
</style>
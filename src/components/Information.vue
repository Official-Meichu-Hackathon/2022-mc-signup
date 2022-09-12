<template>
  <!-- md -->
  <div id="block1" class="hidden md:block relative w-screen aspect-[1440/1024] mx-auto">
    <p 
      class="absolute title top-[5.4%] right-[10.9%] mx-auto text-3xl lg:text-5xl xl:text-6xl z-[3]"
    >
      比賽資訊&lt;&lt;&lt;
    </p>
    <!-- <img 
      src="../assets/info_timeline.svg"
      class="absolute w-full aspect-[1440/1024] svgDisplay"  
    /> -->
    <object data-data="/info_timeline.svg" type="image/svg+xml" width="100%" class="svgDisplay"></object>
    <img 
      data-src="/global.svg"
      class="global"
    />
    <img 
      data-src="/global.svg"
      class="global2 rotateAnimation"
    />
  </div>

  <!-- sm -->
  <div class="block md:hidden flex flex-col w-[80%] mx-auto">
    <p class="title text-2xl ml-auto">
      比賽資訊&lt;&lt;&lt;
    </p>
    <p class="text-white font-bold leading-7 sm:leading-10 tracking-[0.16em] mx-auto my-[2%] text-xs sm:text-sm">
      時間：10/22(六)~10/23(日)
      <br />
      地點：清華大學新體育館
    </p>
    <div class="translate-x-[25%] sm:translate-x-[28%] w-[70%] sm:w-[80%] mx-auto svgDisplay">
      <object data-data="/info_timeline_sm.svg" type="image/svg+xml" width="100%" class="svgDisplay"></object>
    </div>
    <!-- <object data="/info_timeline_sm.svg" type="image/svg+xml" class="translate-x-[25%] sm:translate-x-[28%] w-[70%] sm:w-[80%] svgDisplay"></object> -->
    <!-- <img src="../assets/info_timeline_sm.svg" class="translate-x-[25%] sm:translate-x-[28%] w-[70%] sm:w-[80%] svgDisplay" /> -->
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
  width: 10%;
  position: absolute;
  transform: rotate(-29.34deg);
  margin-top: 100%;
  right: 50.2%;
  left: 35%;
  top: 55%;

}

.global2 {
  position: absolute;
  width: 15%;
  right: 10.2%;
  left: 82%;
  top: 55%;

}
.rotateAnimation {
  animation: rotateAnimation 7s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: 0.5s;
  animation-direction:alternate;
}
@keyframes rotateAnimation {
	from {transform: rotateY(45deg);}
	to {transform: rotateY(225deg);}
}

.svgDisplay {
  -webkit-transform: scale3d(1, 1, 1);
  -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
}
</style>
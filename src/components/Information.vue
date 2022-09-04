<template>
  <!-- md -->
  <div class="hidden md:block relative w-screen aspect-[1440/1024] mx-auto">
    <p 
      class="absolute title top-[5.4%] right-[10.9%] text-3xl lg:text-5xl xl:text-6xl z-10"
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
    <img 
      src="../assets/global.svg"
      class="global2 rotateAnimation"
    />
  </div>

  <!-- sm -->
  <div class="block md:hidden flex flex-col w-[90%] mx-auto">
    <p class="title text-2xl ml-auto">
      比賽資訊&lt;&lt;&lt;
    </p>
    <p class="text-white font-bold leading-7 sm:leading-10 tracking-[0.16em] mx-auto my-[2%] text-[0.75rem] sm:text-[1rem]">
      時間：10/22(六)~10/23(日)
      <br />
      地點：清華大學新體育館
    </p>
    <img src="../assets/info_timeline_sm.svg" class="translate-x-[25%] sm:translate-x-[28%] w-[70%] sm:w-[80%]" />
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
</style>
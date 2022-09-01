<template>
  <div class="relative w-screen aspect-[1440/1024] mx-auto">
    <!-- <p 
      class="absolute title right-[5%] top-[10%] text-3xl lg:text-5xl xl:text-6xl "
    >
      比賽資訊&lt;&lt;&lt;
    </p> -->
    <img 
      src="../assets/info-bg.svg"
      class="absolute w-full opacity-40"  
    />
    
    <div class="absolute flex flex-col w-full h-full">
      <div class="w-[90%]">
        <p 
          class="title text-3xl lg:text-5xl xl:text-6xl text-right my-10"
        >
          比賽資訊&lt;&lt;&lt;
        </p>
      </div>
      <div class="grid grid-cols-3 justify-items-center -mt-10 w-[90%] h-full mx-auto">
        <img 
          src="../assets/timeline1.svg" 
          class="self-start w-[90%]"
        />
        <img 
          src="../assets/timeline2.svg" 
          class="self-end w-[100%]"
        />
        <div class="hidden md:block relative w-[80%]"> 
          <img 
            src="../assets/global.svg"
            class="global"
          />
        </div>
      </div>
    </div>
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
  width: 80%;
  position: absolute;
  bottom: -100%;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
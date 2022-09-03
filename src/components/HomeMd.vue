<template>
  <div class="relative aspect-[1440/715] w-screen">
    <img src="../assets/home/home-bg.svg"
      class="absolute w-full top-0 bottom-0"
    />
    <img src="../assets/home/frame.svg"
      class="absolute top-[3.83%] bottom-[3.73%] left-[3.29%] right-[3.27%] m-auto w-[34.26%]"
    />
    <img src="../assets/home/title.svg" 
      class="absolute title_move top-[40%] bottom-[54%] left-[4.62%] right-[4.59%] m-auto w-[7.84%]"
    />
  </div>
</template>

<script setup>

</script>

<style>
.title_move {
  animation: title_moving 5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes title_moving {
  5% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(4.3);
    /* transform: translateY(-125%); */
  }
  60% {
    transform: scale(3);
  }
  75% {
    transform: scale(4);
    /* transform: translateY(125%); */
  }
  95% {
    transform: scale(3.5);
    /* transform: translateY(100%); */
  }
  100% {
    transform: scale(4);
    /* transform: translateY(100%); */
  }
}
</style>
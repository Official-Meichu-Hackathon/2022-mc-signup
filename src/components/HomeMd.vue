<template>
  <div class="relative aspect-[1440/715] w-screen overflow-x-hidden overflow-y-hidden">
    <img src="../assets/home/home-bg.svg"
      class="absolute w-full top-0 bottom-0"
    />
    <img src="../assets/home/frame.svg"
      class="absolute top-[3.83%] bottom-[3.73%] left-[3.29%] right-[3.27%] m-auto w-[34.26%]"
    />
    <img 
      src="../assets/home/title.svg" 
      class="absolute scale top-[40%] bottom-[54%] left-[4.62%] right-[4.59%] m-auto w-[7.84%]"
    />
    <img 
      src="../assets/home/icon-rt.svg"
      class="absolute scale origin-bottom-left w-[3.1%] top-[33%] bottom-[75.78] left-[60.25%] right-[32.6%] m-auto"
    />
    <img 
    src="../assets/home/icon-lt.svg"
    class="absolute scale origin-bottom-right w-[3%] left-[35.6%] right-[61.7%] top-[36.58%] bottom-[62%] pb-[0.5%] pr-[0.5%] m-auto"
    />
    <img 
      src="../assets/home/icon-rb.svg"
      class="absolute scale origin-top-left w-[3.25%] left-[65%] right-[28.35%] top-[59.3%] bottom-[30%] m-auto"
    />
    <img 
      src="../assets/home/icon-lb2.svg"
      class="absolute scale origin-top-right w-[4.5%] left-[33.4%] right-[56.8%] top-[59.6%] bottom-[24%] m-auto"
    />
    <img
      src="../assets/home/icon-l.svg"
      class="absolute scale origin-right w-[5.5%] left-[30.6%] right-[68.4%] top-[52.3%] bottom-[43.7%] pr-[4%] m-auto"
    />
    <img
      src="../assets/home/text-r.svg"
      class="absolute scale origin-left w-[10%] left-[34.7%] right-[35.2%] top-[39.5%] bottom-[55.4%] pl-[5%]"
    />
    <img 
      src="../assets/home/text-l.svg"
      class="absolute scale origin-right w-[10%] left-[40.7%] right-[37.6%] top-[63%] bottom-[30%] pr-[5.5%] m-auto"
    />
  </div>
</template>

<script setup>

</script>

<style>
.scale {
  animation: obj_scale 3s cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 2s;
} 
@keyframes obj_scale {
  0% {
    transform: scale(1);
  }
  3% {
    transform: scale(1.5);
  }
  5% {
    transform: scale(2);
  }
  15% {
    transform: scale(8);
  }
  30% {
    transform: scale(5);
  }
  45% {
    transform: scale(6.5);
  }
  55% {
    transform: scale(5.25);

  }
  65% {
    transform: scale(5.5);
  }
  77% {
    transform: scale(4.5);
  }
  100% {
    transform: scale(5.2);
  }
}
</style>
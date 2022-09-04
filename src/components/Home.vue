<template>
  <div class="hidden md:block relative aspect-[1440/715] w-screen overflow-x-hidden overflow-y-hidden">
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

  <div class="block md:hidden relative aspect-[411/725] w-screen overflow-x-hidden overflow-y-visible">
    <img 
      src="../assets/home/home-bgSm.svg"
      class="absolute w-full top-0 bottom-0"
    />
    <img 
      src="../assets/home/titleSm.svg"
      class="absolute scaleBig w-[4%] right-[47.4%] left-[47.4%] top-[45.2%] bottom-[30.8%]"
    />
    <img 
    src="../assets/home/icon-rt.svg"
      class="absolute scale origin-bottom-left w-[9%] right-[40.6%] left-[49.1%] top-[40.6%] bottom-[57.4%] pl-[2.5%] pb-[8%]"
    />
    <img 
    src="../assets/home/icon-lt.svg"
    class="absolute scale origin-bottom-right w-[10%] left-[45.6%] right-[54.7%] top-[50.58%] bottom-[48%] pb-[8%] pr-[4%] m-auto"
    />
    <img 
      src="../assets/home/icon-rb.svg"
      class="absolute scale origin-top-left w-[11%] left-[40.5%] right-[38.35%] top-[40.3%] bottom-[50%] pt-[9.5%] pl-[3.75%] "
    />
    <img 
      src="../assets/home/icon-lb2.svg"
      class="absolute scale origin-top-right w-[9%] left-[45.4%] right-[30.8%] top-[40.6%] bottom-[35%] pt-[3%] pr-[2%] z-50"
    />
    <img 
      src="../assets/home/t-l.svg"
      class="absolute scale origin-right w-[15.5%] left-[70.5.4%] right-[10.8%] top-[38.6%] bottom-[40%] pr-[10%]"
    />
    <img 
      src="../assets/home/t-r.svg "
      class="absolute scale origin-left w-[12%] left-[35.4%] right-[45.8%] top-[48.6%] bottom-[30%] pl-[6%] z-10"
    />
  </div>
</template>

<script setup>

</script>

<style>
.scale {
  animation: obj_scale 7s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: 0.5s;
} 
.scaleBig {
  animation: title_scale 7s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: 0.5s;
}
@keyframes obj_scale {
  0% {
    transform: scale(1);
  }
  1.5% {
    transform: scale(1.5);
  }
  2.5% {
    transform: scale(4);
  }
  7% {
    transform: scale(8);
  }
  15% {
    transform: scale(4.5);
  }
  22.5% {
    transform: scale(6.5);
  }
  27% {
    transform: scale(5.2);

  }
  32.5% {
    transform: scale(5.5);
  }
  37% {
    transform: scale(4.6);
  }
  50% {
    transform: scale(5);
  }
  95%{
    transform: scale(5);
  }
  100%{
    transform: scale(1);

  }
}

@keyframes title_scale {
  0% {
    transform: scale(1);
  }
  1.5% {
    opacity: 0.2;
    transform: scale(5);
  }
  1.75% {
    opacity: 1;
    transform: scale(5);
  }
  95%{
    transform: scale(5);
    opacity: 1;

  }
  100%{
    transform: scale(1);
    opacity: 0.2;
  }
}
</style>
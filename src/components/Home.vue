<template>
  <div class="hidden md:block relative aspect-[1440/715] w-screen overflow-x-hidden overflow-y-hidden z-40">
    <img src="/home/home-bg.svg"
      class="absolute w-full top-0 bottom-0"
    />
    <img src="/home/frame.svg"
      class="absolute top-[3.83%] bottom-[3.73%] left-[3.29%] right-[3.27%] m-auto w-[34.26%]"
    />
    <object data="/home/title.svg" type="image/svg+xml" class="absolute obj_moving top-[40%] bottom-[54%] left-[4.62%] right-[4.59%] m-auto w-[39.2%]"></object>
    <object data="/home/icon-rt.svg" type="image/svg+xml" class="absolute obj_moving origin-bottom-left w-[19%] top-[25%] bottom-[82.78] left-[60.25%] right-[32.6%] m-auto pb-[9%] pl-[5%]"></object>
    <object data="/home/icon-lt.svg" type="image/svg+xml" class="absolute obj_moving origin-bottom-right w-[16%] left-[23.6%] right-[68.7%] top-[26.58%] bottom-[55%] pb-[7%] pr-[5%] m-auto"></object>
    <object data="/home/icon-rb.svg" type="image/svg+xml" class="absolute obj_moving origin-top-left w-[20%] left-[63%] right-[28.35%] top-[63.3%] bottom-[23%] m-auto pl-[3%] pt-[4%]"></object>
    <object data="/home/icon-lb2.svg" type="image/svg+xml" class="absolute obj_moving origin-top-right w-[50%] left-[10.4%] right-[76.8%] top-[70.6%] bottom-[20%] m-auto pt-[7%] pr-[26.5%]"></object>
    <object data="/home/icon-l.svg" type="image/svg+xml" class="absolute obj_moving origin-right w-[34%] left-[6.6%] right-[90.4%] top-[45%] bottom-[44.7%] pr-[25%] m-auto"></object>
    <object data="/home/text-r.svg" type="image/svg+xml" class="absolute obj_moving origin-left w-[48%] left-[40.7%] right-[30.2%] top-[37.5%] bottom-[55.4%] pl-[20%]"></object>
    <object data="/home/text-l.svg" type="image/svg+xml" class="absolute obj_moving origin-right w-[50%] left-[20.7%] right-[47.6%] top-[63%] bottom-[30%] pr-[30%] m-auto"></object>
  </div>

  <div class="block md:hidden relative aspect-[411/725] w-screen overflow-x-hidden overflow-y-visible">
    <img 
      src="/home/home-bgSm.svg"
      class="absolute w-full top-0 bottom-0"
    />
    <object data="/home/titleSm.svg" type="image/svg+xml" class="absolute scaleBig w-[4%] right-[47.4%] left-[47.4%] top-[45.2%] bottom-[30.8%]"></object>

    <!-- <img 
      src="/home/titleSm.svg"
      class="absolute scaleBig w-[4%] right-[47.4%] left-[47.4%] top-[45.2%] bottom-[30.8%]"
    /> -->
    <object data="/home/icon-rt.svg" type="image/svg+xml" class="absolute scale origin-bottom-left w-[9%] right-[40.6%] left-[49.1%] top-[40.6%] bottom-[57.4%] pl-[2.5%] pb-[8%]"></object>
    <object data="/home/icon-lt.svg" type="image/svg+xml" class="absolute scale origin-bottom-right w-[10%] left-[45.6%] right-[54.7%] top-[50.58%] bottom-[48%] pb-[8%] pr-[4%] m-auto"></object>
    <object data="/home/icon-rb.svg" type="image/svg+xml" class="absolute scale origin-top-left w-[11%] left-[40.5%] right-[38.35%] top-[40.3%] bottom-[50%] pt-[9.5%] pl-[3.75%]"></object>
    <object data="/home/icon-lb2.svg" type="image/svg+xml" class="absolute scale origin-top-right w-[9%] left-[45.4%] right-[30.8%] top-[40.6%] bottom-[35%] pt-[3%] pr-[2%] z-50"></object>
    <object data="/home/t-l.svg" type="image/svg+xml" class="absolute scale origin-right w-[15.9%] left-[68.5%] right-[12.8%] top-[38.6%] bottom-[40%] pr-[10%]"></object>
    <object data="/home/t-r.svg" type="image/svg+xml" class="absolute scale origin-left w-[12.5%] left-[35.4%] right-[45.8%] top-[48.6%] bottom-[30%] pl-[6%] z-10"></object>
  </div>
</template>

<script setup>

</script>

<style>
.scale {
  /* animation: obj_scale 7s cubic-bezier(0, 0, 0.2, 1) infinite; */
  -webkit-animation-name: obj_scale;
  -webkit-animation-duration: 7s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  animation-delay: 0.5s;
  transform: translateZ(0);
  backface-visibility: hidden;
} 
.scaleBig {
  animation: title_scale 7s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: 0.5s;
}

.obj_moving {
  /* animation: obj_scale 7s cubic-bezier(0, 0, 0.2, 1) infinite; */
  -webkit-animation-name: obj_moving;
  -webkit-animation-duration: 7s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  animation-delay: 0.5s;
  transform: translateZ(0);
  backface-visibility: hidden;
} 

@keyframes obj_moving {
  0% {
    transform: scale(0.2) translateZ(0) ;
  }
  1.5% {
    transform: scale(0.3) translateZ(0);
  }
  2.5% {
    transform: scale(0.8) translateZ(0);
  }
  7% {
    transform: scale(1.6) translateZ(0);
  }
  15% {
    transform: scale(0.9) translateZ(0);
  }
  22.5% {
    transform: scale(1.3) translateZ(0);
  }
  27% {
    transform: scale(1.04) translateZ(0);

  }
  32.5% {
    transform: scale(1.1) translateZ(0);
  }
  37% {
    transform: scale(0.92) translateZ(0);
  }
  50% {
    transform: scale(1) translateZ(0);
  }
  95%{
    transform: scale(1) translateZ(0);
  }
  100%{
    transform: scale(0.2) translateZ(0);

  }
}


@keyframes obj_scale {
  0% {
    transform: scale(1) translateZ(0);
  }
  1.5% {
    transform: scale(1.5) translateZ(0);
  }
  2.5% {
    transform: scale(4) translateZ(0);
  }
  7% {
    transform: scale(8) translateZ(0);
  }
  15% {
    transform: scale(4.5) translateZ(0);
  }
  22.5% {
    transform: scale(6.5) translateZ(0);
  }
  27% {
    transform: scale(5.2) translateZ(0);

  }
  32.5% {
    transform: scale(5.5) translateZ(0);
  }
  37% {
    transform: scale(4.6) translateZ(0);
  }
  50% {
    transform: scale(5) translateZ(0);
  }
  95%{
    transform: scale(5) translateZ(0);
  }
  100%{
    transform: scale(1) translateZ(0);

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
  12% {
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
<template>
  <a 
    href="https://forms.gle/pLBmUUURRU1Afz3F6" 
    target="_blank" 
    class="FixBtn aspect-[193/48]">
    <div class="bg-[url('../../src/assets/signup_btn.svg')] bg-contain bg-no-repeat bg-center px-3 w-full">
      <div class="flex items-center justify-center p-2 z-30">
        <img src="../assets/signup_btn_img.svg" class="px-1 w-1/3 min-w-[20px] max-w-[30px] animate-pulse" />
        <p class="text-sm md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap text-shadow text-white font-bold px-1 BtnPluse" >立即報名</p>

      </div>
    </div>
  </a>
</template>

<script>
export default {

}
</script>

<style>
.FixBtn {
    position: fixed;
    right: 5%;
    bottom: 10%;
}
.BtnPluse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
      opacity: .7;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
}
</style>
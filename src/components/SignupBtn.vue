<template>
  <a href="#" class="FixBtn aspect-[193/48]">
    <!-- <img src="../assets/signup_btn.svg" />
    <p class="absolute text-wite top-1/2 left-1/2 translate-x-1/2 translate-y-`/2" >立即報名</p> -->
    <div class="bg bg-[url('../../src/assets/signup_btn.svg')] bg-contain bg-no-repeat bg-center px-3 w-full">
      <div class="flex items-center justify-center p-2">
        <img src="../assets/signup_btn_img.svg" class="px-1 w-1/3 min-w-[20px] max-w-[30px]" />
        <p class="text-sm md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap text-shadow text-white font-bold px-1 animate-pulse" >立即報名</p>

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
    right: 30px;
    bottom: 40px;
}
</style>
<template>

  <!-- 獎項資訊 md -->
  <div class="hidden md:block w-screen" id="block5">
    <div class="flex flex-col grid justify-items-center mt-[10%] mx-auto w-[80%]">
      <div class="flex flex-row items-center mb-[5%]">
        <img data-src="/atom.svg" class="h-10" />
        <p class="pink-title text-3xl lg:text-5xl xl:text-6xl" >&thinsp;獎項資訊&thinsp;</p>
        <img data-src="/atom.svg" class="h-10" />
      </div>
    <div class="grid grid-cols-3 gap-[2%] lg:gap-[8%] w-full">
      <!-- card1 -->
      <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/507] bg-contain bg-no-repeat bg-[url('/awardCard.svg')]">
        <img data-src="/workshop_arrow.svg" class="w-[13%]"/>
        <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl py-1">黑客組</p>
        <p class="yellow-title text-xs lg:text-sm xl:text-base mb-auto">黑客組 每間企業獨立評選</p>
        <p class="text-white text-xs lg:text-sm xl:text-lg leading-loose -tracking-[0.04em]">第一名：新台幣 15,000 元整、實體獎品、實習或實習面試資格</p>
        <hr class="blue-divider my-auto" />
        <p class="text-white text-xs lg:text-sm xl:text-lg leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 元整、實體獎品</p>
        <hr class="blue-divider my-auto" />
        <p class="text-white text-xs lg:text-sm xl:text-lg leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整、實體獎品</p>
      </div>
      <!-- card2 -->
      <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[383/507] bg-contain bg-no-repeat bg-[url('/awardCard.svg')]">
        <img data-src="/workshop_arrow.svg" class="w-[13%]"/>
        <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl py-1">創客交流組</p>    
        <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em] mt-auto">第一名：新台幣 40,000 元整</p>
        <hr class="blue-divider my-auto" />
        <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em]">第二名：新台幣 30,000 元整</p>
        <hr class="blue-divider my-auto" />
        <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 20,000 元整</p>
      </div>
      <!-- card3 -->
      <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[383/507] bg-contain bg-no-repeat bg-[url('/awardCard.svg')]">
        <img data-src="/workshop_arrow.svg" class="w-[13%]"/>
        <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl py-1">梅竹大獎</p>
        <p class="yellow-title text-xs lg:text-sm xl:text-base mb-auto">由各企業第一名共同角逐</p>
        
        <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em]">第一名：新台幣 25,000 元整</p>
        <hr class="blue-divider my-auto" />
        <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 整</p>
        <hr class="blue-divider my-auto" />
        <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整</p>
      </div>

    </div>

    <p class="mt-[1%] mb-[3%] text-white text-sm lg:text-base xl:text-lg leading-loose tracking-[0.1em]">
      ✧ 今年是梅竹黑客松邁入第十年之際，因此我們在競賽中加碼獎金並增設獎項！希望能和參賽者一同見證這個值得紀念的時刻。 ✧
    </p>

  </div>

  </div>

  <!-- 獎項資訊 sm -->
  <div id="award" class="block md:hidden w-screen grid justify-items-center">
    <div class="w-[80%] flex flex-row grid justify-items-center mt-[10%]">
      <div class="flex flex-row items-center mb-[5%]">
        <img data-src="/atom.svg" class="h-10" />
        <p class="pink-title text-3xl lg:text-5xl xl:text-6xl" >&thinsp;獎項資訊&thinsp;</p>
        <img data-src="/atom.svg" class="h-10" />
      </div>
      <div class="grid grid-rows-4 gap-[3%] w-full">
        <!-- card1 -->
        <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/313] bg-contain bg-no-repeat bg-[url('/price_frame_sm.svg')]">
          <img data-src="/workshop_arrow.svg" class="w-[10%]"/>
          <p class="yellow-title text-xl py-1">黑客組</p>
          <p class="yellow-title text-xs lg:text-sm xl:text-base mb-auto">黑客組 每間企業獨立評選</p>
          <p class="text-white text-xs leading-loose -tracking-[0.04em]">第一名：新台幣 15,000 元整、實體獎品、實習或實習面試資格</p>
          <hr class="blue-divider my-auto" />
          <p class="text-white text-xs leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 元整、實體獎品</p>
          <hr class="blue-divider my-auto" />
          <p class="text-white text-xs leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整、實體獎品</p>
        </div>
        <!-- card2 -->
        <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/313] bg-contain bg-no-repeat bg-[url('/price_frame_sm.svg')]">
          <img data-src="/workshop_arrow.svg" class="w-[10%]"/>
          <p class="yellow-title text-xl py-1">創客交流組</p>    
          <p class="text-white text-xs leading-loose -tracking-[0.04em] mt-auto">第一名：新台幣 40,000 元整</p>
          <hr class="blue-divider my-auto" />
          <p class="text-white text-xs leading-loose -tracking-[0.04em]">第二名：新台幣 30,000 元整</p>
          <hr class="blue-divider my-auto" />
          <p class="text-white text-xs leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 20,000 元整</p>
        </div>
        <!-- card3 -->
        <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/313] bg-contain bg-no-repeat bg-[url('/price_frame_sm.svg')]">
          <img data-src="/workshop_arrow.svg" class="w-[10%]"/>
          <p class="yellow-title text-xl lg:text-3xl xl:text-4xl py-1">梅竹大獎</p>
          <p class="yellow-title text-xs lg:text-sm xl:text-base mb-auto">由各企業第一名共同角逐</p>
          
          <p class="text-white text-xs leading-loose -tracking-[0.04em]">第一名：新台幣 25,000 元整</p>
          <hr class="blue-divider my-auto" />
          <p class="text-white text-xs leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 元整</p>
          <hr class="blue-divider my-auto" />
          <p class="text-white text-xs leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整</p>
        </div>
        <p class="text-white text-xs leading-loose tracking-[0.1em]">
          ✧ 今年是梅竹黑客松邁入第十年之際，因此我們在競賽中加碼獎金並增設獎項！希望能和參賽者一同見證這個值得紀念的時刻。 ✧
        </p>
      </div>
      <div class="h-[5%]"></div>
      <!-- <div class="my-5"> 
        <p class="text-white text-xs leading-loose tracking-[0.1em]">
          ✧ 今年是梅竹黑客松邁入第十年之際，因此我們在競賽中加碼獎金並增設獎項！希望能和參賽者一同見證這個值得紀念的時刻。 ✧
        </p>
      </div> -->

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
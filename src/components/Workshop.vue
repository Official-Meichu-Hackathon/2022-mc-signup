<template>
  <div class="w-screen flex justify-center">
    <div class="flex flex-col w-[90%] lg:w-[80%]">
      <p class="title text-3xl lg:text-5xl xl:text-6xl py-[2.5%]">>>>工作坊</p>
      <div class="flex flex-col grid justify-items-stretch aspect-[1240/1112] w-full p-8 lg:p-[5%] bg-[url('../../src/assets/workshop_bg.svg')] bg-contain bg-no-repeat">
        <div class="flex flex-col grid justify-items-stretch aspect-[1240/1112] w-full overflow-y-auto">
          <div class="w-[70%] p-[1%] lg:p-[3%] xl:p-[8%] flex-cols ">
            <div class="flex flex-rows">
              <img src="../assets/workshop_arrow.svg" class="h-8 self-center" />
              <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl self-center">&thinsp;黑客組</p>
            </div>
            <p class="mt-[3%] text-white tracking-[0.275em] text-sm lg:text-base xl:text-lg leading-loose">
              在黑客組工作坊中，透過講解與實作的過程，參與者將能更加熟悉的運用企業提供的資源，同時激盪更多靈感與創意，並在正式比賽中將以付諸實現。
            </p>
            <a 
              href="../../src/static/workshop2022.pdf"
              target="_blank"
              class="view-more-ping"
            >
              <div class="text-white font-bold underline tracking-[0.275em] text-sm lg:text-base xl:text-lg leading-loose">詳細資訊...</div> 
            </a>
          </div>

          <div class="w-[80%] lg:w-[75%] xl:w-[70%] px-[2.5%] lg:px-[6%] flex-cols justify-self-end">
            <div class="flex flex-rows">
              <img src="../assets/workshop_arrow.svg" class="h-6 self-center" />
              <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl self-center">&thinsp;創客交流組</p>
            </div>
            <p class="mt-[3%] text-white tracking-[0.275em] text-sm lg:text-base xl:text-lg leading-relaxed lg:leading-loose">
              各組參賽者皆可選擇是否參與此工作坊，創客交流組享有參與優先權。另外，我們也開放非參賽者報名，詳情將於粉專釋出，希冀能讓所有參與者透過熟悉 Protoype 實作相關知識，更具體的傳達想法。
            </p>
              <a 
                href="../../src/static/workshop2022.pdf"
                target="_blank"
                class="view-more-ping"
              >
                <div class="text-white font-bold underline tracking-[0.275em] text-sm lg:text-base xl:text-lg leading-loose">詳細資訊...</div> 
              </a>
          </div>
        </div>
      </div>

      <!-- 獎項資訊 md -->
      <div class="hidden md:block w-full flex flex-col grid justify-items-center mt-[10%]">
        <div class="flex flex-row items-center mb-[5%]">
          <img src="../assets/atom.svg" class="h-10" />
          <p class="pink-title text-3xl lg:text-5xl xl:text-6xl" >&thinsp;獎項資訊&thinsp;</p>
          <img src="../assets/atom.svg" class="h-10" />
        </div>
        <div class="grid grid-cols-3 gap-[2%] lg:gap-[8%] w-full">
          <!-- card1 -->
          <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/507] bg-contain bg-no-repeat bg-[url('../../src/assets/awardCard.svg')]">
            <img src="../assets/workshop_arrow.svg" class="w-[13%]"/>
            <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl py-1">黑客組</p>
            <p class="yellow-title text-xs lg:text-sm xl:text-base mb-auto">黑客組 每間企業獨立評選</p>
            <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em]">第一名：新台幣 15,000 元整、實體獎品、實習或實習面試資格</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 元整、實體獎品</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整、實體獎品</p>
          </div>
          <!-- card2 -->
          <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[383/507] bg-contain bg-no-repeat bg-[url('../../src/assets/awardCard.svg')]">
            <img src="../assets/workshop_arrow.svg" class="w-[13%]"/>
            <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl py-1">創客交流組</p>    
            <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em] mt-auto">第一名：新台幣 40,000 元整</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em]">第二名：新台幣 30,000 元整</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-sm lg:text-base xl:text-lg leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 20,000 元整</p>
          </div>
          <!-- card3 -->
          <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[383/507] bg-contain bg-no-repeat bg-[url('../../src/assets/awardCard.svg')]">
            <img src="../assets/workshop_arrow.svg" class="w-[13%]"/>
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

      <!-- 獎項資訊 sm -->
      <div class="block md:hidden w-full flex flex-row grid justify-items-center mt-[10%]">
        <div class="flex flex-row items-center mb-[5%]">
          <img src="../assets/atom.svg" class="h-10" />
          <p class="pink-title text-3xl lg:text-5xl xl:text-6xl" >&thinsp;獎項資訊&thinsp;</p>
          <img src="../assets/atom.svg" class="h-10" />
        </div>
        <div class="grid grid-rows-3 gap-[5%] lg:gap-[8%] w-full">
          <!-- card1 -->
          <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/313] bg-contain bg-no-repeat bg-[url('../../src/assets/price_frame_sm.svg')]">
            <img src="../assets/workshop_arrow.svg" class="w-[10%]"/>
            <p class="yellow-title text-xl">黑客組</p>
            <p class="yellow-title text-[0.3rem] my-auto">黑客組 每間企業獨立評選</p>
            <p class="text-white text-xs leading-loose -tracking-[0.04em]">第一名：新台幣 15,000 元整、實體獎品、實習或實習面試資格</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-xs leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 元整、實體獎品</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-xs leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整、實體獎品</p>
          </div>
          <!-- card2 -->
          <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/313] bg-contain bg-no-repeat bg-[url('../../src/assets/price_frame_sm.svg')]">
            <img src="../assets/workshop_arrow.svg" class="w-[10%]"/>
            <p class="yellow-title text-xl py-1">創客交流組</p>    
            <p class="text-white text-xs leading-loose -tracking-[0.04em] mt-auto">第一名：新台幣 40,000 元整</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-xs leading-loose -tracking-[0.04em]">第二名：新台幣 30,000 元整</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-xs leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 20,000 元整</p>
          </div>
          <!-- card3 -->
          <div class="flex flex-col p-[6%] lg:p-[10%] aspect-[363/313] bg-contain bg-no-repeat bg-[url('../../src/assets/price_frame_sm.svg')]">
            <img src="../assets/workshop_arrow.svg" class="w-[10%]"/>
            <p class="yellow-title text-xl lg:text-3xl xl:text-4xl py-1">梅竹大獎</p>
            <p class="yellow-title text-xs lg:text-sm xl:text-base mb-auto">由各企業第一名共同角逐</p>
            
            <p class="text-white text-xs leading-loose -tracking-[0.04em]">第一名：新台幣 25,000 元整</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-xs leading-loose -tracking-[0.04em]">第二名：新台幣 10,000 元整</p>
            <hr class="blue-divider my-auto" />
            <p class="text-white text-xs leading-loose -tracking-[0.04em] mb-auto">第三名：新台幣 5,000 元整</p>
          </div>

        </div>

        <p class="mt-10 text-white text-xs leading-loose tracking-[0.1em]">
          ✧ 今年是梅竹黑客松邁入第十年之際，因此我們在競賽中加碼獎金並增設獎項！希望能和參賽者一同見證這個值得紀念的時刻。 ✧
        </p>

      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.yellow-title {
  letter-spacing: 0.275em;

/* Swatches/300 */
  font-weight: 600;
  background: linear-gradient(127.95deg, rgba(252, 209, 64, 0.83) 0%, #FE9138 113.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 3px 4px 4px rgba(252, 209, 64, 0.4);
}

.pink-title {
  font-weight: 800;
  line-height: 80px;
  /* identical to box height, or 125% */

  letter-spacing: 0.1em;

  color: #6FBFD3;

  text-shadow: 0px 5px 1px #EB68A1;
}

.blue-divider {
  border-top: 1px solid rgba(141, 217, 236, 0.9);
}

.view-more-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes ping {
    50% {
      transform: scale(2);
      opacity: 1;
    }
    0%, 100% {
      opacity: .5;
    }
  }

/* .{
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    50%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
} */

</style>
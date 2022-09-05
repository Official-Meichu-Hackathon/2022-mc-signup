<template>
  <div class="w-screen flex justify-center mt-16">
    <div class="flex flex-col w-[90%] lg:w-[80%]">
      <p class="title text-3xl lg:text-5xl xl:text-6xl py-[2.5%]">>>>工作坊</p>
      <div class="grid grid-row-2 md:grid-cols-2 content-start md:content-center md:content-around gap-[1%] sm:gap-[5%] aspect-[358/745] sm:aspect-[358/537] md:aspect-[1232/602] w-full p-[10%] lg:p-[5%] xl:p-[10%] bg-[url('/workshop_frameXs.svg')] sm:bg-[url('/workshop_frameSm.svg')] md:bg-[url('/workshop_frame.svg')] bg-contain bg-no-repeat bg-center">
        <div class="">
          <div class="flex flex-row">
            <img src="../assets/workshop_arrow.svg" class="h-8 self-center w-[8%] md:w-auto" />
            <p class="yellow-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl self-center">&thinsp;黑客組</p>
          </div>
          <p class="mt-[3%] text-white tracking-[0.275em] text-xs sm:text-sm lg:text-base xl:text-lg leading-loose">
              在黑客組工作坊中，透過講解與實作的過程，參與者將能更加熟悉的運用企業提供的資源，同時激盪更多靈感與創意，並在正式比賽中將以付諸實現。
          </p>
          <a 
            href="/workshop2022.pdf"
            target="_blank"
            class="view-more-ping"
          >
            <div class="text-white font-bold underline tracking-[0.275em] text-sm lg:text-base xl:text-lg leading-loose ">詳細資訊...</div> 
          </a>
        </div>
        <div class="my-[15%] sm:my-[20%] md:my-auto">
          <div class="flex flex-row">
            <img src="../assets/workshop_arrow.svg" class="h-8 self-center w-[8%] md:w-auto" />
            <p class="yellow-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl self-center">&thinsp;創客交流組</p>
          </div>
          <p class="mt-[3%] text-white tracking-[0.275em] text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed lg:leading-loose">
            各組參賽者皆可選擇是否參與此工作坊，創客交流組享有參與優先權。另外，我們也開放非參賽者報名，詳情將於粉專釋出，希冀能讓所有參與者透過熟悉 Protoype 實作相關知識，更具體的傳達想法。
          </p>
            <a 
              href="/workshop2022.pdf"
              target="_blank"
              class="view-more-ping"
            >
              <div class="text-white font-bold underline tracking-[0.275em] text-sm lg:text-base xl:text-lg leading-loose">詳細資訊...</div> 
            </a>
        </div>
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
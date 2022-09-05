<template>
  <!-- md -->
  <div id="block2" class="w-[90%] mx-auto hidden md:block">
    <p class="pink-title my-10 text-3xl lg:text-5xl xl:text-6xl" >>>>組別介紹</p>
    <div class="grid grid-cols-2 w-full ">
      <div class="relative aspect-[598/638] mx-[1%] pt-3" id="groupImg">
        <img src="../assets/group_frame.svg" class="absolute w-full aspect-[598/638]" />
        <div class="absolute w-full aspect-[598/638] flex">
          <object data="/group_intro_img.svg" type="image/svg+xml" width="80%" class="m-auto meta_move svgDisplay"></object>

          <!-- <img src="../assets/group_intro_img.svg" class="m-auto w-[80%] meta_move" /> -->
        </div>
      </div>

      <div class="flex flex-col justify-between mx-[1%] h-[101.5%] xl:h-[101%]" id="groupIntro"> 
        <div class="aspect-[620/327] relative">
          <img src="../assets/hacker_frame.svg" class="w-full aspect-[620/327]" />
          <div class="absolute top-[7%] lg:top-[10%] left-0 right-0 mx-auto aspect-[644/296] w-[80%] overflow-y-auto"> 
            <p class="intro-name text-[0.9rem] lg:text-[1.5rem] p-1">
              {{ intro[0].name }}
            </p>
            <p class="intro-content text-[0.6rem] lg:text-[1.1rem] p-1">
              {{ intro[0].content }}
              <b>
                {{intro[0].company}}
              </b>
            </p>
          </div>
        </div>
        <div class="aspect-[644/296] relative w-[102%]">
          <img src="../assets/maker_frame.svg" class="w-full aspect-[644/296]" />
          <div class="absolute top-[7%] lg:top-[10%] left-0 right-0 mx-auto aspect-[644/296] w-[80%] overflow-y-auto"> 
            <p class="intro-name text-[0.9rem] lg:text-[1.5rem] p-1">
              {{ intro[1].name }}
            </p>
            <p class="intro-content text-[0.6rem] lg:text-[1.1rem] p-1">
              {{ intro[1].content }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- sm -->
  <div class="block md:hidden w-[80%] mx-auto">
    <p class="pink-title my-3 text-2xl" >>>>組別介紹</p>
    <div class="flex flex-col grid justify-items-center w-full">
      <div class="bg-[url('/hacker_cardSm.svg')] bg-center bg-contain bg-no-repeat aspect-[348/395] w-[100%]">
        <div class="p-[10%] w-full aspect-[348/395] overflow-y-auto">
          <p class="intro-name text-base sm:text-lg font-bold">
            {{ intro[0].name }}
          </p>
          <p class="intro-content text-xs sm:text-base">
            {{ intro[0].content }}
            <b>
              {{intro[0].company}}
            </b>
          </p>
        </div>
      </div>
      <div class="bg-[url('/maker_cardSm.svg')] bg-center bg-contain bg-no-repeat aspect-[348/395] w-[100%]">
        <div class="p-[10%] w-full aspect-[348/395] overflow-y-auto">
          <p class="intro-name text-base sm:text-lg font-bold">
            {{ intro[1].name }}
          </p>
          <p class="intro-content text-xs sm:text-base">
            {{ intro[1].content }}
          </p>
        </div>
      </div>
    </div>
    <img src="../assets/bg_box.svg" class="-mt-[12%] ml-[85%] sm:-mt-[16%] sm:ml-[80%] w-[20%]" />
  </div>

</template>

<script setup>
  const intro = [
    { name: '黑客組', content: '我們致力於搭起學生與企業之間的橋樑，學生運用企業資源並發揮潛力回應企業命題，同時企業方更提供實習機會，能讓學生進一步實踐創意發想！而今年我們將由以下七家企業作為引導單位：', company:'台積電、意法半導體、中國信託、ASML、原相科技、恩智浦、Kronos Research'},
    { name: '創客交流組', content: '由新竹市政府命題，融入新竹居民真實生活情境與議題，鼓勵運用分享、學習與實作，實際的解決問題與提出方案，並促進創作過程人才交流，體現創新創意、數位應用及動手實作、解決問題的黑客精神！' }
  ]

  // window.addEventListener("resize", () => {
  //   let frameHeight = document.getElementById('groupIntro').clientHeight
  //   console.log("height:", frameHeight)
  //   document.getElementById('groupImg').style.height = frameHeight + "px"
  // })
</script>

<style>
.intro-name {
  /* font-size: 1rem; */
  line-height: 2rem;
  /* or 119% */

  letter-spacing: 0.025em;

  color: #FFFFFF;
}
.intro-content {
  /* font-size: 0.75rem; */
  line-height: 2rem;
  /* or 142% */

  letter-spacing: 0.025em;

  color: #FFFFFF;
}

.meta_move {
  animation: meta 5s infinite;
  animation-direction: alternate;
}

@keyframes meta {
  0%, 50% {
    transform: translateY(-10%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    scale: 1;
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  75% {
    scale: 1.1;
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    scale: 1.1;
    transform: translateY(-10%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
}
</style>
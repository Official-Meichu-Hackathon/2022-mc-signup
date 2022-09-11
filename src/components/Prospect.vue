<template>
  <div class="flex flex-col relative w-[90%] mx-auto md:w-screen">
    <img src="../assets/grid_lin.svg" class="hidden md:block object-fill w-screen" />
    <p class="hidden md:block title absolute text-3xl lg:text-5xl xl:text-6xl bottom-[85%] left-[10%]" >>>>活動願景</p>
    <p class="block md:hidden title text-2xl px-[5%]" >>>>活動願景</p>

    <div class="hidden md:block box1"></div>
    <div class="hidden md:block box2"></div>
    <div 
      class="hidden md:block relative contentBorder w-[90%] min-h-[50%] overflow-y-auto"
    >
      <p class="contentText p-[5%] text-sm lg:text-base xl:text-xl whitespace-pre-line">
        {{ content[0] }}
        <a href="https://www.facebook.com/groups/mchackathon.club.2.0/" target="_blank" class="font-bold underline">
          賽前媒合平台
        </a>
        {{ content[1] }}
        <a href="https://tenyear.meichuhackathon.org/" target="_blank" class="font-bold underline">
          十週年紀念網站
        </a>
        {{ content[2] }}
      </p>
    </div>

    <p class="block md:hidden contentText p-[5%] text-xs whitespace-pre-line">
      {{ content[0] }}
      <a href="https://www.facebook.com/groups/mchackathon.club.2.0/" target="_blank" class="font-bold underline">
        賽前媒合平台
      </a>
      {{ content[1] }}
      <a href="https://tenyear.meichuhackathon.org/" target="_blank" class="font-bold underline">
        十週年紀念網站
      </a>
      {{ content[2] }}
    </p>
  </div>
</template>

<script setup>
const content = [
  "2022，在強調與病毒共存、恢復正常生活的後疫情時代，人們努力撥開近兩年的陰霾，而我們亦持續推動資訊與科技的交流，希冀能夠促進跨領域的合作。\n\n除了在「黑客組」持續強化企業與學生之間的連結，2022 新竹 X 梅竹黑客松攜手新竹市政府，將創客思維加入「交流組」之中，轉變成為「創客交流組」。我們相信，在科技日新月異的今日，每個人都可以藉由更多的交流與數位應用，將奇思妙想付諸實現。\n\n另外，今年我們首度推出",
  "，除了提供參賽者找尋隊友的管道之外，也期待大家能夠在更多互動中，激發出不一樣的可能性。而在梅竹黑客松邁向十週年之際，我們不忘來時初衷與精神，希望在歷年奠定的基礎之上，激盪創新的想法並實踐，透過構建",
  "，紀錄每年的活動精華之外，也向歷屆參賽者徵集作品，讓這個網站成為成果存放平台，未來的參賽者將能夠在此找尋靈感與創意。\n\n我們將持續推動參與者之間的溝通與交流，希望在幾乎沒有限制的活動裡，每個人都能勇於跳脫固有框架並大膽實踐，並在有限時間內，和合作夥伴一同打造出獨特的最小可行性產品，實現屬於自己的創意構想。"]

// select all the images
const images = document.querySelectorAll('img')

// circumstances under which the callback will be invoked
const options = {
  root: null,
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
}

const loadImage = (img) => {
  const src = img.getAttribute('src')
  if (!src) return
  img.src = src
  // console.log('load img', src)
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    // only load the image when intersecting
    if (!entry.isIntersecting) return
    // load the image
    loadImage(entry.target)
    // stop observing this element
    observer.unobserve(entry.target)
  })
}

// create an observer
let observer = new IntersectionObserver(callback, options)

// observe all the images
images.forEach(image => observer.observe(image))
</script>

<style>
.title {
  /* position: absolute; */
  font-weight: 800;
  line-height: 80px;


  letter-spacing: 0.1em;

  color: #6FBFD3;

  text-shadow: 0px 5px 1px #FF006F;
}

.contentText {
  font-weight: 500;
  line-height: 1.7rem;
  letter-spacing: 0.025em;
  color: #CDCDCD;          
}

.contentBorder {
  border: 3px solid rgba(141, 217, 236, 0.9);
  box-shadow:0px 0px 4px #DDFFFC, 0px 0px 10px rgba(225, 255, 252, 0.25);
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  bottom: 20%;
  margin: auto;
  width: 80%;
  /* transform: translate(-50%,-50%); */
}

.box1 {
  box-sizing: border-box;
  position: absolute;
  width: 9%;
  aspect-ratio: 118 / 64;
  top: 18%;
  left: 8%;
  /* margin-left: -1.5%;
  margin-top: -1.5%; */
  border: 3px solid rgba(141, 217, 236, 0.9);
  filter: drop-shadow(0px 0px 4px #DDFFFC) drop-shadow(0px 0px 10px rgba(225, 255, 252, 0.25));
}

.box2 {
  box-sizing: border-box;
  position: absolute;
  bottom: 18%;
  right: 8%;
  /* bottom: 0%;
  right: 0%;
  margin-right: -2.5%;
  margin-bottom: -2.5%; */
  width: 11%;
  aspect-ratio: 146 / 100;
  border: 3px solid rgba(141, 217, 236, 0.9);
  filter: drop-shadow(0px 0px 4px #DDFFFC) drop-shadow(0px 0px 10px rgba(225, 255, 252, 0.25));
}
</style>
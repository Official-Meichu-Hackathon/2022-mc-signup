<template>
  <div class="relative w-screen">
    <img src="../assets/grid_lin.svg" class="object-fill w-screen" />
    <!-- <p class="title text-4xl lg:text-5xl xl:text-6xl top-[4%] lg:top-[12%] xl:top-[18%]" >>>>活動願景</p> -->
    <div class="relative contentBorder w-[90%] top-[55%] min-h-[50%]">
      <p class="title absolute text-3xl lg:text-5xl xl:text-6xl -top-[23%]" >>>>活動願景</p>
      <div class="box1"></div>
      <div class="box2"></div>
      <p class="contentText px-8 py-0 lg:py-14 xl:py-28 text-[5px] lg:text-base xl:text-xl">
        2022，在強調與病毒共存、恢復正常生活的後疫情時代，人們努力撥開近兩年的陰霾，而我們亦持續推動資訊與科技的交流，希冀能夠促進跨領域的合作。
        <br /><br />
        除了在「黑客組」持續強化企業與學生之間的連結，2022 新竹 X 梅竹黑客松攜手新竹市政府，將創客思維加入「交流組」之中，轉變成為「創客交流組」。我們相信，在科技日新月異的今日，每個人都可以藉由更多的交流與數位應用，將奇思妙想付諸實現。
        <br /><br />
        另外，今年我們首度推出賽前媒合平台，除了提供參賽者找尋隊友的管道之外，也期待大家能夠在更多互動中，激發出不一樣的可能性。而在梅竹黑客松邁向十週年之際，我們不忘來時初衷與精神，希望在歷年奠定的基礎之上，激盪創新的想法並實踐，透過構建十週年紀念網站，紀錄每年的活動精華之外，也向歷屆參賽者徵集作品，讓這個網站成為成果存放平台，未來的參賽者將能夠在此找尋靈感與創意。
        <br /><br />
        我們將持續推動參與者之間的溝通與交流，希望在幾乎沒有限制的活動裡，每個人都能勇於跳脫固有框架並大膽實踐，並在有限時間內，和合作夥伴一同打造出獨特的最小可行性產品，實現屬於自己的創意構想。
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
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
  left: 50%;
  transform: translate(-50%,-50%);
}

.box1 {
  box-sizing: border-box;
  position: absolute;
  width: 9%;
  aspect-ratio: 118 / 64;
  margin-left: -1.5%;
  margin-top: -1.5%;
  border: 3px solid rgba(141, 217, 236, 0.9);
  filter: drop-shadow(0px 0px 4px #DDFFFC) drop-shadow(0px 0px 10px rgba(225, 255, 252, 0.25));
}

.box2 {
  box-sizing: border-box;
  position: absolute;
  bottom: 0%;
  right: 0%;
  margin-right: -2.5%;
  margin-bottom: -2.5%;
  width: 11%;
  aspect-ratio: 146 / 100;
  border: 3px solid rgba(141, 217, 236, 0.9);
  filter: drop-shadow(0px 0px 4px #DDFFFC) drop-shadow(0px 0px 10px rgba(225, 255, 252, 0.25));
}
</style>
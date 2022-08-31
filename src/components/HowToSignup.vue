<template>
  <div class="flex flex-col grid justify-items-center w-screen">
    <div class="flex items-center">
        <img class="h-10" src="../assets/three_arrow.svg" />
        <p class="title px-2 text-3xl lg:text-5xl xl:text-6xl">&thinsp;如何報名&thinsp;</p>
        <img class="h-10 transform rotate-180" src="../assets/three_arrow.svg" />
    </div>
    <div class="h-[3rem]"></div>

    <div class="grid grid-cols-3 gap-[2%] w-[90%]">
      <div class="relative aspect-[381/217]">
        <img class="w-full absolute z-0" src="../assets/small_border.svg" />
        <div class="flex flex-col justify-around p-3 lg:p-6 xl:p-10 aspect-[381/217]">
          <div class="flex items-center">
            <img class="aspect-square w-[20%]" src="../assets/circle1.svg" />
            <p class="pl-[3%] text-xs lg:text-sm xl:text-lg text-white">9/5（一)~ 10/3（一）08:00</p>
          </div>
          <p class="w-full text-xl lg:text-2xl xl:text-3xl text-white text-center">開始報名</p>
        </div>
      </div>

      <div class="relative aspect-[381/217]">
        <img class="w-full absolute z-0" src="../assets/small_border.svg" />
        <div class="flex flex-col justify-around p-3 lg:p-6 xl:p-10 aspect-[381/217]">
          <div class="flex items-center">
            <img class="aspect-square w-[20%]" src="../assets/circle2.svg" />
            <p class="pl-[3%] text-xs lg:text-sm xl:text-lg text-white">10/3（一） 23:59 前</p>
          </div>
          <p class="w-full text-lg lg:text-xl xl:text-3xl text-white text-center">正取隊伍與所屬企業公布</p>
        </div>
      </div>

      <div class="relative aspect-[381/217]">
        <img class="w-full absolute z-0" src="../assets/small_border.svg" />
        <div class="flex flex-col justify-around p-3 lg:p-6 xl:p-10 aspect-[381/217]">
          <div class="flex items-center">
            <img class="aspect-square w-[20%]" src="../assets/circle3.svg" />
            <p class="pl-[3%] text-xs lg:text-sm xl:text-lg text-white">10/7（五） 23:59 前</p>
          </div>
          <p class="w-full text-xl lg:text-2xl xl:text-3xl text-white text-center">繳費截止</p>
        </div>

      </div>
    </div>
    <div class="h-[2.5rem]"></div>
    <div class="relative aspect-[1213/818] w-[90%]">
      <img class="absolute w-full" src="../assets/big_border.svg" />
      <div class="absolute bg-[#B288901A] w-[97%] h-[97%] right-0 left-0 bottom-0 mx-auto"></div>
      <div class="absolute p-10 lg:p-14 xl:p-20 h-full left-[7em] indent-[-7em] text-white font-medium leading-5 text-xs lg:leading-7 lg:text-base xl:leading-10 xl:text-xl align-middle">
        <p>
          ● 報名費用&ensp;｜&ensp;＄600 / 人（須另繳保證金 $200）
          <br />
          保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還
          <br />
          中低收入戶持證明免費
          <br />
          收費含餐食、場地清潔、保險、衣服
          <br />
          每個隊伍需至少一人實體參與工作坊（疫情狀況例外），否則整隊不退還保證金
          <br />
        </p>
        <p>
          ● 疫情退費&ensp;｜&ensp; 確診、隔離者退全額，其他人不退費
          <br />
          隊伍中至少一人沒確診或隔離，保有比賽資格
        </p>
        <p>
          ● 報名資格&ensp;｜&ensp; 黑客組：全台大專院校生及碩博生（每隊至少需有一人具備使用企業資源的能力並且儘量在專長中說明團隊或個人所具備的技術或其他能力。 
          <br />
          創客交流組：不限資格，工作坊會進行Figma教學，讓參賽者於Demo時讓評審實際操作作品。參考工具：Figma、Miro、Webflow、Sketch...
        </p>
        <p>
          ● 報名方式&ensp;｜&ensp; 自行組隊報名，每隊 3~5 人
          <br />
          梅竹黑客松提供臉書媒合社群供大家找隊友（附上連結）
          <br />
          組別選擇分為：黑客組、交流組、兩組混合報名
          <br />
          ＊ 若報名含黑客組，則須將所有企業皆列入志願序
          <br />
          ＊ 若單一企業超額，將採取亂數分發
        </p>
        <p>
          ● 其他須知&ensp;｜&ensp; 企業可與學生洽談合作以將作品運用到公司中
          <br />
          主辦方與企業可活動中拍照與錄影，並作為未來宣傳使用
          <br />
          得獎隊伍需要將作品上傳到梅竹黑客松成果存放平台（附上連結），方可領取獎金
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
.circle-bg {
  box-sizing: border-box;
  position: absolute;
  width: 20%;
  top:10%;
  left: 5%;
  /* background: linear-gradient(113.68deg, #EB68A1 -4.45%, #97D2CC 90.04%);
  border: 1px solid #FFFFFF;
  filter: blur(2px); */
}
.circle-text {
  position: absolute;
  width: 20%;
  top:10%;
  left: 5%;
  font-weight: 800;
  font-size: 2rem;
  line-height: 80px;
  letter-spacing: -0.03em;
  color: #3D3B3B;
}
</style>
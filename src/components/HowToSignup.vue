<template>
  <div id="block1" class="flex flex-col grid justify-items-center w-full mt-16">
    <div class="flex items-center">
        <img class="h-10" data-src="/three_arrow.svg" />
        <p class="title px-2 text-2xl md:text-3xl lg:text-5xl xl:text-6xl">&thinsp;如何報名&thinsp;</p>
        <img class="h-10 transform rotate-180" data-src="/three_arrow.svg" />
    </div>
    <div class="h-[3rem]"></div>

    <!-- md -->
    <div class="hidden md:block w-full ">
      <div class="grid grid-cols-3 gap-[2%] w-[90%] lg:w-[80%] mx-auto">
      <div class="relative aspect-[381/217]">
        <img class="w-full absolute z-0" data-src="/small_border.svg" />
        <div class="flex flex-col justify-around p-3 lg:p-6 xl:p-10 aspect-[381/217]">
          <div class="flex items-center">
            <img class="aspect-square w-[20%]" data-src="/circle1.svg" />
            <p class="pl-[3%] text-xs lg:text-sm xl:text-lg text-white">9/5（一)~ 10/3（一）08:00</p>
          </div>
          <p class="w-full text-xl lg:text-2xl xl:text-3xl text-white text-center">開始報名</p>
        </div>
      </div>

      <div class="relative aspect-[381/217]">
        <img class="w-full absolute z-0" data-src="/small_border.svg" />
        <div class="flex flex-col justify-around p-3 lg:p-6 xl:p-10 aspect-[381/217]">
          <div class="flex items-center">
            <img class="aspect-square w-[20%]" data-src="/circle2.svg" />
            <p class="pl-[3%] text-xs lg:text-sm xl:text-lg text-white">10/3（一） 23:59 前</p>
          </div>
          <p class="w-full text-base md:text-lg lg:text-xl xl:text-2xl text-white text-center whitespace-nowrap">正取隊伍與所屬企業公布</p>
        </div>
      </div>

      <div class="relative aspect-[381/217]">
        <img class="w-full absolute z-0" data-src="/small_border.svg" />
        <div class="flex flex-col justify-around p-3 lg:p-6 xl:p-10 aspect-[381/217]">
          <div class="flex items-center">
            <img class="aspect-square w-[20%]" data-src="/circle3.svg" />
            <p class="pl-[3%] text-xs lg:text-sm xl:text-lg text-white">10/7（五） 23:59 前</p>
          </div>
          <p class="w-full text-xl lg:text-2xl xl:text-3xl text-white text-center">繳費截止</p>
        </div>

      </div>
    </div>
    </div>

    <!-- sm -->
    <div class="block md:hidden w-[70%]">
      <img data-src="/signupSm.svg" class="mx-auto w-[90%]" />
    </div>


    <div class="h-[2.5rem]"></div>
    <div class="relative aspect-[377/485] md:aspect-[1213/818] w-[90%] lg:w-[80%]">
      <img class="hidden md:block absolute w-full" data-src="/big_border.svg" />
      <img class="block md:hidden absolute w-full" data-src="/signup_info_sm.svg" />
      <div class="hidden md:block absolute bg-[#B288901A] w-[97%] h-[97%] right-0 left-0 bottom-0 mx-auto"></div>
      <div class="absolute px-[7em] max-h-[95%] py-10 left-[2em] w-full md:w-auto md:left-[7em] indent-[-7em] text-white font-medium leading-6 text-xs lg:leading-8 lg:text-base xl:leading-10 xl:text-xl align-middle overflow-y-auto min-h-[90%] my-auto">
        <p>
          ● 報名費用&ensp;｜&ensp;＄600 / 人（須另繳保證金 $200）
          <br />
          保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還
          <br />
          中低收入戶持證明免費
          <br />
          收費含餐食、場地清潔、保險、衣服、校外的工作坊交通（從清交出發）
          <br />
          每個隊伍需至少一人參與工作坊（疫情狀況例外），否則整隊不退還保證金
          <br />
        </p>
        <p>
          ● 疫情退費&ensp;｜&ensp; 確診、隔離者退全額，其他人不退費
          <br />
          隊伍中至少一人沒確診或隔離，保有比賽資格
        </p>
        <p>
          ● 報名資格&ensp;｜&ensp; 黑客組：全台大專院校生及碩博生，每隊至少需有一人具備使用企業資源的能力。
          <br />
          創客交流組：高中職、大專院校生及碩博生、社會人士皆可報名，工作坊會進行 Figma 教學，參賽者需於 Demo 時讓評審實際操作作品。參考工具：Figma、Miro、Webflow、Sketch...
        </p>
        <p>
          ● 報名方式&ensp;｜&ensp; 自行組隊報名，每隊 3~5 人
          <br />
          梅竹黑客松提供
            <a 
              href="https://www.facebook.com/groups/mchackathon.club.2.0/"
              target="_blank" 
              class="underline font-bold"
              >
              臉書媒合社群
            </a>
          供大家找隊友
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
          得獎隊伍需要將作品上傳到
          <a 
              href="https://tenyear.meichuhackathon.org/team"
              target="_blank" 
              class="underline font-bold"
              >
              梅竹黑客松成果存放平台
          </a>
          方可領取獎金
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>

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
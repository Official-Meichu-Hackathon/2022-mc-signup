<template>
  <div class="flex flex-col grid justify-items-center pb-[10%]">
    <!-- md -->
    <div class="hidden md:block aspect-[751/186] bg-[url('/topic_frame.svg')] bg-contain bg-no-repeat grid justify-items-center flex items-center">
      <p class="pink-title text-center text-3xl lg:text-5xl xl:text-6xl p-0 lg:p-3">&thinsp;工作人員</p>
    </div>

    <!-- sm -->
    <div class="block md:hidden aspect-[201/102] bg-[url('/topic_frame_sm.svg')] bg-contain bg-no-repeat bg-center grid justify-items-center flex items-center">
      <p class="pink-title text-center p-5 pb-9 text-xl sm:text-2xl pb-5 whitespace-pre-line">&thinsp;工作人員</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[2%] md:gap-[8%] w-[80%] xl:w-[70%] mt-[5%]">
      <div v-for="dept in staffList" :key="dept" class="flex flex-row items-center">
        <img :src="dept.img" class="w-[4rem] md:w-[8rem] lg:w-[10rem] mr-3 my-3" />
        <div class="basis-auto flex flex-row flex-wrap">
          <p class="StaffName text-xs leading-5 sm:text-sm md:text-base md:leading-7 lg:text-lg" v-for="name in dept.staff" :key="name">
            {{
              name === ' '
                ? '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
                : name
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="h-[80px] md:h-[75px] lg:h-auto"></div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      staffList: [
        { img: '/admin.svg', staff: ['陳存佩 / ', '賴睿麒'] },
        { img: '/Finance.svg', staff: ['林言臻 / ', '孫瑜雅 / ', '曹瀚文 / ', '楊則勛 / ', '陳郁安 / ','鄭伊茹'] },
        { img: '/Marketing.svg', staff: ['郭昀 / ', '宋少瑜 / ', '黃姿淯 / ', '趙于瑄 / ', '賴語彤 / ', '曾玉莉 / ', '蔡沁寧'] },
        { img: '/Development.svg', staff: ['邵筱庭 / ', '王柏涵 / ', '邱奕庭 / ', '林柏宇 / ', '侯博軒 / ', '王皓平 / ', '曾家祐 / ', '徐瑞澤'] },
        { img: '/Public.svg', staff: ['黃琦婷 / ', '莊婕妤 / ', '楊叔晴 / ', '高盛梅 / ', '解心妤 / ', '林庭伃 / ', '李博安 / ', '張宛婷 / ', '劉芮安 / ', '楊晨鍾'] },
        { img: '/Design.svg', staff: ['葉聿昕 / ', '吳承祐 / ', '莊涵韻 / ', '梁詠晴 / ', '陳樂穎 / ', '詹詠甯 / ', '周家安 / ', '洪顥耘'] },
        { img: '/Activity.svg', staff: ['陳宥安 / ', '邱弘竣 / ', '許靜怡 / ', '蔡欣儒 / ', '莊佳欣 / ', '陳宣榕 / ', '羅以淇 / ', '宋喬茵 / ', '范禎宸 / ', '朱祐辰'] }

      ]
    }
  }
}
</script>

<style>
.StaffName {
  font-weight: 500;
  /* font-size: 1rem; */
  /* line-height: 2.75rem; */
  /* or 250% */

  letter-spacing: 0.1em;

  color: #FFFFFF;
}

</style>
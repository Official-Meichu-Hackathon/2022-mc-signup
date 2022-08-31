<template>
  <div class="flex flex-col w-screen">
    <p class="pink-title text-3xl lg:text-5xl xl:text-6xl mx-auto">Sponsor</p>
    <img class="w-[60%] my-6" src="../assets/sponsor_line.svg" />
    <div class="flex justify-around my-10">
      <img class="w-[10%] mb-auto" src="../assets/two_star.svg" />
      <div class="w-[50%] aspect-[747/416] bg-[url('../../src/assets/sponsor_frame.svg')] bg-contain bg-no-repeat bg-center">
        <!-- <img src="../assets/atom.svg" /> -->
      </div>
      <img class="w-[10%] rotate-180 mt-auto" src="../assets/two_star.svg" />
    </div>
    <img class="w-[60%] my-6 rotate-180 ml-auto" src="../assets/sponsor_line.svg" />
  </div>

  <div class="flex flex-col grid justify-items-center my-[5%] w-screen">
    <div class="aspect-[751/186] my-[7%] bg-[url('../../src/assets/topic_frame.svg')] bg-contain bg-no-repeat grid justify-items-center flex items-center">
      <p class="pink-title text-3xl lg:text-5xl xl:text-6xl p-3">工作人員</p>
    </div>
    <div class="basis-auto grid grid-cols-2 gap-[8%] w-[80%] xl:w-[70%]">
        <div v-for="dept in staffList" :key="dept" class="flex flex-row items-center">
          <img :src="dept.img" class="w-[8rem] mr-3" />
          <div class="basis-auto flex flex-row flex-wrap">
            <p class="StaffName" v-for="name in dept.staff" :key="name">
              {{
                name === ' '
                  ? '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
                  : name
              }}
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffList: [
        { img: '../../src/assets/admin.svg', staff: ['陳存佩 / ', '賴睿麒'] },
        { img: '../../src/assets/admin.svg', staff: ['林言臻 / ', '孫瑜雅 / ', '曹瀚文 / ', '楊則勛 / ', '陳郁安 / ','鄭伊茹 / '] },
        { img: '../../src/assets/admin.svg', staff: ['郭昀 / ', '宋少瑜 / ', '黃姿淯 / ', '趙于瑄 / ', '賴語彤 / ', '曾玉莉 / ', '蔡沁寧 / '] },
        { img: '../../src/assets/admin.svg', staff: ['邵筱庭 / ', '王柏涵 / ', '邱奕庭 / ', '林柏宇 / ', '侯博軒 / ', '王皓平 / ', '曾家祐 / ', '徐瑞澤 / '] },
        { img: '../../src/assets/admin.svg', staff: ['黃琦婷 / ', '莊婕妤 / ', '楊叔晴 / ', '高盛梅 / ', '解心妤 / ', '林庭伃 / ', '李博安 / ', '張宛婷 / ', '劉芮安 / ', '楊晨鍾 / '] },
        { img: '../../src/assets/admin.svg', staff: ['葉聿昕 / ', '吳承祐 / ', '莊涵韻 / ', '梁詠晴 / ', '陳樂穎 / ', '詹詠甯 / ', '周家安 / ', '洪顥耘 / '] },
        { img: '../../src/assets/admin.svg', staff: ['陳宥安 / ', '邱弘竣 / ', '許靜怡 / ', '蔡欣儒 / ', '莊佳欣 / ', '陳宣榕 / ', '羅以淇 / ', '宋喬茵 / ', '范禎宸 / ', '朱祐辰'] }

      ]
    }
  }
}
</script>

<style>
.StaffName {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.75rem;
  /* or 250% */

  letter-spacing: 0.1em;

  color: #FFFFFF;
}

</style>
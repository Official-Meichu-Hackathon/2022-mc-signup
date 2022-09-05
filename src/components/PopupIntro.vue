<template>
  <!-- md -->
  <div class="hidden md:block pop-window">
      <div class="relative aspect-[738.2/596] bg-[url('/intro_card.svg')] bg-contain bg-no-repeat bg-center z-20">
      <div class="absolute bottom-0 aspect-[736.9/569.45] card-bg w-full mt-[full]"></div>
      <button 
        @click="$emit('close-window', true)" 
        class="absolute top-[5.5%] right-1 aspect-square w-[2.8%] mr-1"
      >
        <img class="w-full" src="../assets/cross.svg" />
      </button>
      <div class="card-textbox aspect-[678/365] p-[5%] my-1">
        <p class="card-text text-[2rem] font-bold whitespace-pre-line">
          {{ companies[selected].name }}
        </p>
        <br />
        <p class="card-text text-[1rem] whitespace-pre-line">
          {{ companies[selected].topic }}
          <br /><br />
          {{ companies[selected].intro }}
        </p>
        <p 
          v-if="selected == 0"
          class="card-text text-[1rem] font-bold whitespace-pre-line"
        >
          感謝Google Cloud 贊助本組運算資源
        </p>
        <p
          v-if="selected == 0"
          class="card-text text-[1rem] whitespace-pre-line"
        >
          備註：提供競賽前三名優先的正職及實習面試資格
        </p>
      </div>
      <div class="absolute left-0 right-0 mx-auto grid grid-flow-col flex items-center gap-4 aspect-[738.2/154.5] bottom-0 px-[5%]">
        <!-- <div class="flex justify-between"> -->
          <img :src="companies[selected].img[0]" class="max-w-[4rem] lg:max-w-[6rem] xl:max-w-[10rem] min-w-[30px] h-full" />
          <img v-if="selected == 0" :src="companies[selected].img[1]"  class="max-w-[3rem] lg:lg:max-w-[5rem] xl:max-w-[10rem] min-w-[30px] h-full" />
        <!-- </div> -->
        <img src="../assets/intro_card_bottom.svg" class="w-full" />
        <div v-if="selected != 7" class="flex flex-col grid justify-items-center">
          <button 
            @click="LinkToPdf" 
            class="aspect-square rounded-full w-[80%] grid justify-items-center max-w-[3rem] lg:max-w-[5rem] xl:max-w-[7rem]">
            <img src="../assets/download_btn.svg" class="w-[80%] lg:min-w-[40px] xl:min-w-[60px] py-3" />
          </button>
          <p class="text-white text-xs lg:text-sm">下載 PDF</p>
        </div>
      </div>
    </div>
  </div>

  <!-- sm -->
  <div class="block md:hidden pop-windowSm">
    <div class="relative aspect-[244/398] bg-[url('/intro_card_sm.svg')] bg-contain bg-no-repeat bg-center z-20">
      <div class="absolute aspect-[244/98] flex items-center flex-col bottom-0 left-0 right-0 w-[90%] mx-auto">
        <div class="flex justify-between h-[40%] w-[90%]"> 
          <div class="flex flex-row"> 
            <img :src="companies[selected].img[0]" class="mr-5 max-w-[3rem] min-w-[85px]" />
            <img v-if="selected == 0" :src="companies[selected].img[1]"  class="-ml-5 max-w-[3rem] min-w-[85px] " />
          </div>
          <div v-if="selected != 7" class="flex flex-col grid justify-items-center content-center">
            <button 
              @click="LinkToPdf" 
              class="aspect-square rounded-full grid justify-items-center max-w-[2.3rem]">
              <img src="../assets/download_btn.svg" class="max-w-[1.75rem]" />
            </button>
            <p class="text-white text-[8px]">下載 PDF</p>
          </div>
        </div>
        <img src="../assets/intro_card_bottomSm.svg" class="w-full my-2" />
      </div>
      <button 
        @click="$emit('close-window', true)" 
        class="absolute top-[2.5%] right-[2.3%] aspect-square w-[3.5%] mr-1"
      >
        <img class="w-full" src="../assets/cross.svg" />
      </button>
      <div class="absolute w-[90%] top-[7%] left-0 right-0 mx-auto aspect-[213/250] overflow-y-auto">
        <p class="card-text pt-5 px-2 text-[1.25rem] font-bold whitespace-pre-line">
          {{ companies[selected].name }}
        </p>
        <br />
        <p class="card-text pb-5 px-2 text-[0.75rem] whitespace-pre-line">
          {{ companies[selected].topic }}
          <br /><br />
          {{ companies[selected].intro }}
        </p>
        <p 
          v-if="selected == 0"
          class="card-text pb-5 px-2 text-[0.75rem] whitespace-pre-line font-bold"
        >
          感謝Google Cloud 贊助本組運算資源
        </p>
        <p
          v-if="selected == 0"
          class="card-text pb-5 px-2 text-[0.75rem] whitespace-pre-line"
        >
          備註：提供競賽前三名優先的正職及實習面試資格
        </p>
      </div>

    </div>
  </div>

  <div class="parentDisable"></div>

</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  props: {
    selected: Number
  },
  setup(props) {
    const companies = [
      {
        name: '台灣積體電路製造股份有限公司',
        topic: '主題：Safety Helmet Wearing Detection',
        intro: '說明：這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型,同時,串接雲端應用程式,確保工地安全,當AI模型判別出員工在危險區域並未配戴安全帽時,系統自動做出及時的action或alert。\n此外,參賽者也可以結合軟硬體,做出額外的延伸應用(本組不提供硬體配件,若有需要請參賽者自行準備)。',
        link: '/tsmc.pdf',
        img: ['/tsmc.svg', '/google_cloud.svg']
      },
      {
        name: '意法半導體',
        topic: '主題：開發出創新的任何與永續/綠能科技之相關應用',
        intro: '說明：溫室效應造成嚴峻氣候變遷問題,各國紛紛注重起永續科技的發展,跨國企業更是以使用潔淨能源和節能減碳為目標。\n意法半導體秉持著科技始之於你,並致力透過創新和尖端科技幫助人類改善生活為己任,持續與所有的利益關係人,共同探索和開創新應用,並建立起更好的永續居住環境。\n參賽隊伍必須使用意法半導體之產品開發出創新的任何與永續/綠能科技之相關應用(STM32 開發板,不限型號或 MEMS 擴充板*)。',
        link: '/ST.pdf',
        img: ['/ST.svg', '']
      },
      {
        name: 'ASML',
        topic: '主題一：如何幫助使用者完成批量影像的演算法設計?\n\n說明：ASML 艾司摩爾是半導體微影技術的提供者,由於產品可能由不同的系統架構, 不同的語言撰寫。\n唯一不變的是, 在微影技術中,各產品都有使用影像處理的部分。 \n在產品開發過程中,時常會需要調整、設計影像處理演算法流程,來針對問題做處理,所以讓我們試著設計解決方案,來幫助加速演算法測試驗證過程。',        
        intro: '\n主題二：如何有效率地完成晶圓缺陷檢測?\n\n說明：在現今工業製程中,如何在製作的產品線中檢測出瑕疵是對於產品的良率很重要的一環。\n同樣的。在 AMSL 的產品中,除了利用微影技術製作出高良率的晶片,如何在晶片製作中檢測出瑕疵也是一個很重要的環節。\nASML HMI 產品是利用電子束顯微鏡(E-Beam)照出晶片細節,產生出微影的影像,並且利用演算法檢測出其中的瑕疵。\n本次的解決方案是如何利用影像處理演算法在電子束檢測出來的影像中,精準且快速的找到瑕疵。',
        link: '/ASML.pdf',
        img: ['/asml.svg', '']
      },
      {
        name: '恩智浦',
        topic: '主題：永續發展 X 智慧城市與智慧家庭聯網',
        intro: '說明：隨著科技的演進,自動成為一種人們對高科技社會的想像,從工業革命至今,日新月異的科技使人們的生活從仰賴人力,到後來可以讓機器聽命行事,一直到 IoT 的興起,使機器有了自己判斷的標準。\n本次命題即以此為出發點,希望參賽者能利用我方提供的相關開發資源,以永續發展為主題,實作出智慧家電或智慧城市的應用。',
        link: '/NXP.pdf',
        img: ['/nxp.svg', '']
      },
      {
        name: '原相科技',
        topic: '主題：Visual fiducial localization system for intelligent sensing applications',
        intro: '說明：Fiducials are artificial visual features designed for automatic detection, and often carry a unique payload to make them distinguishable from each other. \nVisual fiducial system has many applications in computer vision, augmented reality, and robotics since they greatly simplify the perception problem. \nBy leveraging PixArt’s ultra-low-power image sensor with visual fiducial localization system, we can achieve smarter sensing and interaction for different applications.',
        link: '/PXI.pdf',
        img: ['/pxi.svg', '']
      },
      {
        name: '中國信託',
        topic: '主題: 運用科技,打造疫情衝擊下之金融創新服務',
        intro: '說明：近年來,行動支付、數位銀行與區塊鏈等金融科技(FinTech)已逐漸改變傳統的金融服務模式。\n而突如其來的疫情更驅動著金融機構大量採用 AI 與相關科技快速發展與推動 FinTech 應用,朝向「零接觸金融服務」演進。\n本次將藉由各位同學的創意,應用數位科技或 AI 技術,針對下列任一或多項金融相關議題,設計創新之金融應用。',
        link: '/CTBC.pdf',
        img: ['/ctbc.svg', '']
      },
      {
        name: 'Kronos Research',
        topic: '主題：做出自己的量化交易策略',
        intro: '說明：量化交易,指的是使用電腦技術進行交易的投資方式。依據統計,美國股票市場其中60% ~ 75% 的交易量來自量化交易。\n本次參賽者將透過加密貨幣歷史交易資料,來開發屬於自己的量化交易策略。',
        link: '/Kronos.pdf',
        img: ['/kronos.svg', '']
      },
      {
        name: '新竹市政府',
        topic: '主題：發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！',
        intro: '說明：新冠疫情丶氣候變遷丶快速變化的政經局勢，刺激著社會及青年世代不斷地反思，聯合國「2030永續發展目標」（Sustainable Development Goals, SDG ），SDGs 目標 11 是「建構具包容、安全、韌性及永續特質的城市與鄉村」，世界各大城市也紛紛朝此目標努力！\n創客交流組期望報名團隊能夠以永續發展目標為題，洞察市民生活、校園生活中的關鍵議題，融入公私協力精神，發想創意並提出解決方案，共同合作打造包容丶靭性丶永續丶安全的智慧新竹！',
        link: '',
        img: ['/gov1.svg', '']
      }
    ]
    function LinkToPdf() {
      window.open(companies[props.selected].link, '_blank')
    }
    return {
      companies,
      LinkToPdf,
    };
  }
}
</script>

<style>
.card-bg {
  background: linear-gradient(134.22deg, #ABF0EA 0%, #4F9ACD 113.29%);
  opacity: 0.25;
}
.card-textbox {
  position: absolute;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  top: 10%;
  left: 0;
  right: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}
.card-text {
  /* font-size: 1rem; */
  line-height: 2.5rem;
  letter-spacing: 0.275em;
  color: #FFFFFF;
}
.parentDisable{
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    z-index: 998;
    height: 100%;
    width: 100%;
}

.pop-window {
  position: fixed;
  top: 5%;
  bottom: 5%;
  left: 0;
  right: 0;
  z-index: 999;
  margin: auto;
  width: 50%;
}

.pop-windowSm {
  position: fixed;
  top: 2%;
  bottom: 15%;
  left: 0;
  right: 0;
  z-index: 999;
  margin: auto;
  max-height: 70%;
  width: 80%;
}
</style>
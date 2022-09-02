<template>
  <PopupIntro 
    v-if="isOpen"
    @close-window="closeTopic"
    :selected="choose"
  />
  <div class="flex flex-col grid justify-items-center w-screen">
    <!-- md -->
    <div 
      class="hidden md:block aspect-[751/186] bg-[url('../../src/assets/topic_frame.svg')] bg-contain bg-no-repeat grid justify-items-center flex items-center"
    >
      <p class="pink-title text-center text-3xl lg:text-5xl xl:text-6xl p-0 lg:p-3">&thinsp;比賽題目</p>
    </div>

    <!-- sm -->
    <div 
      class="block md:hidden aspect-[201/102] bg-[url('../../src/assets/topic_frame_sm.svg')] bg-contain bg-no-repeat grid justify-items-center flex items-center"
    >
      <p class="pink-title text-center text-2xl pb-5 whitespace-pre-line">&thinsp;比賽題目</p>
    </div>

    <!-- Hacker -->
    <div class="flex flex-row flex items-center justify-self-start pl-[5%] pt-5">
      <img class="h-10" src="../assets/star.svg" />
      <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl px-1">黑客組</p>
    </div>

    <div class="flex justify-between items-center w-[90%] pt-5">
      <button @click="scrollLeft" class="mx-3 py-12 w-[8%] md:w-auto">
        <img class="w-full animate-pulse" src="../assets/arrow_btn.svg" id="leftBtn" />
      </button>

      <div id="list-box" class="list-box">
        <div id="list" class="list flex justify-around overflow-x-auto min-w-[900px] md:min-w-[1500px] lg:min-w-[2000px] ">
          <button 
            @click="openTopic(index)" 
            v-for="(item, index) in monitorList" 
            :key="item.id" 
            class="w-[7.5rem] mx-[1rem] list-items rounded-full aspect-square bg-cover bg-no-repeat "
          >
            <img :src="imgList[index]" class="bg-white rounded-full aspect-square w-full" />
          </button>
        </div>
      </div>

      <button @click="scrollRight" class="mx-3 py-12  w-[8%] md:w-auto rotate-180">
        <img class="w-full animate-pulse" src="../assets/arrow_btn.svg" id="rightBtn"/>
      </button>
    </div>

    <!-- Maker -->
    <div class="flex flex-row flex items-center justify-self-start pl-[5%] pt-5">
      <img class="h-10" src="../assets/star.svg" />
      <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl px-1">創客交流組</p>
    </div>
    <p class="text-white text-sm lg:text-base xl:text-lg leading-loose tracking-[0.04em] flex justify-self-start pl-[8%] pt-5">
      交流組的參賽者自訂題目，以不同的角度切入問題，提供更加多元的解決方案。
    </p>


  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import PopupIntro from './PopupIntro.vue';
import PopupIntroSm from './PopupIntroSm.vue';
export default {
  components: { PopupIntro, PopupIntroSm },
  setup() {
    const isOpen = ref(false)
    const choose = ref('')
    const monitorList = ref([])
    const leftArrow = ref(false)
    const rightArrow = ref(true)
    const imgList = ['../../src/assets/tsmc.svg', '../../src/assets/ST.svg','../../src/assets/asml.svg','../../src/assets/nxp.svg','../../src/assets/pxi.svg','../../src/assets/ctbc.svg','../../src/assets/kronos.svg' ]

    for (let i = 1; i < 8; i++) {
      monitorList.value.push({
        id: i,
        name: `item${i + 1}`,
        status: 0
      })
    }
    
    // const moveList = () => {
    //   if (rightArrow.value) {
    //     document.getElementById('rightBtn').style.animation = "pulse 1s infinite"
    //   }
    //   if (leftArrow.value) {
    //     document.getElementById('leftBtn').style.animation = "pulse 1s infinite"
    //   }
    // }


    const openTopic = (index) => {
      isOpen.value = true;
      choose.value = index;
    }

    const closeTopic = (val) => {
      isOpen.value = !(val)
      document.getElementById()
    }

    const scrollLeft = () => {
        const listEl = document.getElementById('list')
        const itemLength = listEl.clientWidth / 7
        const boxLength = document.getElementById('list-box').clientWidth
        const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
        if (leftMove + boxLength - (itemLength*2) < boxLength) {
          // to start
          listEl.style.left = '0px'
          listEl.style.transition = "left 1s"
          console.log("type1")
          leftArrow.value = false;
          rightArrow.value = true;
        } else {
          listEl.style.left = '-' + (leftMove - (itemLength*2)) + 'px'
          listEl.style.transition = "left 1s"
          console.log('type2')
          leftArrow.value = true;
          rightArrow.value = true;
        }
        moveList();
      }
    
    const scrollRight = () => {
      const listEl = document.getElementById('list')
      const itemLength = listEl.clientWidth / 7
      const allLength = listEl.clientWidth
      const boxLength = document.getElementById('list-box').clientWidth
      if (allLength < boxLength) return
      const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
      if (leftMove + boxLength + (itemLength*2) > allLength) {
        listEl.style.left = '-' + (allLength - boxLength) + 'px'
        listEl.style.transition = "left 1s"
        console.log("hehr")
        leftArrow.value = true;
        rightArrow.value = false;
      } else {
        listEl.style.left = '-' + (leftMove + (itemLength*2)) + 'px'
        listEl.style.transition = "left 1s"
        console.log("hehr")
        rightArrow.value = true;
        leftArrow.value = true
      }
      moveList();
    }
    

    return {
      isOpen,
      monitorList,
      imgList,
      choose,
      scrollLeft,
      scrollRight,
      openTopic,
      closeTopic
    }
  }
}
</script>

<style>
.list-box {
    width: calc(100vw - 100px);
    overflow: hidden;
    position: relative;    
}

.list {
    position: relative;
    width: calc(100vw - 100px);
    /* display: flex; */
    justify-content: space-around;
    transform: all 2s;
    left: 0;
}

.list-items {
  position: relative;
  align-content: center;
  cursor: pointer;
}

</style>
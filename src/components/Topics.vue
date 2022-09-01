<template>
  <PopupIntro 
    v-if="isOpen"
    @close-window="closeTopic"
    :selected="choose"
  />
  <div class="flex flex-col grid justify-items-center w-screen">
    <div class="aspect-[751/186] bg-[url('../../src/assets/topic_frame.svg')] bg-contain bg-no-repeat grid justify-items-center flex items-center">
      <p class="pink-title text-3xl lg:text-5xl xl:text-6xl p-3">比賽題目</p>
    </div>
    <div class="flex flex-row flex items-center justify-self-start pl-[5%]">
      <img class="h-10" src="../assets/star.svg" />
      <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl px-1">黑客組</p>
    </div>

    <div class="flex justify-between items-center w-[90%]">
      <button @click="scrollLeft" class="mx-3 py-12 ">
        <img class="w-full" src="../assets/arrow_btn.svg" />
      </button>

      <div id="list-box" class="list-box">
        <div id="list" class="list flex justify-around overflow-x-auto">
          <button 
            @click="openTopic(index)" 
            v-for="(item, index) in monitorList" 
            :key="item.id" 
            class="w-[7.5rem] mx-[1rem] list-items rounded-full aspect-square border border-[#8DD9ECE5] bg-cover bg-no-repeat"
          >
            <img :src="imgList[index]" class="bg-white rounded-full aspect-square w-full" />
          </button>
        </div>
      </div>

      <button @click="scrollRight" class="mx-3 py-12 ">
        <img class="w-full rotate-180" src="../assets/arrow_btn.svg" />
      </button>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import PopupIntro from './PopupIntro.vue';
export default {
  components: {PopupIntro},
  setup() {
    const isOpen = ref(false)
    const choose = ref('')
    const monitorList = ref([])
    const imgList = ['../../src/assets/star.svg', '../../src/assets/atom.svg','../../src/assets/circle1.svg','../../src/assets/circle2.svg','../../src/assets/circle3.svg','../../src/assets/circle1.svg','../../src/assets/circle2.svg' ]

    for (let i = 1; i < 8; i++) {
      monitorList.value.push({
        id: i,
        name: `item${i + 1}`,
        status: 0
      })
    }

    const openTopic = (index) => {
      isOpen.value = true;
      choose.value = index;
      console.log("select:",choose.value, isOpen.value)
    }

    const closeTopic = (val) => {
      isOpen.value = !(val)
    }

    const scrollLeft = () => {
        const listEl = document.getElementById('list')
        const itemLength = listEl.clientWidth / 7
        const boxLength = document.getElementById('list-box').clientWidth
        const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
        if (leftMove + boxLength - (itemLength*2) < boxLength) {
          // 到最开始的时候
          listEl.style.left = '0px'
          listEl.style.transition = "left 1s"
        } else {
          listEl.style.left = '-' + (leftMove - (itemLength*3)) + 'px'
          listEl.style.transition = "left 1s"
        }
      }
    
    const scrollRight = () => {
      const listEl = document.getElementById('list')
      const itemLength = listEl.clientWidth / 7
      const allLength = monitorList.value.length * itemLength
      const boxLength = document.getElementById('list-box').clientWidth
      if (allLength < boxLength) return
      const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
      if (leftMove + boxLength + itemLength*2 > allLength) {
        listEl.style.left = '-' + (allLength - boxLength) + 'px'
        listEl.style.transition = "left 1s"
      } else {
        listEl.style.left = '-' + (leftMove + 360) + 'px'
        listEl.style.transition = "left 1s"
      }
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
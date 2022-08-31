<template>
  <div class="flex flex-col grid justify-items-center w-screen">
    <div class="aspect-[751/186] bg-[url('../../src/assets/topic_frame.svg')] bg-contain bg-no-repeat grid justify-items-center flex items-center">
      <p class="pink-title text-3xl lg:text-5xl xl:text-6xl p-3">比賽題目</p>
    </div>
    <div class="flex flex-row flex items-center justify-self-start pl-[5%]">
      <img class="h-10" src="../assets/star.svg" />
      <p class="yellow-title text-2xl lg:text-3xl xl:text-4xl px-1">黑客組</p>
    </div>

    <div class="flex justify-between items-center w-[95%]">
      <button @click="scrollLeft" class="h-[50%]">
        <img class="w-full" src="../assets/arrow_btn.svg" />
      </button>

      <div id="list-box" class="list-box">
        <div id="list" class="list">
          <div v-for="(item, index) in monitorList" :key="item.id" class="list-items rounded-full aspect-square bg-[#FFFFFF]">
            <img :src="imgList[index]" class="w-full" />
          </div>
        </div>
      </div>

      <button @click="scrollRight" class="h-[50%]">
        <img class="w-full rotate-180" src="../assets/arrow_btn.svg" />
      </button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        monitorList: [],
        imgList: ['../../src/assets/star.svg', '../../src/assets/atom.svg','../../src/assets/circle1.svg','../../src/assets/star.svg','../../src/assets/circle1.svg','../../src/assets/circle1.svg','../../src/assets/circle1.svg' ],
      }
    },
    created() {
      this.initMonitorList()
    },
    methods: {
      initMonitorList() {
        for (let i = 1; i < 4; i++) {
          this.monitorList.push({
            id: i,
            name: `item${i + 1}`,
            status: 0
          })
        }
      },
      // 左滑动逻辑
      scrollLeft() {
        const allLength = this.monitorList.length * 120
        const boxLength = document.getElementById('list-box').clientWidth
        console.log("scrollLeft!!!!!!", boxLength)
        if (allLength < boxLength) return
        console.log("scrollLeft111")
        const listEl = document.getElementById('list')
        const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
        if (leftMove + boxLength - 360 < boxLength) {
          console.log("scrollLeft222")
          // 到最开始的时候
          listEl.style.left = '0px'
        } else {
          console.log("scrollLeft333")
          listEl.style.left = '-' + (leftMove - 360) + 'px'
        }
      },
      // 右滑动逻辑
      scrollRight() {
        console.log("scrollRight")
        const allLength = this.monitorList.length * 120
        const boxLength = document.getElementById('list-box').clientWidth
        if (allLength < boxLength) return
        const listEl = document.getElementById('list')
        const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
        if (leftMove + boxLength + 360 > allLength) {
          listEl.style.left = '-' + (allLength - boxLength) + 'px'
        } else {
          listEl.style.left = '-' + (leftMove + 360) + 'px'
        }
      }
    }
  }
</script>

<style>
.list-box {
      width: calc(100vw - 100px);
      overflow: hidden;
      position: relative;
        left: 0;
        transition: left 1s;
}

.list {
    width: calc(100vw - 100px);
    display: flex;
}

.list-items {
  width: 100px;
  height: 95px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  margin-left: 40px;
}
</style>
<template>
  <!-- <Transition name="nav"> -->
    <nav
      class="fixed top-0 z-10 mx-auto w-screen py-[0.5%] px-[1%] bg-bgColor z-50"
      id="nav"
      >
      <!-- <transition name="slide"> -->
        <div class=" flex items-center justify-around text-white z-50"> 
          <button
            v-for="(item, index) in content" :key="index"
            @click="$emit('jumpTo', index)" 
          >
            <p class="nav_text text-lg lg:text-xl xl:text-2xl hover:text-shadow">{{ item }}</p>
          </button>
        </div>

        <!-- <div class="relative flex items-center justify-around text-white">
          <button
            v-for="(item, index) in content" :key="index"
            @click="$emit('jumpTo', index)" 
          >
            <p class="nav_text text-lg lg:text-xl xl:text-2xl hover:text-shadow">{{ item }}</p>
          </button>
        </div> -->
      <!-- </transition> -->
    </nav>

  <!-- </Transition> -->
</template>

<script setup>
import { ref,onMounted } from 'vue'
const nav_show = ref(true)
const content = ['活動願景', '比賽資訊', '組別介紹', '如何報名', '工作坊', '獎項資訊', '競賽題目', '贊助單位', '工作人員']
let temp


onMounted(() => window.addEventListener('scroll', handleScroll))


function handleScroll() {
  const navbar = document.getElementById("nav")
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.pageYOffset;
}
// function handleScroll() {
//   let scrollTop =
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop
//   let scroll = scrollTop - temp
//   if (scroll < 0) {
//     nav_show.value = true
//     setTimeout(3000, () => {
//       emit('resetHeader')
//     })
//     // emit('resetHeader')
//     // console.log(scroll)
//   } else {
//     nav_show.value = false
//     // console.log(scroll)
//   }
//   temp = scrollTop
// }
</script>

<style scoped>
.nav_text {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  /* font-size: 20px; */
  line-height: 80px;
  letter-spacing: -0.03em;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.slide-leave-active,
.slide-enter-active {
  transition: all 0.4s ease;
}

.nav-leave-active,
.nav-enter-active {
  transition: all 1s ease;
}

.nav-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.nav-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
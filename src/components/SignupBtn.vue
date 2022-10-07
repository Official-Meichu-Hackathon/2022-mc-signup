<template>
  <div
    class="FixBtn aspect-[193/48]">
    <div class="bg-[url('/signup_btn.svg')] bg-contain bg-no-repeat bg-center px-3 w-full cursor-not-allowed ">
      <div class="flex items-center justify-center p-2 z-30">
        <img src="../assets/signup_btn_img.svg" class="px-1 w-1/3 min-w-[20px] max-w-[30px]" />
        <p class="text-sm md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap text-shadow text-white font-bold px-1" >報名結束</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
onMounted(() => {
  lazy_loading()
})
const images = document.querySelectorAll('[data-src]')
const objs = document.querySelectorAll('object')


// circumstances under which the callback will be invoked
const options = {
  root: null,
  rootMargin: '50px',
  threshold: 0
}

const loadImage = (img) => {
  const src = img.getAttribute('data-src')
  const obj_src = img.getAttribute('data-data')
  if (obj_src) {
    img.data = obj_src
  }
  else if (!src) return
  img.src = src
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    // only load the image when intersecting
    if (!entry.isIntersecting) return
    // load the image
    loadImage(entry.target)
    // stop observing this element
    observer.unobserve(entry.target)
  })
}

const lazy_loading = () => {
  // create an observer
  let observer = new IntersectionObserver(callback, options)

  // observe all the images
  images.forEach(image => observer.observe(image))
  objs.forEach(obj => observer.observe(obj))
}
</script>

<style>
.FixBtn {
    position: fixed;
    right: 5%;
    bottom: 10%;
}
.BtnPluse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
      opacity: .7;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
}
</style>
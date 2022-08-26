<template>
  <Transition name="nav">
    <nav
      v-show=true
      class="fixed top-0 z-10 mx-auto w-screen p-6 bg-bgColor"
    >
    </nav>

  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const nav_show = ref(false)
console.log("HELLO Header")

</script>

<style>

</style>
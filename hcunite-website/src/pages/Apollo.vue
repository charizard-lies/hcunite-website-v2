<template>
  <section
    class="relative w-full h-screen overflow-hidden custom-cursor-eye-open"
    :class="{'custom-cursor-eye-close': showOverlay}"
    @click="toggleOverlay"
    @touchstart="toggleOverlay"
  >
    <!-- Background Image -->
    <!-- <img
      src="../assets/informal_council_pic.jpg"
      alt="Group Photo"
      class="absolute w-full h-full object-cover transition-all duration-500"
      :class="{'blur-md': showOverlay }"
    /> -->

    <div class="w-full h-screen bg-cover bg-center flex" :style="{ backgroundImage: `url(${groupPhoto})` }">

        <div 
            class="absolute inset-0 bg-black transition-opacity duration-500" 
            :class="showOverlay ? 'opacity-50' : 'opacity-0'"
        ></div>

        <div class="flex items-center justify-center h-screen w-full transition-all duration-500 text-white text-center opacity-0" :class="{'backdrop-blur-xl opacity-100': showOverlay}">
                <h1 class="text-5xl md:text-7xl lg:text-9xl font-inter font-bold">
                    APOLLO
                </h1>
        </div>
    </div>
    
  </section>
</template>

<script setup>
import groupPhoto from '../assets/test.jpeg'
import { ref } from 'vue'

const showOverlay = ref(false)

function toggleOverlay() {
  showOverlay.value = !showOverlay.value
}
</script>

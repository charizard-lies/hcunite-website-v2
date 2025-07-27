<template>
  <section
    class="relative w-full overflow-hidden custom-cursor-eye-open"
    :class="{'custom-cursor-eye-close': showOverlay}"
  >
    <!-- Background Image -->
    <!-- <img
      src="../assets/informal_council_pic.jpg"
      alt="Group Photo"
      class="absolute w-full h-full object-cover transition-all duration-500"
      :class="{'blur-md': showOverlay }"
    /> -->

    <div class="w-full h-screen bg-cover bg-center flex" 
      :style="{ backgroundImage: `url(${groupPhoto})` }" 
      @click="handleDesktopClick"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >

        <div 
            class="absolute inset-0 bg-black transition-opacity duration-500" 
            :class="showOverlay ? 'opacity-50' : 'opacity-0'"
        ></div>

        <div class="flex flex-col items-center justify-center h-screen w-full transition-all duration-500 text-white text-center opacity-0" 
          :class="{'backdrop-blur-xl opacity-100': showOverlay}"
        >
            <h1 
            @click.stop 
            @touchstart.stop 
            @touchend.stop 
            class="text-5xl md:text-7xl lg:text-9xl font-inter font-bold"
            >
                APOLLO
            </h1>
            <a 
            @click.stop 
            @touchstart.stop 
            @touchend.stop 
            target="blank"
            href="https://www.instagram.com/apollofaculty/" 
            class="text-white font-poppins text-md inline-block border-1 border-apollo hover:bg-apollo rounded-full py-3 px-6 mt-6 lg:text-lg transition-colors duration-300"
            >
            Instagram
            </a>
        </div>

        <div 
          class="absolute bottom-12 w-full text-center text-white text-lg md:text-xl font-poppins pointer-events-none z-20 transition-all duration-500"
          :class="showOverlay ? 'opacity-50' : 'opacity-0'"
        >
          Tap to reveal image
        </div>
    </div>
    
  </section>

  <section class="p-12">
    <p class="max-w-[700px] mx-auto font-poppins text-xs md:text-base">
      (FROM LEFT TO RIGHT)
      <br><br>First Row: 
      <br>Toh Jun Hao; Chen Leqi
      <br><br>Second Row: 
      <br>Yeoh Yu Bin Irvin; Aveline Tan Wan Yu; Leow Wei Sheen; Bai Zheng; Ang Shi Yi Torres; Tay Ming Feng Kyan
      <br><br>Third Row: 
      <br>Wu Wan Ying Dorine; Lauren Kate Tham Qi; Zhang Yueshan; Tan Qi An; Cheng Wen Xin; Boon Kelley; Sng Yun Yi Claire
    </p>
  </section>

  <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

  <section class=" text-justify p-12">
    <img src="../assets/informal_council_pic.jpg" alt="" class="aspect-square max-w-[700px] w-full m-auto rounded-xl object-cover">
    <h2 class="mt-12 text-4xl md:text-7xl font-poppins text-center">The Bull</h2>
    <p class="max-w-[700px] mt-6 mx-auto font-poppins">
      Roaming through Apollo Faculty's spirit, our sacred animal – the bull – 
      serves as an emblem of artistic expression and free exploration. 
      It is a radiant representation of the Faculty's tenacity and commitment to fostering a robust academic environment, 
      embodying the unwavering resolve that all members of the Apollo Faculty possess in the face of challenges.  
      <br><br>In the vibrant tapestry of our Faculty’s identity, the distinguishing yellow radiates optimism, 
      cradling all in its warm golden rays. 
      Greek God of the Sun and twin brother to Artemis, 
      Apollo epitomises the vitality and vibrancy the Faculty strives to exemplify. 
      By embracing the Faculty motto “Live Loud, Live Proud”, 
      we strive to boldly soar to great heights and take pride in our stellar achievements.
    </p>
  </section>


</template>

<script setup>
import groupPhoto from '../assets/test.jpeg'
import { ref } from 'vue'

const showOverlay = ref(true)

let touchYStart = null

function handleTouchStart(event) {
  touchYStart = event.touches[0].clientY
}

function handleTouchEnd(event) {
  const touchYEnd = event.changedTouches[0].clientY
  const deltaY = Math.abs(touchYEnd - touchYStart)

  if (deltaY < 10) {
    // Considered a tap
    toggleOverlay()
  }

  // otherwise let it scroll
}

function handleDesktopClick() {
  if (!isMobile()) toggleOverlay()
}

function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

function toggleOverlay() {
  showOverlay.value = !showOverlay.value
}
</script>

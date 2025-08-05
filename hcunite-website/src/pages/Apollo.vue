<template>
  <section
    class="relative w-full overflow-hidden custom-cursor-eye-open"
    :class="{'custom-cursor-eye-close': showOverlay}"
  >

    <div class="w-full h-screen bg-cover bg-center flex" 
      :style="{ backgroundImage: `url(${groupPhoto})` }" 
      @click="handleDesktopClick"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >

        <div 
            class="absolute inset-0 bg-black transition-opacity duration-500" 
            :class="showOverlay ? 'opacity-50' : 'opacity-0'"
        >
        </div>

        <div class="flex flex-col items-center justify-center h-screen w-full transition-all duration-500 text-apollo text-center opacity-0" 
          :class="{'backdrop-blur-xl opacity-100': showOverlay}"
        >
            <h1
            class="hover:text-white transition-colors duration-500"
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
            :class="{'pointer-events-auto opacity-100': showOverlay, 'pointer-events-none opacity-0': !showOverlay}"
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
    <p class="centered-text-block">
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

  <section class="text-justify p-12">
    <img src="../assets/informal_council_pic.jpg" alt="" class="aspect-square w-[70%] max-w-[500px] m-auto rounded-xl object-cover">
    <h2 class="mt-12 text-center">The Bull</h2>
    <p class="centered-text-block mt-6">
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


  <section class="w-full py-6 px-4">
    <h2 class="text-center">Events</h2>
    <div class="mt-4 lg:px-12">
      <MultiCarousel :events="events"></MultiCarousel>   
    </div>
  </section>

  <section class="w-full py-6">
    <h2 class="text-center">Faculty Cheers</h2>
    <div class="mt-4">
      <Carousel :cheers="cheers"></Carousel>
    </div>
  </section>
</template>

<script setup>
import groupPhoto from '../assets/test.jpeg'
import Dropdown from '../components/Dropdown.vue'
import MultiCarousel from '../components/Multicarousel.vue'
import Carousel from '../components/Carousel.vue'
import { ref } from 'vue'

const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/informal_council_pic.jpg',
      '/images/test.jpeg',
      '/images/informal_council_pic.jpg',
    ],
    text:[
        "djafaldjfldjf",
        "aldfkjdslfjlkdjslf",
        "dlfkjladjfljdslfjlsdlf",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/test.jpeg',
      '/images/informal_council_pic.jpg',
      '/images/test.jpeg',
    ],
    text:[
        "djafaldjfldjf",
        "aldfkjdslfjlkdjslf",
        "dlfkjladjfljdslfjlsdlf",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/informal_council_pic.jpg',
      '/images/test.jpeg',
      '/images/informal_council_pic.jpg',
    ],
    text:[
        "djafaldjfldjf",
        "aldfkjdslfjlkdjslf",
        "dlfkjladjfljdslfjlsdlf",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/test.jpeg',
      '/images/informal_council_pic.jpg',
      '/images/test.jpeg',
    ],
    text:[
        "djafaldjfldjf",
        "aldfkjdslfjlkdjslf",
        "dlfkjladjfljdslfjlsdlf",
    ]
  }
]

const cheers = [
  "/images/cheers_test.jpg",
  "/images/cheers_test.jpg",
  "/images/cheers_test.jpg",
  "/images/cheers_test.jpg",
  "/images/cheers_test.jpg",
  "/images/test.jpeg",
]

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
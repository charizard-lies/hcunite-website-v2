<template>
  <section
    class="relative w-full overflow-hidden custom-cursor-eye-open"
    :class="{'custom-cursor-eye-close': showOverlay}"
  >

    <div class="w-full h-auto bg-cover bg-center flex" 
      @click="handleDesktopClick"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
        <div class="w-full aspect-auto">
          <img src="/images/Artemis/artemis_photo.jpg" alt="">
        </div>

        <div 
            class="absolute inset-0 bg-black transition-opacity duration-500" 
            :class="showOverlay ? 'opacity-50' : 'opacity-0'"
        >
        </div>

        <div class="absolute inset-0 flex flex-col items-center justify-center w-full transition-all duration-500 text-white text-center opacity-0" 
          :class="{'backdrop-blur-xl opacity-100': showOverlay}"
        >
            <h1>
                ARTEMIS
            </h1>
            <a 
            @click.stop 
            @touchstart.stop 
            @touchend.stop 
            target="blank"
            href="https://www.instagram.com/artemisfaculty/" 
            class="text-white font-poppins text-md inline-block border-1 border-artemis hover:bg-artemis rounded-full py-3 px-6 mt-6 lg:text-lg transition-colors duration-300"
            :class="{'pointer-events-auto opacity-100': showOverlay, 'pointer-events-none opacity-0': !showOverlay}"
            >
            Instagram
            </a>
        </div>

        <div 
          class="absolute bottom-8 lg:bottom-12 w-full text-center text-white text-base md:text-xl font-poppins pointer-events-none z-20 transition-all duration-500"
          :class="showOverlay ? 'opacity-50' : 'opacity-0'"
        >
          Tap to reveal image
        </div>
    </div>
    
  </section>

  <section class="p-12">
    <p class="centered-text-block">
      (FROM LEFT TO RIGHT)
      <br><br>First Row
      <br>Lucas Chin Yee Seng; Lee Kai Bin, Ethan
      <br><br>Second Row
      <br>Lau Ray Kai Elliot; Song Haoran; Jiang Sirui Serena; Lee Pei Xuan Chloe
      <br><br>Third Row: 
      <br>Mao Tianze; Tith Bunnath; Pan Jiayao
      <br><br>Fourth Row
      <br>Lecia Ang Ler Xuan; Teo Jing Wei; Ran Zhuo Er, Joelle; Low Esme; Yeo Hsin Yun; Hu Enxi
    </p>
  </section>

  <div class="h-px w-[60%] max-w-[900px] bg-artemis m-auto"></div>

  <section class="text-justify p-12">
    <img src="/images/Artemis/artemis.png" alt="" class="aspect-square w-[70%] max-w-[500px] m-auto rounded-xl object-cover">
    <h2 class="mt-12 text-center">The Wolf</h2>
    <p class="centered-text-block mt-6">
      Artemis is the Greek goddess of the hunt. In Hwa Chong, our Faculty is represented by the wolf. 
      The night can be uncertain and challenging, yet the wolves embrace the spirit of solidarity in the face of adversity, guided by Artemis. 
      We wish for students to be brave in their pursuits, chartering new paths as they support one another through the various challenges in their JC lives. 
      Just as wolves never leave the pack, so will Artemisians always stand in unity and rise to the challenges of each new day together as a family.
      <br><br>The PACK’s Got Your Back!!
    </p>
  </section>


  <section class="w-full py-6 px-4">
    <h2 class="text-center">Events</h2>
    <p class="text-center mt-2 text-gray-600">Click on the images to learn more</p>
    <div class="mt-4 lg:px-12">
      <MultiCarousel :events="events" faculty="artemis"></MultiCarousel>   
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
import Dropdown from '../components/Dropdown.vue'
import MultiCarousel from '../components/Multicarousel.vue'
import Carousel from '../components/Carousel.vue'
import { ref } from 'vue'

const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/Artemis/artemis_ori_1.JPG',
      '/images/Artemis/artemis_ori_2.JPG',
      '/images/Artemis/artemis_ori_3.jpeg',
    ],
    text:[
        "Welcome to the pack!! Get ready for an exciting journey as we kick off the year with O1.",
        "Bond with your classmates and other peers in the Faculty as you feel the Faculty spirit through various games and fun activities lined up.",
        "This culminates in the Post Orientation Party (POP), where Artemisians show their moves in an incredible dance choreographed by the Artemis Faculty Committee.",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Artemis/artemis_brunch_1.JPG',
      '/images/Artemis/artemis_brunch_2.JPG',
      '/images/Artemis/artemis_brunch_3.JPG',
      '/images/Artemis/artemis_brunch_4.JPEG',
    ],
    text:[
        "Faculty Brunch comes right after the promotional exams at the end of the school year.",
        "Sit back, relax, and enjoy a hearty meal together!",
        "Look forward to games prepared by the Faculty Committee, and performances put up by fellow Artemisians (which could be your chance to showcase your secret talent to the entire Faculty!).",
        "It’s a time to remember our time together in the past year and to truly feel the bond we have created with one another.",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Artemis/artemis_cip_1.JPG',
      '/images/Artemis/artemis_cip_2.JPG',
      '/images/Artemis/artemis_cip_3.JPG',
    ],
    text:[
        "In our Faculty, we always emphasise the vitality of graciously giving, being inclusive, and showing gratitude. Artemisians come together during FCIP to give back to the community while forging closer bonds within the Faculty.",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Artemis/artemis_welfare_1.jpg',
      '/images/Artemis/artemis_welfare_2.JPG',
      '/images/Artemis/artemis_welfare_3.JPG',
    ],
    text:[
        "Artemis Faculty Committee is here to care for your welfare and ensure that you have a wholesome time here. Through passion projects such as food deliveries and busking, we seek to allow Artemisians to have the best time while staying happy and healthy in our pack. Follow our Instagram and stay tuned for exciting updates on our Faculty, from event publicity to important announcements. ",
    ]
  }
]

const cheers = [
  "/images/Artemis/artemis_cheer_1.jpg",
  "/images/Artemis/artemis_cheer_2.jpg",
  "/images/Artemis/artemis_cheer_3.jpg",
  "/images/Artemis/artemis_cheer_4.jpg",
  "/images/Artemis/artemis_cheer_5.jpg",
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
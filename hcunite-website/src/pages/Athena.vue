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
          <img src="/images/Athena/athena_photo.jpg" alt="">
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
                ATHENA
            </h1>
            <a 
            @click.stop 
            @touchstart.stop 
            @touchend.stop 
            target="blank"
            href="https://www.instagram.com/athenafaculty/" 
            class="text-white font-poppins text-md inline-block border-1 border-athena hover:bg-athena rounded-full py-3 px-6 mt-6 lg:text-lg transition-colors duration-300"
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
      <br>Sun Peiyan; Alastair Chua Wei Jie
      <br><br>Second Row
      <br>Kwan Qiao Le; Teo Kai Xuan Venus; Rachel Chan Rui En; Choo Ying En Hannah; Koh En-Rui Charlotte; Liang Yu Fei
      <br><br>Third Row
      <br>Ang Shi Qi Georia; Ang Wei Lin; Tan Suan Yee; Ong Peng Yu; Gu Ruishan; Fan Yinuo; Cui Ning Wen
    </p>
  </section>

  <div class="h-px w-[60%] max-w-[900px] bg-athena m-auto"></div>

  <section class="text-justify p-12">
    <img src="/images/Athena/athena.png" alt="" class="aspect-square w-[70%] max-w-[500px] m-auto rounded-xl object-cover">
    <h2 class="mt-12 text-center">The Owl</h2>
    <p class="centered-text-block mt-6">
      Master strategist in warfare, patron of heroic endeavours, it is no surprise that tales from Olympus sung praise to the Goddess of Wisdom, Athena. 
      Closer to home, the Athena Faculty in Hwa Chong is a faculty lush green with zest, joy, and supportive fellow faculty members. 
      We soar with the mighty owl, an emblem of wisdom, and a reminder of the significance we place on embodying thoughtfulness and care in our actions. 
      With Athena Faculty’s unique familial spirit (more specifically, Espirito Verde), we will have one another’s backs through thick and thin. 
      Helmed with knowledge and perspicacity, Athenians work and play hard in this faculty we call home. 
    </p>
  </section>


  <section class="w-full py-6 px-4">
    <h2 class="text-center">Events</h2>
    <p class="text-center mt-2 text-gray-600">Click on the images to learn more</p>
    <div class="mt-4 lg:px-12">
      <MultiCarousel :events="events" faculty="athena"></MultiCarousel>   
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
      '/images/Athena/athena_ori_1.JPG',
      '/images/Athena/athena_ori_2.jpeg',
      '/images/Athena/athena_ori_3.jpeg',
    ],
    text:[
        "O1 is truly a special event for senior and junior Athenians alike. ",
        "Donning our Faculty Shirt and raising our Faculty Sign to the skies, this is but one of the many events where we proudly showcase our strong faculty spirit!",
        "Welcoming our new Athenians to our big Owl family, important highlights of O1 like Senior-Meet-Junior, where senior Athenians warmly welcome junior classes to Athena, and our Post Orientation Party (POP), where new C1s dance together as a Faculty, are sure to be cornerstones of our bonding experience!",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Athena/athena_brunch_1.JPG',
      '/images/Athena/athena_brunch_2.JPEG',
      '/images/Athena/athena_brunch_3.JPG',
    ],
    text:[
        "Faculty Brunch is a special time for Athenians to bond over food, while celebrating the end of the Promotional Examinations!",
        "Witness Athenians give their all in the performances segment, and bond with Athenians from other classes through the games organised by the Faculty Committee.",
        "There’s never a dull moment; so get excited for possibly the best brunch time in your school year!",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Athena/athena_cip_1.jpg',
      '/images/Athena/athena_cip_2.jpg',
      '/images/Athena/athena_cip_3.jpg',
    ],
    text:[
        "An annual service-learning event for all Athenians, FCIP is when Athenians get a chance to put their big hearts on display.",
        "This event has been a fruitful experience for many past batches of Athenians, as it will continue to be for future batches.",
        "It truly is a heartwarming sight to see Athenians giving back to society and helping those in need.",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Athena/athena_welfare_1.JPG',
      '/images/Athena/athena_welfare_2.jpg',
      '/images/Athena/athena_welfare_3.PNG',
    ],
    text:[
        "Athenians can look forward to regular welfare initiatives, where students can enjoy donuts and bubble tea in school! These initiatives encourage and energise Athenians as they go through the busy school year, as delicious treats and attractive giveaways never fail to serve as useful pick-me-ups.",
    ]
  }
]

const cheers = [
  "/images/Athena/athena_cheer_1.jpeg",
  "/images/Athena/athena_cheer_2.jpeg",
  "/images/Athena/athena_cheer_3.jpeg",
  "/images/Athena/athena_cheer_4.jpeg",
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
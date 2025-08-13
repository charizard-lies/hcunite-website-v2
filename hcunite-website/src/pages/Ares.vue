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
          <img src="/images/Ares/ares_photo.jpg" alt="">
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
                ARES
            </h1>
            <a 
            @click.stop 
            @touchstart.stop 
            @touchend.stop 
            target="blank"
            href="https://www.instagram.com/aresfaculty/" 
            class="text-white font-poppins text-md inline-block border-1 border-ares hover:bg-ares rounded-full py-3 px-6 mt-6 lg:text-lg transition-colors duration-300"
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
      <br><br>First row
      <br>Pei Miaozhuang; Sonya Koh; Koh Wei En Ezekiel; Ang Yi Zhe 
      <br><br>Second row
      <br>Heidi Danielle Foo; Ooi Pei Qi; Chang Soo Yin; Ho Rae Hsien Emma; Chai Xin Ying Charisse 
      <br><br>Third row
      <br>Kaelyn Hong Yan Ning; Kyra Tan Xi Xuan; Tasha Rahardja; Kelly Ho Jia Yi; Zhang Yiran; Tan Sze Xuan


    </p>
  </section>

  <div class="h-px w-[60%] max-w-[900px] bg-ares m-auto"></div>

  <section class="text-justify p-12">
    <img src="/images/Ares/ares.png" alt="" class="aspect-square w-[70%] max-w-[500px] m-auto rounded-xl object-cover">
    <h2 class="mt-12 text-center">The Horse</h2>
    <p class="centered-text-block mt-6">
      In the Ares Faculty, the fiery red represents courage and vigour while the warhorse symbolises fearlessness and a tenacious spirit. 
      Being closely associated with a warhorse, Ares is known for his valour and bravery. Similarly, those in the Ares Faculty are warriors – strengthened by love, fuelled by passion.
      <br><br>Beyond the brave warriors that we are, is a close-knit family that values inclusiveness and diversity. 
      Aresians never fail to rally after one another, supporting each other when times get tough. We will charge forth boldly with strength and determination, 
      a fighting spirit and a heart to grow! Daunted you may be, but never defeated.
      <br><br>After all, who dares challenge the God of War?
    </p>
  </section>


  <section class="w-full py-6 px-4">
    <h2 class="text-center">Events</h2>
    <p class="text-center mt-2 text-gray-600">Click on the images to learn more</p>
    <div class="mt-4 lg:px-12">
      <MultiCarousel :events="events" faculty="ares"></MultiCarousel>   
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
      '/images/Ares/ares_ori_1.jpg',
      '/images/Ares/ares_ori_2.JPG',
      '/images/Ares/ares_ori_3.JPG',
    ],
    text:[
        "O1 marks the start of a new year, where we welcome a new batch of C1 students into Ares.",
        "During O1, Aresians are introduced to their new family through various activities, helping Aresians make the tumultuous transition to a new school.",
        "Through O1, Aresians also get a glimpse of the enriching and fulfilling journey that lies ahead of them in Hwa Chong.",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Ares/ares_brunch_1.jpg',
      '/images/Ares/ares_brunch_2.jpg',
      '/images/Ares/ares_brunch_3.jpg',
      '/images/Ares/ares_brunch_4.jpg',
    ],
    text:[
        "The annual Faculty Brunch is a celebration of the end of our Promotional Examinations. After an exhausting school year, Aresians indulge in a medley of breathtaking performances and game shows over a tasty meal together. In 2023, Ares took the leap of faith, opened its doors and entered the exciting fantasy world of Narnia, together.",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Ares/ares_cip_1.jpg',
      '/images/Ares/ares_cip_2.jpg',
    ],
    text:[
        "FCIP serves as an opportunity for Aresians to work together and give back to the community.",
        "Through FCIP, Aresians embark on a journey to understand the importance of service, eventually branching out to serve the community in their individual ways.",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Ares/ares_welfare_1.jpg',
      '/images/Ares/ares_welfare_2.jpeg',
      '/images/Ares/ares_welfare_3.jpeg',
    ],
    text:[
        "Ares Socks, Care Packages and our yummy DelivARES… are you excited for the many more welfare initiatives to come? ",
        "Our newly designed Ares Socks, lends you Ares’s fiery strength, with every Aresian owning a pair.",
        "With DelivARES, your cravings will be satisfied by Warhorses who deliver delicious bites, like bubble tea and doughnuts, straight to your classrooms! During exam seasons, Aresians can also look out for Care Packages that will fuel you up! In 2024, keep a lookout for more to come!!",
    ]
  }
]

const cheers = [
"/images/Ares/ares_cheer_1.jpg",
  "/images/Ares/ares_cheer_2.jpg",
  "/images/Ares/ares_cheer_3.jpg",
  "/images/Ares/ares_cheer_4.jpg",
  "/images/Ares/ares_cheer_5.jpg",
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
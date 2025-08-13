<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import DropdownMenu from './components/DropdownMenu.vue'
import MenuItem from './components/MenuItem.vue'
import { useRoute } from 'vue-router'

//routing data
const mobileMenuOpen = ref(false);
const activeIndex = ref(null)
const menuItems = [
  { label: 'CCAS', external: true, to: 'https://google.com' },
  { 
    label: 'STUDENTS\' COUNCIL',
    external: false,
    to: '/council51',
    subitems: [
      // {label: '52nd HCSC', external: false, to: '/council52'},
      {label: '51st HCSC', external: false, to: '/council51'},
      {label: '50th HCSC', external: false, to: '/council50'},
      // {label: '49th HCSC', external: false, to: '/council49'},
      // {label: '48th HCSC', external: false, to: '/council48'},
    ]
  },
  {
    label: 'FACULTIES',
    external: false,
    to: '/faculties',
    subitems: [
      {label: 'About', external: false, to: '/faculties'},
      {label: 'Apollo', external: false, to: '/apollo'},
      {label: 'Ares', external: false, to: '/ares'},
      {label: 'Artemis', external: false, to: '/artemis'},
      {label: 'Athena', external: false, to: '/athena'},
    ]
  },
  { label: 'SODACHE', external: false, to: '/sodache'  },
  { label: 'ELECTIONS', external: false, to: '/elections'  },
  { label: 'IMPORTANT LINKS', external: false, to: '/links'  }
]

const isAtTop = ref(true);
const isVisible = ref(true);
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentY = window.scrollY;

  // Detect top state
  isAtTop.value = currentY <= 30;

  // Detect scroll direction for hide/show
  if (currentY > lastScrollY.value && currentY > 100) {
    isVisible.value = false; // scrolling down
  } else {
    isVisible.value = true; // scrolling up
  }

  lastScrollY.value = currentY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

//nav logic
const handleToggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const handleClose = () => {
  mobileMenuOpen.value = false
}

//theme colors
const route = useRoute()

const navbarClass = computed(() => {
  switch (route.path) {
    case '/sodache':
      return 'bg-transparent border-1 border-white/20 text-white'
    default:
      return 'bg-white/75'
  }
})

const logoClass = computed(() => {
  switch (route.path) {
    case '/apollo':
      return 'text-apollo-dark hover:text-hwachred'
    case '/ares':
      return 'text-ares hover:text-hwachred'
    case '/artemis':
      return 'text-artemis hover:text-hwachred'
    case '/athena':
      return 'text-athena hover:text-hwachred'
    case '/sodache':
      switch (sodacheStore.activeSection) {
        case 'song':
          return 'text-song hover:text-white'
        case 'dance':
          return 'text-dance hover:text-white'
        case 'cheer':
          return 'text-cheer hover:text-white'
        default:
          return 'bg-hwachred text-white'
      }
    default:
      return 'text-hwachred hover:text-amber-500'
  }
})

import { useSodacheStore } from './stores/sodacheStore'
const sodacheStore = useSodacheStore()

const footerClass = computed(() => {
  switch (route.path) {
    case '/apollo':
      return 'bg-apollo text-black'
    case '/ares':
      return 'bg-ares text-white'
    case '/artemis':
      return 'bg-artemis text-white'
    case '/athena':
      return 'bg-athena text-white'
    case '/sodache':
      switch (sodacheStore.activeSection) {
        case 'song':
          return 'bg-song text-black'
        case 'dance':
          return 'bg-dance text-white'
        case 'cheer':
          return 'bg-cheer text-white'
        default:
          return 'bg-hwachred text-white'
      }
    default:
      return 'bg-hwachred text-white'
  }
})

const bgClass = computed(() => {
  switch (route.path) {
    case '/sodache':
      return 'bg-gray-950'
    default:
      return 'bg-white'
    }
})

</script>



<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden overflow-y-scroll custom-scroll-hide" :class="bgClass">
    <nav 
    class="w-full fixed py-5 px-6 z-50 transition-all duration-500" 
    :class="{
      '-translate-y-full': !isVisible,
    }"
    >
      <!-- inner box -->
      <div 
      class="w-full flex flex-row justify-between m-auto px-5 py-3 rounded-xl transition-all duration-500" 
      :class="navbarClass + (isAtTop? ' text-white !bg-transparent': ' backdrop-blur-xl')">
        <!-- logo -->
        <div class="text-2xl font-inter font-black lg:text-4xl transition-colors duration-300" :class="logoClass"><router-link to="/">HCUNITE</router-link></div>
        <!-- headers -->
        <div class="hidden lg:flex max-w-[80%] gap-5 xl:gap-10 justify-between">
          <DropdownMenu v-for="(item, key) in menuItems" :key="key" :item="item"/>
        </div>

        <!-- hamburger icon -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- mobilee fullscreen menu -->
    <div v-if="mobileMenuOpen" class="fixed top-0 left-0 bg-hwachred-dark size-full  z-50 flex flex-col items-center justify-center text-xl">
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="absolute top-10 right-10">
        <svg fill="white" class="size-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve">
        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
          c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
          c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
          c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
          l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
          c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
        </svg>
      </button>
      <ul>
        <MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" :is-active="activeIndex === index" @toggle="handleToggle(index)" @closeMenu="handleClose()" />
      </ul>
    </div>

    <main class="flex-grow">
      <router-view />
    </main>

    <footer class="px-10 py-10 text-inter text-center transition-all duration-500" :class="footerClass">
      <div class="font-semibold text-md lg:text-xl my-3">
        CHECK OUT OUR OTHER PLATFORMS FOR MORE
      </div>
      <div class="flex flex-row justify-center my-3">
        <a href="https://www.instagram.com/hcunite/">
          <svg class="fill-current h-[70px] w-[70px] p-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
              <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCPz0DNqC6i1pyJvKYhSHlKw">
          <svg class="fill-current h-[70px] w-[70px] p-3" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>youtube [#168]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="currentColor">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://www.facebook.com/hcunite/">
          <svg class="fill-current h-[70px] w-[70px] p-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" fill="none" width="20" height="20"/>
            <g>
              <path d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89c-.49 0-.89-.4-.89-.88V2.88c0-.49.4-.88.89-.88z"/>
            </g>
          </svg>
        </a>
      </div>
      <div class="text-xs my-3">
        CREDIT: STUDIO ARDENT FOR RELEVANT IMAGES
      </div>
    </footer>
  </div>
</template>

<template>
  <div class="rounded-xl border-1 overflow-hidden flex flex-col lg:flex-row" :class="(isMobile? '': 'max-h-[70vh] ') + borderClass">
    <!-- Mobile (horizontal) -->
    <div v-if="isMobile" class="relative overflow-hidden">
      <div class="absolute top-0 left-0 h-full w-28 z-10 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
      <div class="absolute top-0 right-0 h-full w-28 z-10 bg-linear-to-r to-white from-transparent pointer-events-none"></div>
      <div class="absolute top-1/2 left-2 p-2 z-20 transform -translate-y-1/2 ">
        <svg @click="scrollEventLeft" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
          <path d="M15 7L10 12L15 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="absolute top-1/2 right-4 p-2 z-20 transform -translate-y-1/2 ">
        <svg @click="scrollEventRight" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
          <path d="M10 7L15 12L10 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div ref="mobileContainer" class="flex flex-row gap-0 snap-x snap-mandatory overflow-x-auto scroll-smooth custom-scroll-hide border-b-1 " :class="borderClass" @scroll.passive="onMobileScroll">
        <!-- spacer -->
        <div class="shrink-0 w-[40%]"></div>

        <div v-for="(event, i) in events" 
        :key="i" 
        :ref="el => eventRefs[i] = el"
        class="snap-center text-center px-10 py-4 whitespace-nowrap border-r-1" 
        :class="[i === events.length - 1 ? 'border-none ' : ''] + borderClass"
        >
            <h3 class="text-lg sm:text-3xl">
                {{ event.name }}
            </h3>
        </div>

        <!-- spacer -->
        <div class="shrink-0 w-[40%]"></div>
      </div>
    </div>

    <!-- Desktop (vertical) -->
    <div
      v-else
      class="relative h-[70vh] w-[50%] overflow-hidden"
    >

        <div class="h-full overflow-y-auto scroll-smooth flex flex-col">
            <div
            v-for="(event, i) in events"
            :key="i"
            @click="onSelect(i)"
            class="relative overflow-hidden group cursor-pointer px-4 py-4 border-b-1 border-r-1 last:border-b-0 shrink-0 last:grow"
            :class="borderClass"
            >
                <h3 
                :class="selectedIndex === i ? 'translate-x-8 '+textClass : ''"
                class="relative transform group-hover:translate-x-8 transition-all duration-300 ease-in-out z-10">
                    {{ event.name }}
                </h3>
                <div 
                :class="(selectedIndex === i ? 'translate-x-0 ' : '-translate-x-full ') + bgClass"
                class="z-0 h-full absolute inset-0 transform transition-transform duration-300 ease-in-out"
                ></div>
            </div>
        </div>

    </div>

    <!-- pictures -->
    <div class="w-full lg:w-[50%] p-4 lg:max-h-none relative">
        <div class="absolute top-8 right-8 text-white text-sm px-2 py-1 z-10">
            <div class="flex flex-row flex-nowrap gap-2">
                <svg
                v-if="!isMobile" 
                @click="scrollImageLeft" 
                width="32px" 
                height="32px" 
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7L10 12L15 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="m-auto w-8 text-center">{{ currentImageIndex + 1 }}/{{ currentImages.length }}</p>
                <svg 
                v-if="!isMobile"
                @click="scrollImageRight" 
                width="32px" 
                height="32px" 
                viewBox="0 0 24 24" fill=none xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <div ref="imageContainer" 
        class="h-full flex flex-row gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory custom-scroll-hide"
        @scroll.passive="updateCurrentIndex"
        >
            <transition name="fade" mode="out-in">
            <div :key="selectedIndex" class="flex flex-row gap-4 snap-x snap-mandatory ">

                <div v-for="(img, i) in currentImages" 
                :key="i" 
                @click="handleDesktopClick(i)"
                @touchstart="handleTouchStart"
                @touchend="(e) => handleTouchEnd(e, i)"
                class="w-full snap-center flex-shrink-0 rounded-xl overflow-hidden relative"
                >
                    <img :src="img" alt="event picture" class="w-full h-full aspect-auto object-cover object-center" />
                    <div 
                    class="absolute inset-0 transition-opacity duration-500 bg-black/40 backdrop-blur-md rounded-xl" 
                    :class="overlayToggles[selectedIndex][i] ? 'opacity-100' : 'opacity-0'"
                    >
                    </div>
                    <div class="absolute text-white inset-0 p-4 transition-opacity duration-500" :class="overlayToggles[selectedIndex][i] ? 'opacity-100' : 'opacity-0'" >
                        <p v-html="events[selectedIndex].text[i]" :class="isMobile? '':'w-[75%]'">
                            
                        </p>
                    </div>
                    
                </div>
            </div>
            </transition>
        </div>
    </div>

  </div>
</template>

<script setup>
import {computed, onMounted, onUnmounted, watch, watchEffect, ref, nextTick } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    required: true,
    // Optional validator
    validator: (arr) =>
      arr.every(
        (e) =>
          typeof e.name === 'string' &&
          Array.isArray(e.images) &&
          Array.isArray(e.text)
      )
  },
  faculty: String,
})

const events = props.events
const selectedIndex = ref(0)
const isMobile = ref(window.innerWidth < 1024)
const eventRefs = []
const mobileContainer = ref(null)
const visibleIndex = ref(null)

const borderClass = computed(() => {
  const map = {
    apollo: 'border-apollo',
    ares: 'border-ares',
    artemis:   'border-artemis',
    athena:    'border-athena'
  }
  return map[props.faculty] || ''
})

const bgClass = computed(() => {
  const map = {
    apollo: 'bg-apollo',
    ares: 'bg-ares',
    artemis: 'bg-artemis',
    athena: 'bg-athena'
  }
  return map[props.faculty] || ''
})

const textClass = computed(() => {
  const map = {
    apollo: 'text-black',
    ares: 'text-white',
    artemis: 'text-white',
    athena: 'text-white'
  }
  return map[props.faculty] || ''
})

//mobile
function scrollEventLeft() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--
    console.log(selectedIndex.value)
    scrollToMobileEvent(selectedIndex.value)
    console.log("event left")
  }
}

function scrollEventRight() {
  if (selectedIndex.value < events.length - 1) {
    selectedIndex.value++
    console.log(selectedIndex.value)
    scrollToMobileEvent(selectedIndex.value)
    console.log("event right")
  }
}

function scrollToMobileEvent(index) {
  if (eventRefs[index] && mobileContainer.value) {
    eventRefs[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'})
  }
}

function onSelect(index) {
    selectedIndex.value = index
    currentImageIndex.value = 0
    console.log('Event selected:', events[index].name)
    console.log('image index: ', currentImageIndex.value)
}

//scrolling headers
function onMobileScroll() {
  if (!mobileContainer.value) return

  const container = mobileContainer.value
  const containerRect = container.getBoundingClientRect()
  const containerCenter = containerRect.left + containerRect.width / 2

  let closestIndex = 0
  let closestDistance = Infinity

  eventRefs.forEach((el, index) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    const elCenter = rect.left + rect.width / 2
    const distance = Math.abs(containerCenter - elCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  if (selectedIndex.value !== closestIndex) {
    onSelect(closestIndex)
  }
}

//////////////////////////////////////////////////// Images selection
const currentImages = computed(() => events[selectedIndex.value].images)
const imageContainer = ref(null)
const currentImageIndex = ref(0)

function updateCurrentIndex() {
  if (!imageContainer.value) return
  const scrollLeft = imageContainer.value.scrollLeft
  const containerWidth = imageContainer.value.clientWidth
  const index = Math.round(scrollLeft / containerWidth)
  currentImageIndex.value = index
  console.log(index)
}

function scrollImageLeft() {
  if (imageContainer.value) {
    imageContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
    updateCurrentIndex()
  }
}

function scrollImageRight() {
  if (imageContainer.value) {
    imageContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
    updateCurrentIndex()
  }
}

watch(selectedIndex, async () => {
  currentImageIndex.value = 0
  await nextTick()
  if (imageContainer.value) {
    imageContainer.value.scrollTo({ left: 0, behavior: 'smooth' })
  }
})

//text toggle
const overlayToggles = ref([])
watchEffect(() => {
  overlayToggles.value = props.events.map(event =>
    event.images.map(() => false)
  )
})

function toggleImageText(index) {
    console.log(selectedIndex.value, index)
    overlayToggles.value[selectedIndex.value][index] = !overlayToggles.value[selectedIndex.value][index]
}

////////////////////////////////////////////////////handle clicks
let touchXStart = null

//handle scroll or tap
function handleTouchStart(event) {
  touchXStart = event.touches[0].clientX
}

function handleTouchEnd(event, index) {
  const touchXEnd = event.changedTouches[0].clientX
  const deltaX = Math.abs(touchXEnd - touchXStart)

  if (deltaX < 10) {
    // Considered a tap
    toggleImageText(index)
  }

  // otherwise let it scroll
}

//handle desktop click
function handleDesktopClick(index) {
  if (!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) toggleImageText(index)
}

//handle window resize (highly optional)
function handleResize() {
  isMobile.value = window.innerWidth < 1024
}

onMounted(async () => {
  window.addEventListener('resize', handleResize)
  selectedIndex.value = 0

  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    await nextTick()
    // Ensure DOM is ready before measuring
    if (eventRefs[0]) {
      eventRefs[0].scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' })
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
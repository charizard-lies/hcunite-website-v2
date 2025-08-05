<template>
    <div class="relative">
        
        <div class="absolute top-1/2 left-0 sm:left-12 z-20 transform -translate-y-1/2 backdrop-blur-xl bg-white/60 rounded-3xl">
            <svg @click="prev" class="w-12 sm:w-16 aspect-square" viewBox="0 0 24 24" fill="none">
            <path d="M15 7L10 12L15 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div class="absolute top-1/2 right-0 sm:right-12 z-20 transform -translate-y-1/2  backdrop-blur-xl bg-white/60 rounded-3xl">
            <svg @click="next" class="w-12 sm:w-16 aspect-square" viewBox="0 0 24 24" fill="none">
            <path d="M10 7L15 12L10 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div ref="carousel" class="max-h-[80vh] flex flex-row gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory custom-scroll-hide py-6" @scroll.passive="updateCurrentIndex">
            <div class="shrink-0 w-[40%]"></div>
            <div v-for="(img, i) in cheers" 
            :key="i" 
            :ref="el => cheerRefs[i] = el"
            class="flex items-center justify-center snap-center flex-shrink-0 transition-all duration-500"
            :class="currentIndex==i ? 'scale-100':'scale-60'"
            >
                <img :src="img" alt="cheers booklet" class="max-h-full max-w-90 aspect-auto rounded-xl" />
            </div>
            <div class="shrink-0 w-[40%]"></div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  cheers: {
    type: Array,
    required: true,
  }
})

const currentIndex = ref(0)
const carousel = ref(0)

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
  cheerRefs[currentIndex.value].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'})
}

function next() {
  if (currentIndex.value < props.cheers.length - 1) currentIndex.value++
  cheerRefs[currentIndex.value].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'})
}

const cheerRefs = []

function updateCurrentIndex() {
  if (!carousel.value) return

  const container = carousel.value
  const containerRect = container.getBoundingClientRect()
  const containerCenter = containerRect.left + containerRect.width / 2

  let closestIndex = 0
  let closestDistance = Infinity


  cheerRefs.forEach((el, index) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    const elCenter = rect.left + rect.width / 2
    const distance = Math.abs(containerCenter - elCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  if (currentIndex.value !== closestIndex) {
    currentIndex.value = closestIndex
  }
//   const scrollLeft = carousel.value.scrollLeft
//   const containerWidth = carousel.value.clientWidth
//   const index = Math.round(scrollLeft / containerWidth)
//   currentIndex.value = index
}

</script>

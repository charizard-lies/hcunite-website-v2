<template>
  <div>
    <!-- Mobile (horizontal) -->
    <div v-if="isMobile" ref="mobileContainer" class="relative w-full overflow-hidden" @scroll.passive="onMobileScroll">
      <!-- Fading overlays -->
      <div class="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>


      <div ref="scrollSnap" class="flex gap-0 snap-x snap-mandatory overflow-x-auto scroll-smooth py-2">
        <!-- spacer -->
        <div class="shrink-0 w-[40%]"></div>

        <div v-for="(header, i) in headers" 
        :key="i" 
        class="snap-center flex-shrink-0 text-center px-4 py-2 w-[60%] whitespace-nowrap border-r-apollo border-r-1 last:border-none"
        >
            <h2>
                {{ header }}
            </h2>
        </div>

        <!-- spacer -->
        <div class="shrink-0 w-[40%]"></div>
      </div>
    </div>

    <!-- Desktop (vertical) -->
    <div
      v-else
      class="relative h-96 overflow-y-auto px-2 py-2 space-y-2"
    >
      <div
        v-for="(header, i) in headers"
        :key="i"
        @click="onSelect(i)"
        class="cursor-pointer px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        {{ header }}
      </div>

      <!-- Top and bottom fade -->
      <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const headers = [
  'Overview', 'Gallery', 'Details', 'Reviews', 'Pricing', 'FAQ', 'Contact'
]

const isMobile = ref(window.innerWidth < 1024)
const scrollSnap = ref(null)
const mobileContainer = ref(null)

function onSelect(index) {
  console.log('Header selected:', headers[index])
}

// function onMobileScrollEnd() {
//   const container = mobileContainer.value
//   const children = [...scrollSnap.value.children]
//   const center = container.scrollLeft + container.offsetWidth / 2

//   let closest = 0
//   let minDist = Infinity

//   children.forEach((child, index) => {
//     const childCenter = child.offsetLeft + child.offsetWidth / 2
//     const dist = Math.abs(center - childCenter)
//     if (dist < minDist) {
//       minDist = dist
//       closest = index
//     }
//   })

// //   // Snap to closest
// //   children[closest].scrollIntoView({ behavior: 'smooth', inline: 'center' })
// //   onSelect(closest)
// }

// let scrollTimeout
// function onMobileScroll() {
//   clearTimeout(scrollTimeout)
//   scrollTimeout = setTimeout(() => {
//     onMobileScrollEnd()
//   }, 100)
// }

function handleResize() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
//   clearTimeout(scrollTimeout)
})
</script>

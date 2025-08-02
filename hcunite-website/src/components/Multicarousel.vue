<template>
  <div class="rounded-xl border-apollo border-1 overflow-hidden flex flex-col lg:flex-row">
    <!-- Mobile (horizontal) -->
    <div v-if="isMobile" ref="mobileContainer" class="relative overflow-hidden" @scroll.passive="onMobileScroll">

      <div class="flex flex-row gap-0 snap-x snap-mandatory overflow-x-auto scroll-smooth py-2">
        <!-- spacer -->
        <div class="shrink-0 w-[40%]"></div>

        <div v-for="(event, i) in events" 
        :key="i" 
        :ref="el => eventRefs[i] = el"
        class="snap-center flex-shrink-0 text-center px-4 py-2 min-w-[60%] whitespace-nowrap border-r-apollo border-r-1 last:border-none"
        >
            <h3 class="text-xl sm:text-3xl">
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
            class="relative overflow-hidden group cursor-pointer px-4 py-4 border-apollo border-b-1 border-r-1 last:border-b-0 shrink-0 last:grow"
            >
                <h3 
                :class="selectedIndex === i ? 'translate-x-8' : ''"
                class="relative text-black transform group-hover:translate-x-8 transition-transform duration-300 ease-in-out z-10">
                    {{ event.name }}
                </h3>
                <div 
                :class="selectedIndex === i ? 'translate-x-0' : '-translate-x-full'"
                class="z-0 absolute inset-0 bg-apollo transform transition-transform duration-300 ease-in-out"
                ></div>
            </div>
        </div>

    </div>

    <!-- pictures -->
    <div class="w-full lg:w-[50%] max-h-[50vh] lg:max-h-none flex flex-row gap-4 px-4 py-4 overflow-x-auto scroll-smooth snap-x snap-mandatory ">
        <div class="flex flex-row gap-4 snap-x snap-mandatory ">

            <div v-for="(img, i) in currentImages" 
            :key="i" 
            @click="handleDesktopClick(i)"
            @touchstart="handleTouchStart"
            @touchend="(e) => handleTouchEnd(e, i)"
            class="w-full snap-center flex-shrink-0 rounded-lg overflow-hidden relative"
            >
                <img :src="img" alt="event picture" class="w-full h-full aspect-auto object-cover object-center" />
                <div 
                class="absolute inset-0 bg-black transition-opacity duration-500" 
                :class="overlayToggles[selectedIndex][i] ? 'opacity-50' : 'opacity-0'"
                >
                </div>
                <div class="absolute text-white inset-0 p-4" :class="overlayToggles[selectedIndex][i] ? 'opacity-100' : 'opacity-0'" >
                    <p>
                        {{events[selectedIndex].text[i]}}
                    </p>
                </div>
                
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import {computed, onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'

const selectedIndex = ref(0)
const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/informal_council_pic.jpg',
      '/images/test.jpeg',
      'https://example.com/orientation3.jpg',
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
      'https://example.com/brunch2.jpg',
      'https://example.com/brunch3.jpg',
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
      'https://example.com/fcip1.jpg',
      'https://example.com/fcip2.jpg',
      'https://example.com/fcip3.jpg',
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
      'https://example.com/welfare1.jpg',
      'https://example.com/welfare2.jpg',
      'https://example.com/welfare3.jpg',
    ],
    text:[
        "djafaldjfldjf",
        "aldfkjdslfjlkdjslf",
        "dlfkjladjfljdslfjlsdlf",
    ]
  }
]
const overlayToggles = ref(events.map(event => event.images.map(() => false)))

// Images of the currently selected event (reactive)
const currentImages = computed(() => events[selectedIndex.value].images)

const isMobile = ref(window.innerWidth < 1024)
const eventRefs = []
const mobileContainer = ref(null)
const visibleIndex = ref(null)


function onSelect(index) {
    selectedIndex.value = index
    console.log('Event selected:', events[index].name)
}

//handle mobile snapping
onMounted(() => {
    if (!isMobile.value) return

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const index = eventRefs.findIndex(el => el === entry.target)
            if (index !== visibleIndex.value) {
                visibleIndex.value = index
                onSelect(index)
            }
            }
        })
        },
        {
        root: mobileContainer.value,
        threshold: 0.6, // item is considered "in view" if 60% is visible
        }
    )

    eventRefs.forEach(el => {
        if (el) observer.observe(el)
    })

    onBeforeUnmount(() => observer.disconnect())
})


//handle window resize (highly optional)
function handleResize() {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  selectedIndex.value = 0
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

//handle image taps
let touchXStart = null

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

function handleDesktopClick(index) {
  if (!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) toggleImageText(index)
}

function toggleImageText(index) {
    console.log(selectedIndex.value, index)
    overlayToggles.value[selectedIndex.value][index] = !overlayToggles.value[selectedIndex.value][index]
}
</script>

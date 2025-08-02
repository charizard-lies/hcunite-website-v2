<script setup>
import { ref, watchEffect, onMounted, nextTick } from 'vue'

const props = defineProps({
  header: {
    type: String,
    default: 'Click to reveal'
  },
  containerClass: {
    type: String,
    default: 'w-full mx-auto'
  },
  textContainerClass: {
    type: String,
    default: 'flex flex-row flex-nowrap justify-between px-8 py-8 cursor-pointer font-poppins'
  },
  headerClass: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: 'bg-gray-50 px-4 py-8'
  }
})

const isOpen = ref(false)
const content = ref(null)
const contentScrollHeight = ref(0)

function toggle() {
  isOpen.value = !isOpen.value
  updateScrollHeight()
}

function updateScrollHeight() {
  nextTick(() => {
    if (content.value) {
      contentScrollHeight.value = content.value.scrollHeight
    }
  })
}

onMounted(updateScrollHeight)

watchEffect(() => {
  if (isOpen.value) {
    updateScrollHeight()
  }
})
</script>

<template>
  <div :class="containerClass">
    <div :class="textContainerClass" @click="toggle">
        <h3 :class="headerClass">
        {{ header }}
        </h3>
        <h3  :class="{ 'rotate-180': isOpen }" class=" text-4xl my-auto transition-transform duration-500">▼</h3>
    </div>
    <div class="h-px w-full bg-hwachred m-auto"></div>
    <div
      ref="content"
      class="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      :style="{ maxHeight: isOpen ? contentScrollHeight + 'px' : '0px' }"
    >
      <div :class="contentClass">
        <slot>
          <!-- Fallback content -->
          <p class="text-gray-600">No content provided.</p>
        </slot>
      </div>
    </div>
  </div>
</template>
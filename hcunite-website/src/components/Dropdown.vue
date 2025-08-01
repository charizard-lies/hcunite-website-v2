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
  headerClass: {
    type: String,
    default: 'bg-blue-500 text-white px-4 py-2 cursor-pointer'
  },
  contentClass: {
    type: String,
    default: 'bg-gray-100 px-4 py-2'
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
    <div
      :class="headerClass"
      @click="toggle"
    >
      {{ header }}
    </div>
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
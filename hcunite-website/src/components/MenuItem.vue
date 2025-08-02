<template>
  <li class="mb-4">
    <div class="flex items-center justify-between cursor-pointer text-white" v-on="item.subitems ? {click: () => $emit('toggle')} : {}">
      <!-- label -->
      <component :is="resolveComponent(item)" v-bind="resolveAttrs(item)" class="text-xl cursor-pointer" @click="handleClick(item)">
        {{ item.label }}
      </component>

      <!-- arrow -->
      <span v-if="item.subitems" class="ml-2 text-xl transition-transform " :class="{ 'rotate-180': isActive }">
        ▼
      </span>
    </div>

    <!-- list -->
    <ul 
    ref="content" 
    v-if="item.subitems" 
    class="ml-4 mt-2 space-y-2 overflow-hidden transition-[max-height] duration-500 ease-in-out"
    :style="{ maxHeight: isActive ? contentScrollHeight + 'px' : '0px' }"
    >
      <li v-for="(sub, i) in item.subitems" :key="i" class="text-gray-200">

        <a v-if="sub.external" :href="sub.to" target="_blank" rel="noopener" @click="$emit('closeMenu')">
            {{ sub.label }}
        </a>
        
        <router-link v-else :to="sub.to" @click="$emit('closeMenu')">
            {{ sub.label }}
        </router-link>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  item: Object,
  isActive: Boolean
})

const emit = defineEmits(['toggle', 'closeMenu'])

function resolveComponent(item) {
  if (item.subitems) return 'div'
  return item.external ? 'a' : 'router-link'
}

function resolveAttrs(item) {
  if (item.subitems) return {}

  if (item.external) {
    return {
      href: item.to,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return {
    to: item.to,
  }
}

function handleClick(item) {
  if (!item.subitems) {
    // only emit when there are no subitems
    emit('closeMenu')
  }
}

//scroll logic
const content = ref(null)
const contentScrollHeight = ref(0)

function updateScrollHeight() {
  nextTick(() => {
    if (content.value) {
      contentScrollHeight.value = content.value.scrollHeight
    }
  })
}

onMounted(updateScrollHeight)

watch(() => props.isActive, (newVal) => {
  console.log("success!")
  updateScrollHeight()
})
</script>
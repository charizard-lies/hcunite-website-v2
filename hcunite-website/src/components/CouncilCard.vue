<template>
    <div @click="test">
        <img :src="imageUrl" @error="onImgError" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
        <div class="p-3 sm:py-6 xl:px-6 w-full m-auto font-poppins">
            <h2 class="text-2xl sm:text-3xl">{{ name }}</h2>
            <h4 class="text-lg sm:text-xl text-gray-600">{{ position }}</h4>
            <p v-html="formattedDescription" class="text-xs sm:text-sm text-justify break-words pt-4"></p>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'

const props = defineProps({
    name: String,
    council: String,
    year: String,
    position: String,
    description: String,
})

const formattedName = props.name
  .replace(/,/g, '')
  .replace(/\s+/g, '+')
  .replace(/[,]/g, '')
  .replace(/\//g, '')

const exts = ['.jpg', '.png', '.webp']
const currentIndex = ref(0)

const imageUrl = computed(() => {
  const base = `/images/${props.year}/${props.council}_${formattedName}`
  return base + exts[currentIndex.value]
})

function onImgError() {
  if (currentIndex.value < exts.length - 1) {
    currentIndex.value++
  }
}

const formattedDescription = computed(() => {
  if (!props.description) return ''
  return props.description.replace(/\n/g, '<br>')
})

</script>
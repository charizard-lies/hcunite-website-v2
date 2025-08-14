<template>
    <div @click="test">
        <img :src="imageUrl" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
        <div class="p-3 sm:py-6 xl:px-6 w-full m-auto font-poppins">
            <h2 class="text-2xl sm:text-3xl">{{ name }}</h2>
            <h4 class="text-lg sm:text-xl text-gray-600">{{ position }}</h4>
            <p v-html="formattedDescription" class="text-xs sm:text-sm text-justify break-words pt-4"></p>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'

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

function getImageUrl() {
  const base = `../assets/${props.year}/${props.council}_${formattedName}`
  const exts = ['.jpg', '.JPG', '.JPEG', '.jpeg', '.png', '.PNG', '.webp']

  for (const ext of exts) {
    try {
      return new URL(base + ext, import.meta.url).href
    } catch {}
  }

  console.log('imageurl not found')
  return '' // fallback if not found
}

const imageUrl = getImageUrl()

// function test(){
//     console.log(formattedName)
// }

const formattedDescription = computed(() => {
  if (!props.description) return ''
  return props.description.replace(/\n/g, '<br>')
})

</script>
<template>

</template>

<script setup>
const props = defineProps({
  photos: {
    type: Array,
    required: true,
  }
})

const currentIndex = ref(0)
const carousel = ref(0)

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function next() {
  if (currentIndex.value < props.photos.length - 1) currentIndex.value++
}

function updateCurrentIndex() {
  if (!imageContainer.value) return
  const scrollLeft = carousel.value.scrollLeft
  const containerWidth = carousel.value.clientWidth
  const index = Math.round(scrollLeft / containerWidth)
  currentIndex.value = index
  console.log(index)
}

</script>
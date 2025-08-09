<template>
    <section class="mt-20 px-8 py-4 lg:py-12">
        <h1 class="text-6xl lg:text-9xl cursor-pointer">
            <span @click="changeSection('song')" class="transition-colors duration-300" :class="activeSection=='song' ? 'text-song':'text-gray-700'">SO</span>
            <span @click="changeSection('dance')" class="transition-colors duration-300" :class="activeSection=='dance' ? 'text-dance':'text-gray-700'">DA</span>
            <span @click="changeSection('cheer')" class="transition-colors duration-300" :class="activeSection=='cheer' ? 'text-cheer':'text-gray-700'">CHE</span>
        </h1>
        <p class="text-white ml-2">Click on the image to go to the song's <a class=" underline" href="">Spotify</a></p>
    </section>
    <section class="px-8 pb-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4">
        <div v-for="(item, i) in sodache[activeSection]">
            <SodacheItem :propData="item" :section="activeSection"></SodacheItem>
        </div>
    </section>
</template>

<script setup>
import SodacheItem from '../components/SodacheItem.vue'
import { useSodacheStore } from '../stores/sodacheStore'
import {ref, watch} from 'vue'

const activeSection = ref("song")
const sodacheStore = useSodacheStore()

function changeSection(section){
    activeSection.value = section
}

const sodache = {
    "song": [{
        "englishTitle": false,
        "englishComposer": false,
        "title": "当你孤单你会想起谁",
        "composer": "张栋梁",
        "description": "This song was rearranged from a Taiwanese pop song sung by 张栋梁.This song reminds Hwa Chongians that in times of loneliness, evoking the memories of the good times spent in Hwa Chong with other schoolmates will dispel all feelings of solitude.",
        "image": "/images/test.jpeg",
        "link": "https://www.google.com"
    },
    {
        "english": false,
        "englishComposer": true,
        "title": "只为那爱我愿",
        "composer": "Sook Neo",
        "description": "Composed by the 12th Students’ Council Song I/C, Sook Neo. The lyrics speak strongly about the love of the school and the dedication of its students. Despite any trials and tribulations, Hwa Chongians will remain strong, push on and enjoy the journey together.",
        "image": "/images/test.jpeg",
        "link": "https://www.google.com"
    },
    {
        "english": true,
        "title": "情真情深",
        "description": "Composed by the 19th Students’ Council Song I/C, Ho Han Kiat, and assisted by his batch. The captivating lyrics encapsulate a shared vision amongst the batch and express their passionate love for the school.",
        "image": "/images/test.jpeg",
        "link": "https://www.google.com"
    }],
    "dance": [{
        "english": true,
        "title": "情真情深  ",
        "description": "Composed by the 19th Students’ Council Song I/C, Ho Han Kiat, and assisted by his batch. The captivating lyrics encapsulate a shared vision amongst the batch and express their passionate love for the school.",
        "image": "/images/test.jpeg",
        "link": "https://www.google.com"
    }],
    "cheer": [{
        "english": true,
        "title": "情真情深  ",
        "description": "Composed by the 19th Students’ Council Song I/C, Ho Han Kiat, and assisted by his batch. The captivating lyrics encapsulate a shared vision amongst the batch and express their passionate love for the school.",
        "image": "/images/test.jpeg",
        "link": "https://www.google.com"
    }]
}

watch(activeSection, (newVal) => {
  sodacheStore.activeSection = newVal
}, { immediate: true })
</script>
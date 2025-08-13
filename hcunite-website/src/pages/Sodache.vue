<template>
    <section class="mt-20 px-8 py-4 lg:py-12">
        <h1 class="text-6xl lg:text-9xl cursor-pointer">
            <span @click="changeSection('song')" class="transition-colors duration-300" :class="activeSection=='song' ? 'text-song':'text-gray-700'">SO</span>
            <span @click="changeSection('dance')" class="transition-colors duration-300" :class="activeSection=='dance' ? 'text-dance':'text-gray-700'">DA</span>
            <span @click="changeSection('cheer')" class="transition-colors duration-300" :class="activeSection=='cheer' ? 'text-cheer':'text-gray-700'">CHE</span>
        </h1>
        <p v-if="activeSection=='song'" class="text-white ml-2">Click on the image to go to the song's <a class=" underline" href="">Spotify</a></p>
    </section>
    <section class="px-4 pb-8">
        <div v-if="activeSection=='song'" class="px-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            <div v-for="(item, i) in sodache[activeSection]">
                <SodacheItem :propData="item" :section="activeSection"></SodacheItem>
            </div>
        </div>
        <div v-else>
            <div v-for="(item, i) in sodache[activeSection]" class="w-full p-4 flex md:flex-row flex-col gap-4 lg:gap-12 rounded-xl hover:bg-gray-800">
                <iframe class="flex-1 aspect-video md:max-w-1/2 rounded-xl" :src="item.link" title="I&#39;ve Had The Time of My Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="flex-1 py-4">
                    <h2 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white">{{ item.title }}</h2>
                    <h3 v-if="item.artist" class="text-base md:text-xl md:mt-2 text-white/80">{{ item.artist }}</h3>
                    <p class="text-white mt-4">{{ item.description }}</p>
                </div>
            </div>
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
        "title": "当你孤单你会想起谁",
        "composer": "张栋梁",
        "description": "This song was rearranged from a Taiwanese pop song sung by 张栋梁.This song reminds Hwa Chongians that in times of loneliness, evoking the memories of the good times spent in Hwa Chong with other schoolmates will dispel all feelings of solitude.",
        "image": "/images/sodache/4.png",
        "link": "https://www.google.com"
    },
    {
        "title": "只为那爱我愿",
        "composer": "Sook Neo",
        "description": "Composed by the 12th Students’ Council Song I/C, Sook Neo. The lyrics speak strongly about the love of the school and the dedication of its students. Despite any trials and tribulations, Hwa Chongians will remain strong, push on and enjoy the journey together.",
        "image": "/images/sodache/11.jpg",
        "link": "https://www.google.com"
    },
    {
        "title": "情真情深",
        "composer": "Ho Han Kiat",
        "description": "Composed by the 19th Students’ Council Song I/C, Ho Han Kiat, and assisted by his batch. The captivating lyrics encapsulate a shared vision amongst the batch and express their passionate love for the school.",
        "image": "/images/sodache/10.png",
        "link": "https://www.google.com"
    },
    {
        "title": "细水长流",
        "composer": "Sook Neo",
        "description": "Composed by one of our former Council presidents and local 新 遥 artiste, Liang Wern Fook, this song was written in the form of a flashback of the memories of one's transient schooling years and beyond, where the strongest camaraderie is founded amongst schoolmates. This heartwarming and reminiscent song serves to remind Hwa Chongians to appreciate every friend who has filled their hearts with warmth and countless unforgettable memories.",
        "image": "/images/sodache/8.png",
        "link": "https://www.google.com"
    },
    {
        "title": "心旅",
        "description": "A fun, light-hearted song which involves interaction between male and female students in the form of mock-jeering at each other. This song is a reflection of the short but meaningful times that every batch of students will experience in Hwa Chong. Although these times may pass, the memories and friendships forged are everlasting.",
        "image": "/images/sodache/6.png",
        "link": "https://www.google.com"
    },
    {
        "title": "也是深情",
        "composer": "Rodney Tan",
        "description": "This is a song written by the 14th Students’ Council guitarist, Rodney Tan in 1987. During their term, the 14th Students’ Council was heavily taxed with the relocation of the Hwa Chong campus to Ngee Ann and then Bukit Batok. Yet through this experience, the students developed a greater sense of belonging towards the school. Rodney’s composition reflects his feelings towards the rapid changes and the spirit of the students.",
        "image": "/images/sodache/7.png",
        "link": "https://www.google.com"
    },
    {
        "title": "唱一首华初的歌",
        "composer": "Liang Wern Fook",
        "description": "This is one of the oldest and most significant college songs, and holds a special place in many Hwa Chongians’ hearts. It was composed by one of the former Council presidents, Mr Liang Wern Fook, after he lost an inter-school debating competition. Written during the time of the pioneering batches, this song has been favoured by students for the popular hand actions that are often used while singing the song.",
        "image": "/images/sodache/9.png",
        "link": "https://www.google.com"
    },
    {
        "title": "Never Forget",
        "composer": "Galvin Sng",
        "description": "This was the first English song to be introduced to Hwa Chong’s purely Chinese collection of college songs. Never Forget was reconstructed from a song composed by Galvin Sng (99S31), who moved on to become a teacher in the High School section. the song describes life in Hwa Chong and the friendships and memories that Hwa Chongians will never forget.",
        "image": "/images/sodache/12.jpg",
        "link": "https://www.google.com"
    },
    {
        "title": "Destinations",
        "composer": "Wong Yang Cheng and Natalee Ho",
        "description": "This is a sentimental and catchy song that was written by the 37th Students’ Council Song I/Cs, Wong Yang Cheng and Natalee Ho. It was originally written as a batch song for the new J1 students entering the school, describing the transitions and feelings that they will experience as they step into Hwa Chong for the first time, and how Hwa Chong will always be their home where they love and belong.",
        "image": "/images/sodache/5.png",
        "link": "https://www.google.com"
    },
    {
        "title": "Memories That'll Last",
        "composer": "Chong Yin Shan Charlene, Zhu Bolin, and Jacob Tseng",
        "description": "The 48th Song I/Cs collaborated with Jacob Tseng from the 48th to produce a unique SODACHE song that intends to capture the spirit of strength and unity during the pandemic they faced. With the uplifting tune and upbeat tempo, they hope that through this song, students will be spurred to stay positive and cherish the rest of their two years in school.",
        "image": "/images/sodache/13.jpeg",
        "link": "https://www.google.com"
    },
    {
        "title": "钟声依旧",
        "composer": "Liang Wern Fook",
        "description": "This song was written in celebration of Hwa Chong’s 100th anniversary in 2019 by Liang Wern Fook to describe the emotions of alumni as they return to the campus and reminisce their memories with their teachers and friends.",
        "image": "/images/sodache/1.png",
        "link": "https://www.google.com"
    },
    {
        "title": "华中行",
        "description": "A well-liked, upbeat song that serves as a timely reminder of the various values all Hwa Chongians are expected to uphold.",
        "image": "/images/sodache/2.png",
        "link": "https://www.google.com"
    }
    ],
    "dance": [{
        "title": "I’ve Had The Time of My Life",
        "artist": "Bill Medley & Jennifer Warnes",
        "description": "A relatively slow-paced dance with a calming effect as you reminisce about the times shared with your beloved friends. P.S.: Best danced together with the right person",
        "link": "https://www.youtube.com/embed/0RlCPXMw5b4"
    },
    {
        "title": "Beechwood",
        "artist": "The Carpenters",
        "description": "Easy and fun to learn! Great for starters.",
        "link": "https://www.youtube.com/embed/2HCOmvfPmm4"
    },
    {
        "title": "I’ve Got My Mind Set On You",
        "artist": "George Harrison",
        "description": "Got your mind set on anyone? Here’s your chance to show them your dancing prowess! Get ready to swim and chicken your way through the dance!",
        "link": "https://www.youtube.com/embed/6fAA2Vwjyzo"
    },
    {
        "title": "Wild Wild West",
        "artist": "The Escape Club",
        "description": "Not a cowboy dance as the name suggests, but get ready to show off some of your awesome butt-jerking moves and go WILD!",
        "link": "https://www.youtube.com/embed/BgVbgzGxcis"
    },
    {
        "title": "Together in Electric Dreams",
        "artist": "Giorgio Moroder & Philip Oakley ",
        "description": "An up-tempo and exciting dance that will keep you constantly moving on the dance floor! Be prepared for ELECTRIFYING moves.",
        "link": "https://www.youtube.com/embed/c98a2sYlE9g"
    },
    ],
    "cheer": [
    {
        "title": "Countdown",
        "description": "The Countdown cheer is often used to hype up the crowd. It is commonly cheered at the beginning of competitions to ignite the spirit in Hwa Chongians and to give us faith that we will triumph in the competition.",
        "link": "https://www.youtube.com/embed/3RjmXOEjYMY"
    },
    {
        "title": "Hey-Yo",
        "description": "Hey-Yo is an uplifting chant that strives to encourage every Hwa Chongian to do their very best! A simple yet impactful chant, Hey-Yo is mainly used during competitions. This chant was created by the 39th Cheer I/Cs, Joe Lee and Shanna Chua",
        "link": "https://www.youtube.com/embed/F7TrmyyFrRI"
    },
    {
        "title": "Hwa Chong Kebaba",
        "description": "Hwa Chong Kebaba is simple but effective call and response cheer, which showcases the might of our school.",
        "link": "https://www.youtube.com/embed/tEAX_lnxPjM"
    },
    {
        "title": "North South East West",
        "description": "North South East West exhibits our love for the school and lets others know that we are proud to be from Hwa Chong.",
        "link": "https://www.youtube.com/embed/tzFSenawCEk"
    },
    {
        "title": "Rock You",
        "description": "With its catchy and rhythmic beat, Rock You shakes the floor and encourages us to press on even in times of difficulties.",
        "link": "https://www.youtube.com/embed/VdHyfPUaWZU"
    },
    {
        "title": "Shan Ge",
        "description": "山歌 is a traditional cheer passed down from many generations and is one of the cheers especially enjoyed by our alumni. It is usually cheered during joyous occasions and major events to show our pride for the school!",
        "link": "https://www.youtube.com/embed/7gcbFpX-Uic"
    },
    {
        "title": "Sexy Cheer",
        "description": "From soft and slow to loud and fast, the Sexy Cheer is an unconventional cheer which lets us feel super cool about ourselves!",
        "link": "https://www.youtube.com/embed/aCfGKucZC2w"
    },
    {
        "title": "Go Fight Win",
        "description": "This cheer aims to motivate us and it emphasises the importance of pressing on. In addition, the words “GO FIGHT WIN” are printed on the biggest banner in school, stretching up to 30 metres in length. xD",
        "link": "https://www.youtube.com/embed/CIx0Vc03qRE"
    },
    {
        "title": "Willow",
        "description": "The Willow cheer identifies us as Hwa Chongians. It shows others who we are and tells them that we are proud to be from Hwa Chong! :D",
        "link": "https://www.youtube.com/embed/hx2ob8brddo"
    },
    {
        "title": "Hwa Chong Shuai",
        "description": "Adapted from the tune of a pop song by Nicki Minaj, Hwa Chong Boom is a catchy and unconventional cheer which reflects our 自强不息 spirit. ^^ This cheer was created by the 38th Students’ Council Cheer I/Cs Shawn Teo and Jessy Zhang.",
        "link": "https://www.youtube.com/embed/cXWmm_nWmTE"
    },
    {
        "title": "Holler",
        "description": "Holler is a catchy cheer that serves to lift up the mood and encourage everyone to not give up.",
        "link": "https://www.youtube.com/embed/wjaRfyZJaxE"
    }]
}

watch(activeSection, (newVal) => {
  sodacheStore.activeSection = newVal
}, { immediate: true })
</script>